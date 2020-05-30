import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private API_KEY: string = environment.API_KEY;
  private API_URL: string = environment.API_URL;

  private URL: string = this.API_URL + this.API_KEY + '&q=';
  private perPage: string = '&per_page=10';

  constructor(private _http: HttpClient) { }

  getImage(query){
    return this._http.get(this.URL + query + this.perPage);
  }
}
