import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  signup(@Body() body: any): any {
    // create a new user and sign in
    console.log(body);
    return {};
  }

  @Post()
  signin(@Body() body: any): any {
    console.log(body);
    return {};
  }

  @Get()
  getUsers(): any[] {
    return ['a', 'b', 'c'];
  }

  @Get(':id')
  getUser(@Param('id') userId: number): any {
    console.log(`Get a user: ${userId}`);
    return null;
  }

  @Post()
  createUser(@Body() body: any): void {
    console.log(`Create a new user: ${JSON.stringify(body)}`);
  }

  @Put(':id')
  updateUser(@Body() body: any, @Param('id') userId: number): void {
    console.log(`Update a new user: ${userId} | ${JSON.stringify(body)}`);
  }

  @Delete(':id')
  deleteUser(@Param('id') userId: number): void {
    console.log(`Delete a new user: ${userId}`);
  }
}
