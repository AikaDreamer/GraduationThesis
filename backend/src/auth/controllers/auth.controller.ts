import { Controller, Get } from "@nestjs/common";
import { AuthService } from "../service/auth.service";


@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Get()
    HelloWord(): string {
        return this.authService.helloWord()
    }
}