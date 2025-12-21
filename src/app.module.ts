import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthMiddleware } from './auth/auth.middleware';
import { AuthModule } from './auth/auth.module';
import { SocketModule } from './socket/socket.module';
import { UserModule } from './user/user.module';

@Module({
  // TODO {isGlobal:true} for ConfigModule
  imports: [ConfigModule.forRoot(), SocketModule, AuthModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        // Auth
        { path: 'auth/login', method: RequestMethod.POST },
        { path: 'auth/register', method: RequestMethod.POST },
        { path: 'auth/verify-token', method: RequestMethod.POST },
        // User
        { path: 'users/available-email', method: RequestMethod.GET },
        { path: 'users/available-display-name', method: RequestMethod.GET },
      )
      .forRoutes('*');
  }
}
