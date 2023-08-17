import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl= 'http://127.0.0.1:8000/api/movies/'
  headers = new HttpHeaders({
    'Content-Type':'application/json',
    Authorization:'Token d7ab8f451614e9c787df68e938eb14b55be12105'
  })
  constructor(private http: HttpClient) { }
  private movie_list =  ['Terminator','prediator']


  getMovies() : Observable <any>{
    return this.http.get(this.baseUrl, {'headers':this.headers});

  }

  rateMovie(rate: number, movie_id: any):Observable <any> {
    const url = this.baseUrl + movie_id +'/rate_movie/';
    return this.http.post(url , {stars:rate}, {'headers':this.headers});
  }

  getMovieDetail(id:number):Observable<any>{
    const url = this.baseUrl + id +'/';
    return this.http.get(url, {'headers':this.headers});
  }

 
}
