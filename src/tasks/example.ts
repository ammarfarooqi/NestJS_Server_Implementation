import { TasksService } from './tasks.service';

export class example {
  constructor(private task: TasksService, k: string) {
    console.log(task);
    console.log(k);
  }
}
