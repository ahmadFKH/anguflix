import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { User } from '../user';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  allMovies: Array<Movie>;
  @Input() user: User;

  constructor(private moviesService: MoviesService) {
    this.allMovies = moviesService.getMovies();
  }

  ngOnInit() {
  }

  handleAddMovie(movie) {
    if (this.user.budget >= movie.price) {
      this.moviesService.addMovie(movie);
      this.moviesService.reduceBudget(movie, this.user);
      movie.selected = true;
    }
    //this.selectedDog = undefined;
  }

}
