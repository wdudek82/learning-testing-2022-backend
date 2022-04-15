import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { UsersService } from '../services/users.service';
export declare class CurrentUserInterceptor implements NestInterceptor {
    private usersService;
    constructor(usersService: UsersService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<any>;
}
