import { Component, Input, OnInit } from '@angular/core';
import { GiftService } from '../gift.service';


@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

@Input() color=""
  constructor(
    private serv: GiftService
  ) {
    // this.serv.loadDoc();
  }

  ngOnInit(): void {
  }


  getGifts() {

  }

}
