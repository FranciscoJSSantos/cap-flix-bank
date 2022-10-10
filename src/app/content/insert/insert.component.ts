import { Router } from '@angular/router';
import { Movie } from './../shared/movie';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  formMovie = this.formBuilder.group(
    {
      id: -1,
      name: [''],
      genre: [''],
      description: [''],
      url: [''],
      image: ['']
    }
  )
  movie!: Movie;

  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.formMovie.setValue(
      {
        id: -1,
        name: '',
        genre: '',
        description: '',
        url: '',
        image: ''
      }
    )
  }

  back(){
    this.router.navigate(['/content'])
  }

}
