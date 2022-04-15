"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tickets_controller_1 = require("./tickets.controller");
const tickets_service_1 = require("./tickets.service");
const ticket_entity_1 = require("./entities/ticket.entity");
const comment_entity_1 = require("./entities/comment.entity");
const comments_service_1 = require("./comments.service");
let TicketsModule = class TicketsModule {
};
TicketsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ticket_entity_1.Ticket, comment_entity_1.Comment])],
        controllers: [tickets_controller_1.TicketsController],
        providers: [tickets_service_1.TicketsService, comments_service_1.CommentsService],
    })
], TicketsModule);
exports.TicketsModule = TicketsModule;
//# sourceMappingURL=tickets.module.js.map