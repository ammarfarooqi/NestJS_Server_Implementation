import { createConnection, Connection } from 'typeorm';
import { Task } from './Task.entity';
export class Konnection {
  async konnection() {
    const connection1: Connection = await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'test',
      password: 'test',
      database: 'test',
      entities: [Task],
    });
  }
}
