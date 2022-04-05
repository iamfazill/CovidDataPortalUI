import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeathsModel } from '../Models/apiModels/deaths.model';

@Injectable({
  providedIn: 'root',
})
export class DeathsService {
  private baseApiUrl = 'https://localhost:7297';
  constructor(private httpclient: HttpClient) {}
  getAllDeaths(): Observable<DeathsModel[]> {
    return this.httpclient.get<DeathsModel[]>(this.baseApiUrl + '/api/deaths');
  }
}
