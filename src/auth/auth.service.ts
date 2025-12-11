import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { User } from 'src/generated/client';
import { UserService } from 'src/user/user.service';
import { AuthToken } from './types/auth-token.type';

@Injectable()
export class AuthService {
  private readonly jwtSecret: string = 'supersecretkey'; // TODO .env

  constructor(private userService: UserService) {
    // Empty
  }

  public async hashPassword(password: string): Promise<string> {
    const salt: string = await bcrypt.genSalt();

    return bcrypt.hash(password, salt);
  }

  public generateToken(userId: number): string {
    return jwt.sign({ userId }, this.jwtSecret, { expiresIn: '1h' });
  }

  public async register(displayName: string, email: string, password: string): Promise<AuthToken> {
    const hashedPassword: string = await this.hashPassword(password);

    const user: User = await this.userService.create({
      displayName: displayName,
      email: email,
      password: hashedPassword,
    });

    const token: string = this.generateToken(user.id);

    return { token: token }; // TODO could return just the string?
  }

  public async login(email: string, password: string): Promise<AuthToken> {
    const user = await this.userService.getByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const token: string = this.generateToken(user.id);

    return { token: token };
  }

  public validateToken(token: string): User {
    try {
      return jwt.verify(token, this.jwtSecret) as User;
    } catch {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
