import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Image } from '../models/image';	//Esto es un modelo, que hemos llamado imagen

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

   getImagesDynamicWebJS() {
    return this.http.get<any>('assets/img/PersonalPortfolioWEBimg/photos1.json')
      .toPromise()
      .then(res => <Image[]>res.data)
      .then(data => { return data; });
    }
    
    getImagesPersonalPortfolioDB() {
    return this.http.get<any>('assets/img/PersonalPortfolioDBimg/photos1.json')
      .toPromise()
      .then(res => <Image[]>res.data)
      .then(data => { return data; });
    }
}