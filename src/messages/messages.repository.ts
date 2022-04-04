import { NotFoundException } from '@nestjs/common';

export class MessagesRepository {
  async findOne(id: string): Promise<any> {
    const message = null;
    if (!message) {
      throw new NotFoundException('message not found');
    }

    return '';
  }

  async findAll(): Promise<any[]> {
    return [];
  }

  create(message: string): void {
    console.log('create a message');
  }
}
