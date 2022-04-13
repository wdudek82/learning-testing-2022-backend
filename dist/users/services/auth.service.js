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
exports.AuthService = void 0;
const crypto_1 = require("crypto");
const util_1 = require("util");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entities/user.entity");
const typeorm_2 = require("typeorm");
const users_service_1 = require("./users.service");
const scrypt = (0, util_1.promisify)(crypto_1.scrypt);
let AuthService = class AuthService {
    constructor(repo, usersService) {
        this.repo = repo;
        this.usersService = usersService;
    }
    async createUser(createUserDto) {
        const user = await this.usersService.findOneByEmail(createUserDto.email);
        if (user) {
            throw new common_1.BadRequestException('email in use');
        }
        const { password, passwordConfirmation } = createUserDto;
        if (password !== passwordConfirmation) {
            throw new common_1.BadRequestException('password and confirm password does not match');
        }
        const salt = (0, crypto_1.randomBytes)(8).toString('hex');
        const hash = (await scrypt(createUserDto.password, salt, 32));
        createUserDto.password = `${salt}.${hash.toString('hex')}`;
        return this.usersService.create(createUserDto);
    }
    async signIn(email, password) {
        const user = await this.usersService.findOneByEmail(email);
        if (!user) {
            throw new common_1.NotFoundException('incorrect email');
        }
        if (!user.isActive) {
            throw new common_1.BadRequestException('inactive account');
        }
        const [salt, storedHash] = user.password.split('.');
        const hash = (await scrypt(password, salt, 32));
        if (storedHash != hash.toString('hex')) {
            throw new common_1.BadRequestException('incorrect password');
        }
        return user;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map