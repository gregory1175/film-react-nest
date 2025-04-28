import { Inject, Injectable } from '@nestjs/common';
import { FilmsMongoDBRepository } from '../repository/filmsMongoDB.repository';
import { FilmsPostgreSqlService } from '../repository/filmsPostgreSql.service';

import { FilmEntity } from './entities/film.entity';
import { CreateFilmDto } from './dto/films.dto';

@Injectable()
export class FilmsService {
  constructor(
    @Inject('FILMS_REPOSITORY')
    private readonly filmsRepository:
      | FilmsMongoDBRepository
      | FilmsPostgreSqlService,
  ) {}

  async getAllFilms() {
    return this.filmsRepository.findAllFilms();
  }

  async getScheduleFilm(id: string) {
    let film;
    if (this.filmsRepository instanceof FilmsMongoDBRepository) {
      film = (await this.filmsRepository.findFilmById(id)).toObject();
    } else {
      film = await this.filmsRepository.findFilmById(id);
    }
    return {
      total: film.schedule.length,
      items: film.schedule,
    };
  }

  async getNewFilm(data: CreateFilmDto | FilmEntity) {
    if (this.filmsRepository instanceof FilmsMongoDBRepository) {
      const filmData: CreateFilmDto = data as CreateFilmDto;
      return await this.filmsRepository.createNewFilm(filmData);
    } else {
      const filmData: FilmEntity = data as FilmEntity;
      return await this.filmsRepository.createNewFilm(filmData);
    }
  }
}
