import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Movie } from '../../models/movie';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {   

  movie: Movie = new Movie();
  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveMovie(){
    this.movieService.addMovie(this.movie).subscribe( data =>{
      console.log(data);
      this.goToMovieList();
    },
    error => console.log(error));
  }

  goToMovieList(){
    this.router.navigate(['/movies']);
  }

  onSubmit(){
    console.log(this.movie);
    this.saveMovie();
  }

}
