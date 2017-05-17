import { Component, OnInit } from '@angular/core';
import {MdInputModule, MdAutocompleteModule} from '@angular/material';

import {FormControl, ReactiveFormsModule} from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  stateCtrl: FormControl;
  filteredStates: any;
  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut'];

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
    .startWith(null)
    .map(name => this.filtroEstados(name));

   }

   filtroEstados(param : string){
    return param ? this.states.filter(estado => new RegExp(`^${param}`,'gi').test(estado) )
                : this.states;


   }

     filterStates(val: string) {
    return val ? this.states.filter(s => new RegExp(`^${val}`, 'gi').test(s))
               : this.states;
  }

  ngOnInit() {
  }

}
