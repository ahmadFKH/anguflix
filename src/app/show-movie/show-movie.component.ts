import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { MoviesService } from '../movies.service';
import { UserService } from '../user.service'
import { User } from '../user';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.scss']
})
export class ShowMovieComponent implements OnInit {

  private movie: Movie;
  private user: User;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movie = this.moviesService.getMovie(params.id);
    })
    this.user = this.userService.getUser();
  }

  purchaseMovie(movie: Movie) {
    if (!this.checkMovie(movie._id)) {
      this.userService.addMovie(movie);
      movie.selected = true; 
    } else {
      alert("You have already bought this movie!!"); 
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
  navigate() {
    this.router.navigate(['/']);
  }
}



