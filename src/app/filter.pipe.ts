import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie'

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(movies: Array<Movie>, filterTitle: string, filterYear: string): Array<Movie> {
    if ((filterTitle === undefined || '' ) && (filterYear === undefined )) {
      return movies;
    } else if (filterYear == undefined ) {
      return movies.filter(function (movie) {
        return movie.title.toLowerCase().includes(filterTitle.toLowerCase());
      })
    } else if (filterTitle === undefined || '') {
      return movies.filter(function (movie) {
        return movie.year == Number(filterYear);
      })
    } else {
      return movies.filter(function (movie) {
        return movie.title.toLowerCase().includes(filterTitle.toLowerCase()) && (movie.year == Number(filterYear));
      })

    }
  }
}
