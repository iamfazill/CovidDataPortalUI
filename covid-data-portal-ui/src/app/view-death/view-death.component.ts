import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeathsService } from '../deaths/deaths.service';
import { UiDeathsModel } from '../Models/uiModels/death.model';

@Component({
  selector: 'app-view-death',
  templateUrl: './view-death.component.html',
  styleUrls: ['./view-death.component.css'],
})
export class ViewDeathComponent implements OnInit {
  deathId: string | null | undefined;
  deathDetails:any;
  // deathDetails: UiDeathsModel = {
  //   id: -1,
  //   name: '',
  //   age: -1,
  //   Gender: '',
  //   Address: '',
  //   ContactNumber: '',

  //   Block: '',
  //   District: '',

  //   DateOfAdmission: new Date(),

  //   SampleCollected: new Date(),

  //   SampleTestedAt: '',

  //   UnderlyingCondition: '',

  //   HospitalWhereAdmitted: '',

  //   DateOfDeath: new Date(),

  //   DaysTestedBeforeDeath: '',

  //   DaysAdmitted: '',

  //   DaysAdmittedInICU: '',

  //   DaysInOxygenSupportOrVentillator: '',

  //   Remarks: '',

  //   VaccinationStatus: '',
  // };
  constructor(
    private readonly service: DeathsService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.deathId = params.get('id');
      if (this.deathId) {
        this.service.getSingleDeath(parseInt(this.deathId)).subscribe(
          (successResponse) => {
           this.deathDetails= successResponse;
          },
          (errorResponse) => {
            console.log(errorResponse);
          }
        );
      }
    });
  }
}
