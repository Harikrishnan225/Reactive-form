import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  value = 1;


  changeContent() {
    this.value = this.value === 1 ? 0: 1;
   
  }

  constructor() { }

  ngOnInit(): void {
  }

}
