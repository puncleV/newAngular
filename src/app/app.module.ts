import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { HttpModule }    from '@angular/http';

import { HeroesComponent }  from './heroes.component';
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard.component";
import { AppRoutingModule } from "./app-routing.module";

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
