import { Component } from '@angular/core';
import { Injectable } from  '@angular/core';

import { HttpService } from '../service/http.service';

@Injectable({
  providedIn:  'root'
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  posts : any = [];
  constructor(
    private http: HttpService,
  ){
  }

  ngOnInit(){
    
    this.http.getCards().subscribe(
      data => { this.posts = data;
       },
      err => console.error(err), 
      () => console.log('Variable', this.posts) 
      );

  }
  title = 'Card View';
}
