import { UserService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UserService);
    me(request: any): Promise<import("./entities/user.entity").User>;
}
