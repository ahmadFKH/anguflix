import { Component } from '@angular/core';
import { User } from './user'
import { MoviesService } from './movies.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  user: User = new User;

  constructor(private moviesService:MoviesService) {
    this.user.budget = this.moviesService.getBudget();
  }

}
