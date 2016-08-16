import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  collection = [];

  constructor() {
    for (let i = 1; i <= 25; i++) {
      this.collection.push(`item ${i}`);
    }
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
