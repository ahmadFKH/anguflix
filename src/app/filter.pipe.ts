import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(movies: any, filterTitle: any): any {
    if (filterTitle == undefined) {
      return movies;
    }
    return movies.filter(function(movie) {
      return movie.title.toLowerCase().includes(filterTitle.toLowerCase());
    })
  }

}
