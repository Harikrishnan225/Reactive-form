import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

value = ''
btn="Click Me"

changeItem() {
  if(this.value === 'box'){
    this.value = 'circle';
    this.btn="Change Box"
    return;
  }
  this.value = 'box'
  this.btn="Change Circle"

}

  constructor() { }

  ngOnInit(): void {
  }

}

function ngif(arg0: boolean) {
  throw new Error('Function not implemented.');
}
