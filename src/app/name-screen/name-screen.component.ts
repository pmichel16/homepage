import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-name-screen',
  templateUrl: './name-screen.component.html',
  styleUrls: ['./name-screen.component.css']
})
export class NameScreenComponent implements OnInit {
  name: String = "";
  nameSubmitted = false;
  constructor() { }
  ngOnInit() {
  }
  showWelcome() {
    this.nameSubmitted = true;
  }
  onKey(event: any) {
    if (event.keyCode === 13) {
      this.showWelcome();
    }
  }

}
