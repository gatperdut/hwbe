import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login-dto.type';
import { AuthRegisterDto } from './dto/auth-register-dto.type';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    // Empty
  }

  @Post('register')
  public async register(@Body() body: AuthRegisterDto) {
    return this.authService.register(body.displayName, body.email, body.password);
  }

  @Post('login')
  public async login(@Body() body: AuthLoginDto) {
    return this.authService.login(body.email, body.password);
  }
}
