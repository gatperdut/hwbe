import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';

@Module({
  controllers: [CampaignController],
  providers: [CampaignService],
  imports: [PrismaModule],
  exports: [CampaignService],
})
export class CampaignModule {
  // Empty
}
