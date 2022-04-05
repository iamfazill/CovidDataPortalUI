import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeathsComponent } from './deaths/deaths.component';

const routes: Routes = [
  {path:'',component:DeathsComponent},
  {path:'deaths',component:DeathsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
