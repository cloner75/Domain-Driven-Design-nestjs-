import { Controller, Get, Post, Put, Delete, Param, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import { TodoService } from 'src/application/todo/services/todo.service';

@Controller('todo')
export class TodoController  {
  private readonly todoService: TodoService;

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `find todo by id ${id}`;
  }

  @Get()
  find(@Req() req: Request): string {
    return `get todo list`;
  }


  @Post()
  create(@Body() body: any): any {
    return {
      todoId: 'todoId'
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): any {
    return {
      created: true
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string): any {
    return {
      delete: true
    };
  }
}