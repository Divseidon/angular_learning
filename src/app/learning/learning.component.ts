import { Component } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css'],
})
export class LearningComponent {
  public title: string;

  constructor() {
    this.title = 'Success depends on how persevering you are';

    console.log("I'm working in your App! ");
  }
}
