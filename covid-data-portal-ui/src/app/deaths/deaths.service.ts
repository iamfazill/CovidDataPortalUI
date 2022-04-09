import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addDeathModel } from '../Models/apiModels/addDeath.model';
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

  getSingleDeath(deathId: number): Observable<DeathsModel> {
    return this.httpclient.get<DeathsModel>(
      this.baseApiUrl + '/api/deaths/' + deathId
    );
  }

  updateDeath(id: number, updatedDeath: UpdateDeath): Observable<DeathsModel> {
    return this.httpclient.put<DeathsModel>(
      this.baseApiUrl + '/api/deaths/' + id,
      updatedDeath
    );
  }
  deleteDeath(id: number): Observable<DeathsModel> {
    return this.httpclient.delete<DeathsModel>(
      this.baseApiUrl + '/api/deaths/' + id
    );
  }

  addDeathRequest(addDeath: addDeathModel): Observable<DeathsModel> {
    const addRequestDeath: addDeathModel = {
      name: addDeath.name,

      age: addDeath.age,
      Gender: addDeath.Gender,
      Address: addDeath.Address,
      ContactNumber: addDeath.ContactNumber.toString(),
      Block: addDeath.Block,
      District: addDeath.District,

      DateOfAdmission: addDeath.DateOfAdmission,

      SampleCollected: addDeath.SampleCollected,

      SampleTestedAt: addDeath.SampleTestedAt,

      UnderlyingCondition: addDeath.UnderlyingCondition,

      HospitalWhereAdmitted: addDeath.HospitalWhereAdmitted,

      DateOfDeath: addDeath.DateOfDeath,

      DaysTestedBeforeDeath: addDeath.DaysTestedBeforeDeath,

      DaysAdmitted: addDeath.DaysAdmitted,

      DaysAdmittedInICU: addDeath.DaysAdmitted,

      DaysInOxygenSupportOrVentillator:
        addDeath.DaysInOxygenSupportOrVentillator,

      Remarks: addDeath.Remarks,

      VaccinationStatus: addDeath.VaccinationStatus,
    };

    return this.httpclient.post<DeathsModel>(
      this.baseApiUrl + '/api/deaths',
      addRequestDeath
    );
  }
}
