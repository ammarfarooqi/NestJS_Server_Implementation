import { isNotEmpty, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus } from '../task-enum';

export class filterDTO {
  @IsOptional()
  @IsNotEmpty()
  search: string;
  @IsOptional()
  @IsNotEmpty()
  filter: string;
  @IsOptional()
  @IsNotEmpty()
  status: TaskStatus;
}
