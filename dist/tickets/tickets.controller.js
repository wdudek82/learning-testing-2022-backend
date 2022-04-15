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
exports.TicketsController = void 0;
const common_1 = require("@nestjs/common");
const tickets_service_1 = require("./tickets.service");
const comments_service_1 = require("./comments.service");
const auth_guard_1 = require("../guards/auth.guard");
let TicketsController = class TicketsController {
    constructor(ticketsService, commentsService) {
        this.ticketsService = ticketsService;
        this.commentsService = commentsService;
    }
    getTickets() {
        return this.ticketsService.findAll();
    }
    getTicket(id) {
        return this.ticketsService.findById(+id);
    }
    createTicket(body) {
        const { title, description, authorId, assigneeId, priority, status, relatedTicketId, } = body;
        return this.ticketsService.create(title, description, authorId, assigneeId, priority, status, relatedTicketId);
    }
    updateTicket(id, body) {
        return this.ticketsService.update(+id, body);
    }
    softDeleteTicket(id) {
        return this.ticketsService.softDelete(+id);
    }
    addComment(ticketId, body) {
        const { content, authorId } = body;
        return this.commentsService.create(content, authorId, +ticketId);
    }
    updateTicketComment(commentId, body) {
        return this.commentsService.update(+commentId, body);
    }
    softDeleteTicketComment(commentId) {
        return this.commentsService.softDelete(+commentId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TicketsController.prototype, "getTickets", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], TicketsController.prototype, "getTicket", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TicketsController.prototype, "createTicket", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TicketsController.prototype, "updateTicket", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketsController.prototype, "softDeleteTicket", null);
__decorate([
    (0, common_1.Post)('/:ticketId/comments'),
    __param(0, (0, common_1.Param)('ticketId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TicketsController.prototype, "addComment", null);
__decorate([
    (0, common_1.Patch)('/:ticketId/comments/:commentId'),
    __param(0, (0, common_1.Param)('commentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TicketsController.prototype, "updateTicketComment", null);
__decorate([
    (0, common_1.Delete)('/:ticketId/comments/:commentId'),
    __param(0, (0, common_1.Param)('commentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketsController.prototype, "softDeleteTicketComment", null);
TicketsController = __decorate([
    (0, common_1.Controller)('tickets'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [tickets_service_1.TicketsService,
        comments_service_1.CommentsService])
], TicketsController);
exports.TicketsController = TicketsController;
//# sourceMappingURL=tickets.controller.js.map