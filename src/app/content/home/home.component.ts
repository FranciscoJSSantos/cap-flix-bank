import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Movie} from '../shared/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  movies: Movie[];
  selectedMovie?: Movie;
  showFiller = false;



  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.movies = [
      {
        name: 'The Phantom Menace',
        id: 1,
        genre: 'action,adventure,opera espacial,fiction,fantasy',
        description: 'Obi-Wan e seu mentor embarcam em uma perigosa aventura na' +
          ' tentativa de salvar o planeta das garras de Darth Sidious. Durante a viagem, ' +
          'eles conhecem um habilidoso menino e decidem treiná-lo para se tornar um Jedi.' +
          ' Mas o tempo irá revelar que as coisas nem sempre são o que aparentam ser.',
        url: 'https://youtu.be/J1Qf8Zc7vSk',
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTlSOm0a_zpd7Jsi44BHOTEoTH2U_dR54qG1lPiZkye3v7f7Klr',
      },
      {
        name: 'The Phantom Menace',
        id: 2,
        genre: 'action,adventure,opera espacial,fiction,fantasy',
        description: 'Obi-Wan e seu mentor embarcam em uma perigosa aventura na' +
          ' tentativa de salvar o planeta das garras de Darth Sidious. Durante a viagem, ' +
          'eles conhecem um habilidoso menino e decidem treiná-lo para se tornar um Jedi.' +
          ' Mas o tempo irá revelar que as coisas nem sempre são o que aparentam ser.',
        url: 'https://youtu.be/J1Qf8Zc7vSk',
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTlSOm0a_zpd7Jsi44BHOTEoTH2U_dR54qG1lPiZkye3v7f7Klr',
      }
    ];
  }

  getImageContent(movie: Movie) {
     return this.sanitizer.bypassSecurityTrustUrl(movie.image);
  }

  removeMovie(movie: Movie): void {
    const index = this.movies.indexOf(movie);
    if (index > -1) {
      this.movies.splice(index, 1);
    }
  }

  selectMovie(movie: Movie): void {
    if (this.selectedMovie === movie) {
      movie.description = this.selectedMovie.description;
      this.selectedMovie = null;
    } else {
      this.selectedMovie = movie;
    }
  }

  handleReaderLoaded(event) {
    const reader = event.target;
    console.log('BEFORE ', this.selectedMovie.image);
    this.selectedMovie.image = reader.result.split(',', 2)[1];
    console.log('AFTER ', this.selectedMovie.image);
  }

  onImageSelected(event) : void {
    const selectedImage = event.target.files[0];

    if (selectedImage) {

      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsDataURL(selectedImage);
    }
  }


  updateMovie(movie: Movie) {
    this.selectMovie(movie);
  }
}
