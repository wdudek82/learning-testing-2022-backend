"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const tickets_module_1 = require("./tickets/tickets.module");
const users_module_1 = require("./users/users.module");
const user_entity_1 = require("./users/entities/user.entity");
const ticket_entity_1 = require("./tickets/entities/ticket.entity");
const comment_entity_1 = require("./tickets/entities/comment.entity");
const config_1 = require("@nestjs/config");
const path = require("path");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
function getDbConfig(config) {
    const dbConfig = {
        type: 'postgres',
        port: 5432,
        synchronize: true,
        logging: false,
        entities: [user_entity_1.User, ticket_entity_1.Ticket, comment_entity_1.Comment],
        subscribers: [],
        migrations: [],
    };
    let envDbConfig = {
        host: 'localhost',
        username: config.get('DB_USER'),
        password: config.get('PASSWORD'),
        database: config.get('DB_NAME'),
    };
    if (process.env.NODE_ENV == 'prod') {
        envDbConfig = {
            url: process.env.DATABASE_URL,
            ssl: true,
            extra: {
                ssl: {
                    rejectUnauthorized: false,
                },
            },
        };
    }
    Object.assign(dbConfig, envDbConfig);
    return dbConfig;
}
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: path.join(`.env.${process.env.NODE_ENV}`),
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: getDbConfig,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'learning-testing-2022-frontend'),
                exclude: ['/api*'],
            }),
            tickets_module_1.TicketsModule,
            users_module_1.UsersModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map