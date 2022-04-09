import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DeathsService } from '../deaths/deaths.service';
import { addDeathModel } from '../Models/apiModels/addDeath.model';
import { UiDeathsModel } from '../Models/uiModels/death.model';

@Component({
  selector: 'app-add-death',
  templateUrl: './add-death.component.html',
  styleUrls: ['./add-death.component.css']
})
export class AddDeathComponent implements OnInit {


addDeath: addDeathModel = {

    name: '',
    age: -1,
    Gender: '',
    Address: '',
    ContactNumber: '',

    Block: '',
    District: '',

    DateOfAdmission:   new Date(),

    SampleCollected: new Date(),

    SampleTestedAt: '',

    UnderlyingCondition: '',

    HospitalWhereAdmitted: '',

    DateOfDeath: new Date(),

    DaysTestedBeforeDeath: '',

    DaysAdmitted: '',

    DaysAdmittedInICU: '',

    DaysInOxygenSupportOrVentillator: '',

    Remarks: '',

    VaccinationStatus: '',
  };
  constructor(private service:DeathsService,private snakebar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }
  onSave()
  {
console.log('in on save method');
this.service.addDeathRequest(this.addDeath).subscribe(
  (successresponse)=>{

    this.snakebar.open('Added Successfully',undefined,{
      duration:2000
    });
    //show a notification

    setTimeout(() => {
      this.router.navigate(['logged-in','deaths']);
    }, 2000);
    console.log(successresponse);
  },
  (errorResponse)=>{
    console.log('in the error responce');
    console.log(errorResponse);
  }
);
  }

}
