import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-movie-list',
	templateUrl: './movie-list.component.html',
	styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
	
	@Input() movie_list: any;
	@Output() selectedMovie = new EventEmitter();
	@Output() editedMovie	= new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

	movieClicked(movie: any) {
		this.selectedMovie.emit(movie);
	}

	movieEdited(movie: any) {
		this.editedMovie.emit(movie);
	}

}
