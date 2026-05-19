import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import type { User } from './user.store'

@Controller('users')
export class UsersController {

    constructor(private usersService: UserService) {}

    @Post()
    addUser(@Body() user: User) {
        return this.usersService.addUser(user);
    }

    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Get(':id')
    getUser(@Param('id') id: number) {
        return this.usersService.getUser(id);
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() user: User) {
        return this.usersService.updateUser(id, user);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.usersService.deleteUser(id);
    }
}