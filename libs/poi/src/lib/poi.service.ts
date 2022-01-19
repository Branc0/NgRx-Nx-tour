import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PoiEntity } from '..';

@Injectable({
  providedIn: 'root'
})
export class PoiService {

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<PoiEntity[]> {
    return this.httpClient.get<PoiEntity[]>('assets/poi.json');
  }

}
