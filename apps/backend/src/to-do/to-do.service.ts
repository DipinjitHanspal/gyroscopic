import { Injectable } from '@nestjs/common';

@Injectable()
export class ToDoService {
  getData(): { message: string } {
    return { message: 'Welcome to backend!' };
  }
}
