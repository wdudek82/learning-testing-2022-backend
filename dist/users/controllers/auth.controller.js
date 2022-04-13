"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("../dtos/create-user.dto");
const user_entity_1 = require("../entities/user.entity");
const auth_service_1 = require("../services/auth.service");
const serialize_interceptor_1 = require("../../interceptors/serialize.interceptor");
const sigin_user_dto_1 = require("../dtos/sigin-user.dto");
const user_dto_1 = require("../dtos/user.dto");
const current_user_decorator_1 = require("../decorators/current-user.decorator");
const enums_1 = require("../enums");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    whoAmI(req, res) {
        const user = req['currentUser'];
        res.status(common_1.HttpStatus.OK).json({
            authenticated: !!user,
            signedInUser: !!user
                ? {
                    email: user.email,
                    name: user.name,
                    role: user.role,
                }
                : null,
        });
    }
    createUser(body, currentUser) {
        if ((currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) !== enums_1.Role.ADMIN && body.isActive) {
            throw new common_1.UnauthorizedException('only admins are authorized to create active users');
        }
        return this.authService.createUser(body);
    }
    async signUp(body, session) {
        throw new common_1.BadRequestException('this endpoint has been temporarily disabled');
    }
    async signIn(body, session) {
        const { email, password } = body;
        const user = await this.authService.signIn(email, password);
        session.userId = user.id;
        return user;
    }
    signOut(res, session) {
        const message = 'user has been logged out';
        session.userId = null;
        res.status(common_1.HttpStatus.RESET_CONTENT).json({ message });
    }
};
__decorate([
    (0, common_1.Get)('/whoami'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "whoAmI", null);
__decorate([
    (0, common_1.Post)('/create-user'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('/signin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sigin_user_dto_1.SigninUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, common_1.Post)('/signout'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signOut", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, serialize_interceptor_1.Serialize)(user_dto_1.UserDto),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map