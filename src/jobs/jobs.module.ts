import { MethodNotAllowedException, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { JobsController } from './jobs.controller';
import { InterviewController } from './controllers/interview.controller';
import { userAgent, UserAgentMiddleware, UserAgentOptions } from '../middlewares/user-agent.middleware';
import path from 'path';
import { AuthMiddleware } from '../middlewares/auth.middleware';

@Module({
  controllers: [JobsController, InterviewController],
  providers : [
    {
      provide: UserAgentOptions,
      useValue: ["chrome", "firefox", "postman"]
    }
  ],
})
export class JobsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(userAgent).forRoutes("jobs"); --> functional based middleware
    consumer.apply(AuthMiddleware, UserAgentMiddleware).forRoutes("jobs", "interviews");
    // here in forRoutes we can directly pass complete controller also instead of just routes
    // in this case, for example: JobsController , InterviewController

    // in forRoutes if we want a specific method on that route to apply middleware on we can do:
    // .forRoutes({path: "jobs/refs", method : RequestMethod.POST})
  }
}
