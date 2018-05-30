import { Pipe, PipeTransform } from '@angular/core';
import {Movie} from './movie'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(movies: Array<Movie>, filterTitle: string): Array<Movie>{
    if (filterTitle == undefined) {
      return movies;
    }
    return movies.filter(function (movie) {
      return movie.title.toLowerCase().includes(filterTitle.toLowerCase());
    })
  }

}
