import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private messagesRepository: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  findAll() {
    return this.messagesRepository.findAll();
  }

  createMessage(message: string) {
    this.messagesRepository.create(message);
  }
}
