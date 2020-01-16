import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EleveComponent } from './eleve/eleve.component';

import { HttpClientModule } from '@angular/common/http';
import { EleveService } from './Service/eleve.service';


@NgModule({
  declarations: [
    AppComponent,
    EleveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [EleveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
