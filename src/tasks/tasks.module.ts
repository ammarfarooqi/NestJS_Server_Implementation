import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { taskRepository } from './task.repository';

import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([taskRepository])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
