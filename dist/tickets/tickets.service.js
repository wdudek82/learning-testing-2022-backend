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
exports.TicketsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ticket_entity_1 = require("./entities/ticket.entity");
let TicketsService = class TicketsService {
    constructor(repo) {
        this.repo = repo;
    }
    create(title, description, authorId, assigneeId, priority, status, relatedTicketId) {
        const ticket = this.repo.create({
            title,
            description,
            authorId,
            assigneeId,
            priority,
            status,
            relatedTicketId,
        });
        return this.repo.save(ticket);
    }
    findAll() {
        return this.repo.find();
    }
    async findById(id) {
        const ticket = await this.repo.findOne({
            where: { id },
            relations: ['comments'],
        });
        if (!ticket) {
            throw new common_1.NotFoundException('user not found');
        }
        return ticket;
    }
    async update(id, attrs) {
        const ticket = await this.repo.findOneBy({ id });
        if (!ticket) {
            throw new common_1.NotFoundException('ticket not found');
        }
        Object.assign(ticket, attrs);
        return this.repo.save(ticket);
    }
    async remove(id) {
        const ticket = await this.repo.findOneBy({ id });
        if (!ticket) {
            throw new common_1.NotFoundException('ticket not found');
        }
        return this.repo.remove(ticket);
    }
    async softDelete(id) {
        const ticket = await this.repo.findOneBy({ id });
        if (!ticket) {
            throw new common_1.NotFoundException('ticket not found');
        }
        ticket.deletedAt = new Date();
        return this.repo.save(ticket);
    }
};
TicketsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ticket_entity_1.Ticket)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TicketsService);
exports.TicketsService = TicketsService;
//# sourceMappingURL=tickets.service.js.map