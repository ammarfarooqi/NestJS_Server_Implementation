import { createTaskDTO } from 'src/tasks/DTO/createTaskDTO';
import { Entity, EntityRepository, QueryBuilder, Repository } from 'typeorm';
import { filterDTO } from './DTO/filterDTO';
import { Task } from './task.entity';

@EntityRepository(Task)
export class taskRepository extends Repository<Task> {
  async createTask(dto: createTaskDTO): Promise<Task> {
    const { name, phoneNumber, status } = dto;
    const task = new Task();
    task.name = name;
    task.phoneNumber = phoneNumber;
    task.status = status;
    await task.save();
    return task;
  }
  async getTasks(dto: filterDTO): Promise<Task[]> {
    const { search, filter, status } = dto;
    //implementing query builder
    const query = this.createQueryBuilder('task');

    if (status) {
      query.andWhere('task.status= :status', { status });
    }
    var task = await query.getMany();
    return task;
  }
}
