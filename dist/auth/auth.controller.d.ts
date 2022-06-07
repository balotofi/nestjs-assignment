import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import RefreshTokenDto from './dto/refresh.token.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(request: any, ip: string, body: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    RefreshToken(body: RefreshTokenDto): Promise<string>;
    logout(body: RefreshTokenDto): Promise<void>;
}
