import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { response } from 'express';
import { get, request } from 'http';

import { TasksService } from './tasks.service';
import { createTaskDTO } from 'src/tasks/DTO/createTaskDTO';
import { validationPipe } from './pipes/validationPipe.pipe';
import { getTaskDTO } from './DTO/getTaskDTO';
import { Task } from './task.entity';
import { DeleteResult } from 'typeorm';
import { filterDTO } from './DTO/filterDTO';

@Controller('tasks')
export class TasksController {
  constructor(public taskService: TasksService) {}

  @Post() ///using pipes for validation through DTOS
  @UsePipes(ValidationPipe)
  Post(
    @Body()
    dto: createTaskDTO,
  ): Promise<Task> {
    return this.taskService.createAllTasks(dto);
  }

  // @Put()
  // putById(@Query() id, @Body('name', validationPipe) name) {
  //   return this.taskService.putById(id.id, name);
  // }

  @Get()
  getAllTask(@Query(ValidationPipe) dto: filterDTO): Promise<Task[]> {
    return this.taskService.getTasks(dto);
  }

  // @Get()
  // getAllTask(@Query(ValidationPipe) getTaskDTO: getTaskDTO): Task[] {
  //   return this.taskService.getAllTasks();
  // }
  @Get('/:id')
  getTaskbyId(@Param('id', ParseIntPipe) id): Promise<Task> {
    return this.taskService.getTaskById(id);
  }

  @Delete('/:delete_id')
  deleteId(@Param('delete_id', ParseIntPipe) id): Promise<DeleteResult> {
    return this.taskService.deleteByTaskId(id);
  }
}
