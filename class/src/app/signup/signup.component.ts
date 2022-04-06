import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate = '';
  users: any[] = [];
  constructor() {

    this.maxDate = new Date().toJSON().slice(0, 10).split('-').reverse().join('-');
    this.loadData()
  }

  private loadData() {
    const getData = fetch('https://jsonplaceholder.typicode.com/users')
    getData.then(res =>res.json())
      .then(d => {
        console.log(d)
        this.users = d;
      })

  }

  ngOnInit(): void {
  }

  submit(f: any) {
    console.log(f.value)
  }
}
