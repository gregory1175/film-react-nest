import { Injectable } from '@nestjs/common';
import { FilmsRepository } from 'src/repository/films.repository/films.repository';

@Injectable()
export class FilmsService {
  constructor(private readonly filmsRepository: FilmsRepository) {}

  async getAllFilms() {
    return this.filmsRepository.findAllFilms();
  }

  async getScheduleFilm(id: string) {
    const film = (await this.filmsRepository.findFilmById(id)).toObject();
    return {
      total: film.schedule.length,
      items: film.schedule,
    };
  }
}
