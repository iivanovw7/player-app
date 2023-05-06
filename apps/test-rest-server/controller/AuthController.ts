import AuthService from '../service/AuthService';

class AuthController {
    private service: AuthService = new AuthService();

    login = (ctx) => {
        this.service.login(ctx);
    };

    refresh = (ctx) => {
        this.service.refresh(ctx);
    };
}

export default new AuthController();
