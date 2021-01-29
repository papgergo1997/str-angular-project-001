import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  transform(value: any[], phrase: string, key: string = ''): any[] {
    if (!Array.isArray(value) || !phrase || !key) {
      return value;
    }
  
    phrase = ('' + phrase).toLowerCase();
    return value.filter( item => {
      const strItem: string = ('' + item[key]).toLowerCase();
      return strItem.includes(phrase);
    });
  
  }

}
