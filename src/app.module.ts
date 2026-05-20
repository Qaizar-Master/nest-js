import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { UsersModule } from './users/user.module';
import { JobsModule } from './jobs/jobs.module';
import { NewJobsModule } from './new-jobs/jobs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './db.config';

@Module({
  imports: [PropertyModule, UsersModule, JobsModule, NewJobsModule, 
    // 1. First, load the .env variables and register your database config factory globally
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    
    // 2. Then, initialize TypeORM asynchronously using the ConfigService
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        // Grabs everything we exported from database.config.ts
        ...configService.get('database'), 
        
        // Tells NestJS to automatically look through your modules 
        // and register your @Entity() classes without listing them manually
        autoLoadEntities: true, 
      }),
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
