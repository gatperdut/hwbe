import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDtoIn } from './dto/auth-login-dto-in.type';
import { AuthRegisterDtoIn } from './dto/auth-register-dto-in.type';
import { AuthTokenPayload } from './types/auth-token-payload.type';
import { AuthToken } from './types/auth-token.type';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    // Empty
  }

  // TODO need to be async?
  @Post('register')
  public async register(@Body() body: AuthRegisterDtoIn) {
    return this.authService.register(body.displayName, body.email, body.password);
  }

  @Post('login')
  public async login(@Body() body: AuthLoginDtoIn) {
    return this.authService.login(body.email, body.password);
  }

  @Post('verify-token')
  public verifyToken(@Body() body: AuthToken): AuthTokenPayload {
    return this.authService.verifyToken(body.token);
  }
}
