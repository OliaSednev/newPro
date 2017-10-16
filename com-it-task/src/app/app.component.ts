import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  index = 0;


  questions = [
    {id: 1, question:'question1', answers: [1,2,3,4,5]},
    {id: 2, question:'question2', answers: [11,12,13,14,15]},
    {id: 3, question:'question3', answers: [21,22,23,24,25]},
    {id: 4, question:'question4', answers: [31,32,33,34,35]}
  ];

  next() {
    if (this.index < 3) {
      this.index = this.index + 1;
    } else {
      this.index = 0;
    }
  }

  back() {
    if (this.index > 0) {
      this.index = this.index - 1;
    } else {
      this.index = 3;
    }
  }
}
