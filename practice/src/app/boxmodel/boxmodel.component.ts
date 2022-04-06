import { Component, Input, OnInit } from '@angular/core';
import { GiftService } from '../gift.service';

@Component({
  selector: 'app-boxmodel',
  templateUrl: './boxmodel.component.html',
  styleUrls: ['./boxmodel.component.css']
})
export class BoxmodelComponent implements OnInit {

colors=[
  'red'
]  

  todos: any[] = [];

  birthDay: any = new Date('1995-02-23');

  constructor(
    private userServ: GiftService
  ) {
    // this.getTodos();
    console.log(this.birthDay)
    // this.birthDay = this.birthDay?.toDateString();
  }

  private async getTodos() {
    try {
      const d: any = await this.userServ.loadDoc()
      console.table(d);
      this.todos = d;
    } catch (error) {
      console.error('Failed')
    }
  }

  ngOnInit(): void {
  }
}
