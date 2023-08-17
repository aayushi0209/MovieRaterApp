import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
	selector: 'app-movie-details',
	templateUrl: './movie-details.component.html',
	styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

	@Input() movie: any;
	rateHovered = 0;
	@Output() updateMovie  = new EventEmitter()

	constructor(private apiService: ApiService) { }

	rateHover(rate: any) {
		console.log(rate);
		this.rateHovered = rate;
	}

	rateMovie() {
		this.apiService.rateMovie(this.rateHovered, this.movie.id).subscribe(
			(response) => {
				console.log(response);
				this.getMovie();
			},
			(error) => {
				console.log(error);
			}
		)
	}

	getMovie(){
		this.apiService.getMovieDetail(this.movie.id).subscribe(
			(response) => {
				this.updateMovie.emit(response);
				// console.log(response);
				// this.movie=response;
			},
			(error) => {
				console.log(error);
			}
		)
	}

}
