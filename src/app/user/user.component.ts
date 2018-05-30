import { MoviesService } from '../movies.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { Movie } from '../movie';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userMovies = Array<Movie>();
  user: User = new User();

  constructor(private moviesService : MoviesService) { 
    this.user.budget = moviesService.getBudget();
    this.userMovies = moviesService.getUserMovies();
  }

  ngOnInit() {
  }


}
