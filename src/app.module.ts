import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { UsersModule } from './users/user.module';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [PropertyModule, UsersModule, JobsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
