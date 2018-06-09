import { Injectable } from '@angular/core';
import { Movie } from './movie'
import { User } from './user'
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const BUDGET: number = 30;

let userMovies: Movie[] = [];

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = new User();

  constructor(private http: HttpClient) { 
    this.user.budget = BUDGET;
    this.user.myMovies = userMovies;
  }

  getUser() {
    return this.user;
  }

  addMovie(movie: Movie) {
    this.reduceBudget(movie);
    userMovies.push(movie);
  }

  deleteMovie(id: string) {
    let movies = this.user.myMovies;
    for (var i = 0; i < movies.length; i++) {
      if (movies[i]._id == id ) {
        this.increaseBudget(movies[i]);
        movies.splice(i,1);
      }
    }
  } 

  reduceBudget(movie: Movie) {
    this.user.budget -= movie.price;
  }
  increaseBudget(movie: Movie) {
    this.user.budget += movie.price;
  }

}
