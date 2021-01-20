import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { LoginComponent } from './components/login/login.component';

import { MovieListComponent } from './components/movie-list/movie-list.component';
import { UpdateMovieComponent } from './components/update-movie/update-movie.components';


const routes: Routes = [
    {path:'movies', component: MovieListComponent},
    {path:'create-movie', component: CreateMovieComponent},
    {path:'update-movie/:id', component:UpdateMovieComponent},
    {path:'login', component:LoginComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }