import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { DeathsComponent } from './deaths/deaths.component';
import { LogInComponent } from './log-in/log-in.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewDeathComponent } from './view-death/view-death.component';

const routes: Routes = [
  {path:'',redirectTo:'log-in',pathMatch:'full' },
  {path:'log-in',component:LogInComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'logged-in',component:LoggedInComponent,children:[

    {path:'',redirectTo:'dash-board',pathMatch:'full'},
    {path:'deaths',component:DeathsComponent},
    {path:'dash-board',component:DashBoardComponent},
    {path:'view-death/:id',component:ViewDeathComponent},

    {path:'**',component:DashBoardComponent}

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
