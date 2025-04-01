import { Test, TestingModule } from '@nestjs/testing';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';

describe('FilmsController', () => {
  let controller: FilmsController;
  let service: FilmsService;

  const mockFilmsService = {
    getAllFilms: jest.fn(() => ['Film 1', 'Film 2']),
    getScheduleFilm: jest.fn((id: string) => `Schedule for film ${id}`),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmsController],
      providers: [{ provide: FilmsService, useValue: mockFilmsService }],
    }).compile();

    controller = module.get<FilmsController>(FilmsController);
    service = module.get<FilmsService>(FilmsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all films', () => {
    expect(controller.getAllFilms()).toEqual(['Film 1', 'Film 2']);
    expect(service.getAllFilms).toHaveBeenCalled();
  });

  it('should return schedule for a film', () => {
    expect(controller.getFilmSchedule('123')).toBe('Schedule for film 123');
    expect(service.getScheduleFilm).toHaveBeenCalledWith('123');
  });
});
