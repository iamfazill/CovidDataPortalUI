import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatarialModule } from './Material/matarial/matarial.module';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { DeathsComponent } from './deaths/deaths.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ViewDeathComponent } from './view-death/view-death.component';
import { AddDeathComponent } from './add-death/add-death.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    DeathsComponent,
    LogInComponent,
    SignUpComponent,
    LoggedInComponent,
    SideNavComponent,
    DashBoardComponent,
    ViewDeathComponent,
    AddDeathComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatarialModule,
    HttpClientModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
