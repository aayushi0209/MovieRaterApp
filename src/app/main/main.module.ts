import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MainComponent,
    MovieDetailsComponent,
    MovieFormComponent,
    MovieListComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
})
export class MainModule { 
  constructor() {
    }
  }


