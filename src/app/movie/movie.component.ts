import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import { FilterPipe } from '../filter.pipe'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movies = new Array<Movie>();
  @Input() mode: string;
  @Output() movieAdded: EventEmitter<Movie> = new EventEmitter();
  @Output() movieDeleted: EventEmitter<Movie> = new EventEmitter();
  //filterTerm : string;
  //dateFormat = 'fullDate';
  selectedMovie: Movie;
  filterYear: string;
  filterTitle: string;

  constructor(private moviessService: MoviesService) {
    //this.movies = moviessService.getMovies();
  }

  ngOnInit() {
  }

  submit(movie: Movie) {
    this.movieAdded.emit(movie);
  }

  deleteMovie(movie: Movie) {
    this.movieDeleted.emit(movie);
  }

}
