"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    constructor() {
        this.users = [
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
    }
    findByEmail(email) {
        const user = this.users.find((user) => user.email === email);
        if (user) {
            return Promise.resolve(user);
        }
        return undefined;
    }
    findOne(id) {
        const user = this.users.find((user) => user.id === id);
        if (user) {
            return Promise.resolve(user);
        }
        return undefined;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map