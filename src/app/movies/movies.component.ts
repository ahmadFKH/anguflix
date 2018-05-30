import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  allMovies: Array<Movie>;

  constructor(private moviesService : MoviesService) {
    this.allMovies = moviesService.getMovies();
  } 

  ngOnInit() {
  }

  handleAddMovie(movie) {
    this.moviesService.addMovie(movie);
    //this.selectedDog = undefined;
  }

}
