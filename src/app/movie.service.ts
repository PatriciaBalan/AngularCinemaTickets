import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Movie } from './models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  // readonly APIUrl ="http://localhost:8090/cinema";
  private baseURL = "http://localhost:8090/cinema/movie";

  constructor(private httpClient:HttpClient) { }

  getMovieList(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(`${this.baseURL}`);
  }

  addMovie(movie: Movie): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/create`, movie);
  }

  getMovieById(movieId: number): Observable<Movie>{
    return this.httpClient.get<Movie>(`${this.baseURL}/${movieId}`);
  }

  updateMovie(movieId: number, movie: Movie): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${movieId}`, movie);
  }

  deleteMovie(movieId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${movieId}`);
  }


    // signin(email:string, password:string){
    //     const headers = new HttpHeaders({Authorization: 'Basic' + btoa(email+":"+password)})
    //     return this.http.get(this.APIUrl, {headers,responseType: 'text' as 'json'
    //     })
    // }

    // getMovieList(): Observable<any> {
    //     return this.http.get<any>(this.APIUrl+'movie')
    // }

    // addMovie(movie : Movie){
    //     return this.http.post(this.APIUrl+"/create", movie)
    // }

    // getMovieById(movieId: number): Observable<Object>{
    //     return this.http.get(this.APIUrl+'movie/{movieId}')
    // }


    // updateMovie(movieId: number, movie: Movie): Observable<Object> {
    //     return this.http.post(this.APIUrl+ '/update-movie/${id}', movie);
    //   }

    // deleteMovie(val:any){
    //     return this.http.delete(this.APIUrl+"movie/{movieId}" + val)
    // }

    // getAllUsers(): Observable<any[]>{
    //     return this.http.get<any>(this.APIUrl+"/users")
    // }


}