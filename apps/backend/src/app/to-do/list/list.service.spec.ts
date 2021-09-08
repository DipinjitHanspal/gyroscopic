import { Test } from '@nestjs/testing';

import { ListService } from './list.service';

describe('AppService', () => {
  let service: ListService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [ListService],
    }).compile();

    service = app.get<ListService>(ListService);
  });

  describe('getData', () => {
    it('should return "Welcome to backend!"', () => {
      expect(service.getAll()).not.toBeNull();
    });
  });
});
