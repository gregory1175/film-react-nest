import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/films.dto';
import { FilmEntity } from './entities/film.entity';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  getAllFilms() {
    return this.filmsService.getAllFilms();
  }

  @Get(':id/schedule')
  getFilmSchedule(@Param('id') id: string) {
    return this.filmsService.getScheduleFilm(id);
  }

  @Post('create')
  createFilm(@Body() newFilm: CreateFilmDto | FilmEntity) {
    return this.filmsService.getNewFilm(newFilm);
  }
}
