import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  responseText: any;

  constructor() {}



  ngOnInit(): void {
  }

  submit(g: any) {
    console.log(g.value);
  }


   loadDoc() {
   fetch('https://jsonplaceholder.cypress.io/todos')
  .then((res) => {
    return res.json()
  })
  .then(d => console.log(d))

  }




 



}
function responseText(responseText: any) {
  throw new Error('Function not implemented.');
}

