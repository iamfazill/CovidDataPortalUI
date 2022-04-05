import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UiDeathsModel } from '../Models/uiModels/death.model';

import { DeathsService } from './deaths.service';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.component.html',
  styleUrls: ['./deaths.component.css']
})
export class DeathsComponent implements OnInit {
  deaths: UiDeathsModel[]=[];
  displayedColumns: string[] = [
  //  'id',
   'name',
   'age',
   'Gender',
   'Address',
   'ContactNumber',
   'Block',
   'District',
   'DateOfAdmission',
  //  'SampleCollected',
  //  'SampleTestedAt',
  //  'UnderlyingCondition',
  //  'HospitalWhereAdmitted',
   'DateOfDeath'
  //  'DaysTestedBeforeDeath',
  //  'DaysAdmitted',
  //  'DaysAdmittedInICU',
  //  'DaysInOxygenSupportOrVentillator',
  //  'Remarks',
  //  'VaccinationStatus'
  ];
  dataSource:MatTableDataSource<UiDeathsModel>= new MatTableDataSource<UiDeathsModel>();
  @ViewChild(MatPaginator) matPaginator!:MatPaginator;
  @ViewChild(MatSort) matSort!:MatSort;
  filterstring:string='';
  constructor(private deathService:DeathsService) { }

  ngOnInit(): void {
    this.deathService.getAllDeaths().subscribe(
      (success)=>{
       this.deaths=success;

       this.dataSource= new MatTableDataSource<UiDeathsModel>(this.deaths);

       if (this.matPaginator)
       {
         this.dataSource.paginator=this.matPaginator;
       }
       if(this.matSort)
       {
         this.dataSource.sort=this.matSort;
       }
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  filterDeaths()
  {
    this.dataSource.filter=this.filterstring.trim().toLowerCase();
  }
}
