import { Test, TestingModule } from '@nestjs/testing';
import { PrismadbService } from './prismadb.service';

describe('PrismadbService', () => {
  let service: PrismadbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismadbService],
    }).compile();

    service = module.get<PrismadbService>(PrismadbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
