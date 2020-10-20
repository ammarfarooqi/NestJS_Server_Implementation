import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { filterDTO } from 'src/tasks/DTO/filterDTO';

import { createTaskDTO } from 'src/tasks/DTO/createTaskDTO';
import { taskRepository } from './task.repository';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(private taskRepository: taskRepository) {}
  // private task: Task[] = [
  //   {
  //     id: 's',
  //     name: 'ammar',
  //     phoneNumber: 3423,
  //     date: new Date(),
  //     status: TaskStatus.OK,
  //   },
  // ];

  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOne(id);
    if (found) {
      return found;
    } else {
      throw new NotFoundException();
    }
    return found;
  }
  // // this is how the not found exception is implemented
  // getTaskById(id: string): Task {
  //   const found = this.task.find(task => task.id === id);
  //   if (found) {
  //     return found;
  //   } else {
  //     throw new NotFoundException();
  //   }
  // }

  async deleteByTaskId(id: number) {
    //let task: Task = await this.getTaskById(id); // validation is already applied on this function so if the user doesnt exist it will automatically throw the error
    return await this.taskRepository.delete(id);
  }
  // deleteByTaskId(id: string) {
  //   let task: Task = this.getTaskById(id); // validation is already applied on this function so if the user doesnt exist it will automatically throw the error
  //   return this.task.splice(this.task.indexOf(task));
  // }
  async getTasks(dto: filterDTO): Promise<Task[]> {
    return await this.taskRepository.getTasks(dto);
  }

  // getAllTasks(): Task[] {
  //   return this.task;
  // }
  async createAllTasks(dto: createTaskDTO): Promise<Task> {
    return this.taskRepository.createTask(dto);
  }
  // createAllTasks(dto: createTaskDTO): Task {
  //   const { name, phoneNumber, status } = dto;
  //   const task: Task = {
  //     id: uuid(),
  //     name,
  //     phoneNumber,
  //     date: new Date(),
  //     status,
  //   };
  //   this.task.push(task);
  //   console.log(task);
  //   return task;
  // }
  // putById(id: string, name: string): Task {
  //   let task = this.task.find(task => task.id === id);
  //   task.name = name;
  //   return task;
  // }
}
