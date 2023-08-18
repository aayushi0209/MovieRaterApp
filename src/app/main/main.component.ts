import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  movie_list: any;
  selectMovie = null;
  editMovie:any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMovies().subscribe((res) => {
      this.movie_list = res;
    }, (error) => {
      console.log(error);
    });
  }

  selectedMovie(movie: any) {
    this.selectMovie = movie;
    this.editMovie = null ;
  }

  editedMovie(movie: any) {
    this.editMovie = movie;
    this.selectMovie = null ;
  }

  deletedMovie(movie: any) {
    console.log(movie);
  }

  createNewMovie(){
    this.editMovie = {title:'', description:''}
    this.selectMovie = null;
    console.log('new movie')
  }

}
