import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() clickMenu:EventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  clickMenuEvent(){
    console.log("asdasd")
    this.clickMenu.emit("true")
  }

}
