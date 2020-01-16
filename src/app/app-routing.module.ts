import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EleveComponent} from './eleve/eleve.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path : '/', redirectTo : 'eleve' },
  { path: 'eleve', component: EleveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
