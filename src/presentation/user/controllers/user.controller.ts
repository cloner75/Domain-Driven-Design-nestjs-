import { Body, Controller, Delete, Get, Param, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from 'src/application/user/services/user.service';

@Controller('user')
export class UserController {
  private readonly userService: UserService;

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `user - ${id}`;
  }

  @Get('/')
  find(@Req() req: Request): string[] {
    return [
      'user1',
      'user 2'
    ];
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): any {
    return {
      updated: true
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string): any {
    return {
      deleted: true
    };
  }
}