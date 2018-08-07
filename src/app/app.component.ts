import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'rl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngtest';

  $test: Observable<number>;
  test: number;

  constructor() {}

  ngOnInit() {
    this.$test = interval(1000);
    this.$test.subscribe(next => {
      this.test = Date.now();
    });
  }

}
