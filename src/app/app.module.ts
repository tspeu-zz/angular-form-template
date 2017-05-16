import { BrowserModule } from '@angular/platform-browser';
//import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { FormComponent } from './form/form.component';
//import { EntradaComponent } from './entrada/entrada.component';
import {FormulariosModule} from './formularios/formularios.module';
import { CamposPipe } from './campos.pipe';
import { CamposComponent } from './campos/campos.component';

@NgModule({
  declarations: [
    AppComponent,
    CamposPipe,
    CamposComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
//   FormsModule,
    HttpModule,
    FormulariosModule,
    MaterialModule
 //   CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
