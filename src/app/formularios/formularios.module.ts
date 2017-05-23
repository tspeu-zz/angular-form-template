import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule   }  from '@angular/forms';
import {MaterialModule, MdNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormComponent } from './form/form.component';
import { EntradaComponent } from './entrada/entrada.component';
import { CamposComponent } from './campos/campos.component';
import { BuscarComponent } from './buscar/buscar.component';
import { FechaComponent } from './fecha/fecha.component';
import { SosciedComponent } from './soscied/soscied.component';

@NgModule({
  imports: [
    CommonModule,
//   NgModule, 
//    FormControl,   
    FormsModule,
    ReactiveFormsModule ,
    MaterialModule,
    BrowserAnimationsModule,
    MdNativeDateModule
    
  ],
  declarations:[ 
    FormComponent,
    EntradaComponent, CamposComponent, BuscarComponent,
    FechaComponent,
    SosciedComponent,
  ],
    exports:      [ FormComponent ]
})
export class FormulariosModule { }
