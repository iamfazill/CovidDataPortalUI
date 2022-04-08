import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeathsModel } from '../Models/apiModels/deaths.model';
import { UpdateDeath } from '../Models/apiModels/updateDeath.model';

@Injectable({
  providedIn: 'root',
})
export class DeathsService {
  private baseApiUrl = 'https://localhost:7297';
  constructor(private httpclient: HttpClient) {}

  getAllDeaths(): Observable<DeathsModel[]> {
    return this.httpclient.get<DeathsModel[]>(this.baseApiUrl + '/api/deaths');
  }

  getSingleDeath(deathId:number):Observable<DeathsModel>
  {
    return this.httpclient.get<DeathsModel>(this.baseApiUrl+'/api/deaths/'+deathId);
  }

  updateDeath(id:number,updatedDeath:UpdateDeath):Observable<DeathsModel>
  {
    return this.httpclient.put<DeathsModel>(this.baseApiUrl+'/api/deaths/'+id,updatedDeath)

  }
}
