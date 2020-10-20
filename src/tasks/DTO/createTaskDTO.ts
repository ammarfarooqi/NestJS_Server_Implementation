import { IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../task-enum';
//this is how you apply validation
export class createTaskDTO {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  phoneNumber: number;
  @IsNotEmpty()
  status: TaskStatus;
}
