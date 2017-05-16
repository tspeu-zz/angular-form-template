import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule   }  from '@angular/forms';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormComponent } from './form/form.component';
//import { EntradaComponent } from './entrada/entrada.component';

@NgModule({
  imports: [
    CommonModule,
//   NgModule, 
//    FormControl,   
    FormsModule,
    ReactiveFormsModule ,
    MaterialModule,
    BrowserAnimationsModule
    
  ],
  declarations:[ 
    FormComponent,
 //   EntradaComponent
  ],
    exports:      [ FormComponent ]
})
export class FormulariosModule { }
