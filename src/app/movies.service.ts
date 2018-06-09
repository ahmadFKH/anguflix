import { Injectable } from '@angular/core';
import { Movie } from './movie'
import { User } from './user'
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private _url = 'https://anguflix-api.herokuapp.com/api/movies';

  public allMovies: Movie[];

  constructor(private http: HttpClient) { }

  getMovies() {
    const observable = this.http.get(this._url);
    observable.subscribe((data) => {
      this.allMovies = JSON.parse(JSON.stringify(data));
    })
    return observable;
  }
  getMovie(id): Movie {
    for (var i = 0; i < this.allMovies.length; i++) {
      if (id == this.allMovies[i]._id) {
        return this.allMovies[i];
      }
    }
  }
}
