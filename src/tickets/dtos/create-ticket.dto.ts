import { IsEnum, IsOptional, IsString } from 'class-validator';

enum Priority {
  VERY_LOW = 'very low',
  LOW = 'low',
  NORMAL = 'normal',
  HIGH = 'high',
  VERY_HIGH = 'very high',
}

enum Status {
  TODO = 'TODO',
  DESIGN = 'DESIGN',
  IN_PROGRESS = 'IN PROGRESS',

}

class CreateTicketDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(Priority)
  priority: Priority;

  @IsEnum(Status)
  status: Status;

  // createdBy: User;
  // linkedWith: Ticket;
  // assignee: User;
  // createdAt: Date;
  // updatedAt: Date;
  // deletedAt: Date;
}
