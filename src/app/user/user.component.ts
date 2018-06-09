import { MoviesService } from '../movies.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user'
import { Movie } from '../movie';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html', 
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;
  mode = 'regularMode';

  constructor(private moviesService: MoviesService, private userService: UserService) {
  }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  handleDeletedMovie(movie : Movie) {
    this.userService.deleteMovie(movie._id);
    //this.userService.increaseBudget(movie,this.user);
    movie.selected = false;
  }

  toggleMode() {
    this.mode == 'regularMode' ? this.mode = 'deleteMode' : this.mode = 'regularMode';
  }
  
}
