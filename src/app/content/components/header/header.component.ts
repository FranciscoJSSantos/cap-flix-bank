import { Component, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { EventEmitter } from "events";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  home() {
    this.router.navigate([""]);
    localStorage.removeItem("tokenLogin");
    sessionStorage.removeItem("tokenLogin");
  }
}
