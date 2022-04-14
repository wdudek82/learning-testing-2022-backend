import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
export declare class CommentsService {
    private repo;
    constructor(repo: Repository<Comment>);
    create(content: string, authorId: number, ticketId: number): Promise<Comment>;
    update(id: number, attrs: Partial<Comment>): Promise<Comment>;
    remove(id: number): Promise<Comment>;
    softDelete(id: number): Promise<Comment>;
}
