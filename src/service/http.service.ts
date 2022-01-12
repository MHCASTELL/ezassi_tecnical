import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';

@Injectable({
    providedIn:  'root'
})

export class HttpService {

    private url = 'https://api.npoint.io/5e060fbf81b1ef728346';

    constructor(
        private http: HttpClient
    ){}

    getCards() {
        return this.http.get(this.url);
    }
}