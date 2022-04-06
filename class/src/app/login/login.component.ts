import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  name = 'hello'

  constructor() { }

  ngOnInit(): void {
  }

  submit(f: any){
    console.log(f.value)
  }
}
