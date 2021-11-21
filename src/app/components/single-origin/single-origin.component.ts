import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-origin',
  templateUrl: './single-origin.component.html',
  styleUrls: ['./single-origin.component.scss'],
})
export class SingleOriginComponent implements OnInit {

  percents: Array<number> = [100, 85, 70, 50];
  darkMilk: boolean = false;
  vegan: boolean = true;
  keto: boolean = false;
  selectedPercent = 100;

  constructor() { }

  ngOnInit() {}

  updateDarkMilk(event: any) {
    const { value } = event.detail;
    this.darkMilk = value < 70;
  }
  
  updateVegan(event: any) {
    this.vegan = this.selectedPercent === 70 && !this.darkMilk;
  }

}
