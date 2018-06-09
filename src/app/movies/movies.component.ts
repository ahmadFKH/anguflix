import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  allMovies: Array<Movie> = [];
  user: User;

  constructor(private moviesService: MoviesService, private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.moviesService.getMovies().subscribe(
      (data => {
        this.allMovies = JSON.parse(JSON.stringify(data));
      }));
  }

  handleAddMovie(movie) {
    if (!(this.checkMovie(movie._id))) {
      if (this.user.budget >= movie.price) {
      this.userService.addMovie(movie);
        //this.userService.reduceBudget(movie);
        movie.selected = true;
      } else {
        alert("You are out of budget !!");
      }
      //this.selectedDog = undefined;
    }else {
      alert("You have already bought this movie !!");
      movie.selected = false;
    }
  }
  checkMovie(id) {
    for (var i = 0; i < this.user.myMovies.length; i++) {
      if (this.user.myMovies[i]._id == id) {
        return true;
      }
    }
    return false;
  }



}
