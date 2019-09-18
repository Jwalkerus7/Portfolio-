import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of } from 'rxjs';
import { Movie } from '../../../shared/models/movie';

@Component({
  selector: 'app-display-movies',
  templateUrl: './display-movies.component.html',
  styleUrls: ['./display-movies.component.css']
})
export class DisplayMoviesComponent implements OnInit {
  private moviesRoute = 'http://localhost:3000/movies';
  public movies: Movie[];

  constructor(private http: HttpClient) {}

  getMovies() {
    this.http.get<Movie[]>(this.moviesRoute).subscribe(movies => {
      this.movies = movies;
      console.log('Movies', this.movies);
    });
  }
  ngOnInit() {
    this.getMovies();
  }
  // add the following method:
  onMovieDeleted(movieId) {
    let movieIndex = 0;
    for(let movie of this.movies) {
      if(movie.id === movieId) {
        this.movies.splice(movieIndex, 1);
        break;
      }
      movieIndex++;
    }
  }
}
