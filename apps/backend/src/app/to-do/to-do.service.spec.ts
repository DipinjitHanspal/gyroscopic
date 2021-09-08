import { Test } from '@nestjs/testing';

import { ToDoService } from './to-do.service';

describe('AppService', () => {
  let service: ToDoService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [ToDoService],
    }).compile();

    service = app.get<ToDoService>(ToDoService);
  });

  describe('getData', () => {
    it('should return the default list', () => {
      expect(service.getList()).not.toBeNull();
    });
  });
});
