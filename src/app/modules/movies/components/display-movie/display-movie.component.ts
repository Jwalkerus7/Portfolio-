import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Movie } from '../../../../shared/models/movie';

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent implements OnInit {
  @Input() movie: Movie;
  @Output() movieDeleted: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onClickDelete() {
    // add the following line:
    this.movieDeleted.emit(this.movie.id);
  }
}