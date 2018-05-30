import { MoviesService } from '../movies.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user'
import { Movie } from '../movie';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userMovies = Array<any>();
  @Input() user: User;
  mode = 'regularMode';

  constructor(private moviesService: MoviesService) {
    this.userMovies = moviesService.getUserMovies();
  }

  ngOnInit() {
  }

  handleDeletedMovie(movie : Movie) {
    this.moviesService.deleteMovie(movie.id, this.userMovies);
    this.moviesService.increaseBudget(movie,this.user);
    movie.selected = false;
  }

  toggleMode() {
    this.mode == 'regularMode' ? this.mode = 'deleteMode' : this.mode = 'regularMode';
  }
  
}
