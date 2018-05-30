import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movies = new Array<Movie>();
  @Output() movieAdded: EventEmitter<Movie> = new EventEmitter();
  //filterTerm : string;
  //dateFormat = 'fullDate';
  selectedMovie:Movie;

  constructor(private moviessService : MoviesService) {
    //this.movies = moviessService.getMovies();
   }

  ngOnInit() {
  }

  submit(movie:Movie) {
    this.movieAdded.emit(movie);
  }

}
