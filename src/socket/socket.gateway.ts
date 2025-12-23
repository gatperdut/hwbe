import { UnauthorizedException } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { plainToInstance } from 'class-transformer';
import { Server } from 'socket.io';
import { AuthService } from 'src/auth/auth.service';
import { AuthTokenPayload } from 'src/auth/types/auth-token-payload.type';
import { UserDtoOut } from 'src/user/dto/user-out.dto';
import { UserService } from 'src/user/user.service';
import { HwbeSocket } from './types/hwbe-socket.type';

@WebSocketGateway({ cors: true })
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  private server!: Server;

  private sockets: HwbeSocket[] = [];

  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {
    // Empty>
  }

  public async handleConnection(socket: HwbeSocket): Promise<void> {
    try {
      const token: string = socket.handshake.auth?.token;

      if (!token) {
        throw new UnauthorizedException('Authorization token is missing');
      }

      const payload: AuthTokenPayload = this.authService.verifyToken(token);

      socket.data.user = await this.userService.byId({ id: payload.userId });

      this.sockets.push(socket);

      socket.broadcast.emit('users:join', {
        socketId: socket.id,
        user: plainToInstance(UserDtoOut, socket.data.user, { excludeExtraneousValues: true }),
      });

      socket.emit(
        'users:all',
        this.sockets.map((someSocket: HwbeSocket) => {
          return {
            socketId: someSocket.id,
            user: plainToInstance(UserDtoOut, someSocket.data.user, {
              excludeExtraneousValues: true,
            }),
          };
        }),
      );
    } catch {
      socket.disconnect(true);
    }
  }

  public handleDisconnect(socket: HwbeSocket): void {
    const index: number = this.sockets.findIndex(
      (someSocket: HwbeSocket): boolean => someSocket.id === socket.id,
    );

    if (index < 0) {
      return;
    }

    this.sockets.splice(index, 1);

    this.server.emit('users:leave', {
      socketId: socket.id,
      user: plainToInstance(UserDtoOut, socket.data.user, { excludeExtraneousValues: true }),
    });
  }
}
