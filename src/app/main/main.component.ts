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
  }

  editedMovie(movie: any) {
    this.editMovie = movie;
  }

}
