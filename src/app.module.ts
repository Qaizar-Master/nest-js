import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { UsersModule } from './users/user.module';
import { JobsModule } from './jobs/jobs.module';
import { NewJobsModule } from './new-jobs/jobs.module';

@Module({
  imports: [PropertyModule, UsersModule, JobsModule, NewJobsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
