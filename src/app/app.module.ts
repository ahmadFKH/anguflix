import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { BudgetComponent } from './budget/budget.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MoviesComponent,
    MovieComponent,
    SearchComponent,
    AddMovieComponent,
    DeleteMovieComponent,
    BudgetComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
