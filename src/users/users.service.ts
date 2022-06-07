import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 0,
      name: 'Ade',
      email: 'ade@gmail.com',
      password: 'adePass',
    },
    {
      id: 1,
      name: 'Seun',
      email: 'seun@gmail.com',
      password: 'seunPass',
    },

    {
      id: 2,
      name: 'Lola',
      email: 'lola@gmail.com',
      password: 'lolaPass',
    },

    {
      id: 3,
      name: 'Bose',
      email: 'bose@gmail.com',
      password: 'bosePass',
    },
  ];

  findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user:User) => user.email === email);
    if (user) {
      return Promise.resolve(user);
    }
    return undefined;
  }

  findOne(id: number): Promise<User | undefined> {
    const user = this.users.find((user:User) => user.id === id);
    if (user) {
      return Promise.resolve(user);
    }
    return undefined;
  }
}
