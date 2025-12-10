import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private configService: ConfigService) {
    const DATABASE_URL = `postgresql://${this.configService.get('DATABASE_USER')}:${this.configService.get('DATABASE_PASSWORD')}@${this.configService.get('DATABASE_HOST')}:${this.configService.get('DATABASE_PORT')}/${this.configService.get('DATABASE_NAME')}`;

    configService.set('DATABASE_URL', DATABASE_URL);
  }
}
