import { User } from './entities/user.entity';
export declare class UserService {
    private users;
    findByEmail(email: string): Promise<User | undefined>;
    findOne(id: number): Promise<User | undefined>;
}
