import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  myvalue = 'Hari'
  constructor(
    private http: HttpClient
  ) { }

  abc() {
    console.log('gggg')
  }


  loadDoc() {

    // fetch('https://jsonplaceholder.cypress.io/todos')
    //   .then((res) => {
    //     return res.json()
    //   })
    //   .then(d => console.log(d))

    return lastValueFrom(this.http.get('https://jsonplaceholder.cypress.io/todos'))
   
  }
}
