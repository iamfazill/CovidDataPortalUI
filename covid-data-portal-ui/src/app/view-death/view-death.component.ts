import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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
    private readonly route: ActivatedRoute,
    private snakebar:MatSnackBar,
    private router:Router
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
  onUpdate():void{

    this.service.updateDeath(parseInt(this.deathDetails.id),this.deathDetails)
    .subscribe(
      (successResponse)=>{
        this.snakebar.open('Updated Successfully',undefined,{
          duration:3000
        });
        //show a notification

        this.router.navigate(['logged-in','deaths']);
      },
      (errorResponse)=>{
        console.log(errorResponse);
        //log the error
      }
    );

  }
}
