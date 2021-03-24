import { Component } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  popularityMovies: Movie[]
  constructor( public movieService: MovieService) {}

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not
    // called due to view persistence in Ionic
    this.getAllPopularityMovies();
  }

  getAllPopularityMovies() {
    this.movieService.getpopularityMovies()
      .subscribe( response => {
        console.log(response);

        this.popularityMovies = response.results
      })
  }

}
