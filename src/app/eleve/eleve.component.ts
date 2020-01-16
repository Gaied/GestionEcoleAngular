import { Component, OnInit, Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Eleve} from '../Model/Eleve';
import {EleveService} from '../Service/eleve.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.scss']
})
export class EleveComponent implements OnInit {

  eleves: Eleve[];
  constructor(private router: Router, private EleveServices: EleveService) { }

  ngOnInit() {

    this.EleveServices.getAll()
    .subscribe( data => {
      this.eleves = data;
    });
  }

  

}
