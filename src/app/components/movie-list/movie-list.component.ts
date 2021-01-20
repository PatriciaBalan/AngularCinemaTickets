import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { MovieService } from '../../movie.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  
  movies: Movie[];


  constructor(private movieService: MovieService,
    private router: Router) { }

  ngOnInit(): void {
    this.getMovies();      
  }

  private getMovies(){
    this.movieService.getMovieList().subscribe(data => {
      this.movies= data;
    });
  }  

  saveMovie(){
    this.router.navigate(['create-movie']);
  }

  updateMovie(movieId: number){
    this.router.navigate(['update-movie', movieId]);
  }

  deleteMovie(movieId: number){
    this.movieService.deleteMovie(movieId).subscribe( data => {
      console.log(data);
      this.getMovies();
    })
  }
}
