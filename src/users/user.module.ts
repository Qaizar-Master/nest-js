import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UserService } from './user.service';
import { UserStore } from './user.store';

@Module({
    controllers: [UsersController],
    providers: [
        UserService,
        UserStore,
    ],
})
export class UsersModule {}