import { Injectable } from '@nestjs/common';
import { User, UserStore } from './user.store';

@Injectable()
export class UserService {

    constructor(private usersStore: UserStore) {}

    addUser(user: User) {
        const existing = this.usersStore.getUser(user.id);
        if (existing) {
            return { message: 'User already exists' };
        }
        this.usersStore.addUser(user);
        return { message: 'User added successfully' };
    }

    getUser(id: number) {
        const user = this.usersStore.getUser(id);
        if (!user) {
            return { message: 'User not found' };
        }
        return user;
    }

    getAllUsers() {
        return this.usersStore.getUsers();
    }

    updateUser(id: number, user: User) {
        const existing = this.usersStore.getUser(id);
        if (!existing) {
            return { message: 'User not found' };
        }
        this.usersStore.updateUser(id, user);
        return { message: 'User updated successfully' };
    }

    deleteUser(id: number) {
        const existing = this.usersStore.getUser(id);
        if (!existing) {
            return { message: 'User not found' };
        }
        this.usersStore.deleteUser(id);
        return { message: 'User deleted successfully' };
    }
}