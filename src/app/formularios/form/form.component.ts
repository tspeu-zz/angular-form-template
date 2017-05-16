import { Component, OnInit } from '@angular/core';
import {MdCardModule} from '@angular/material';
import {Emisor} from '../../emisor';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
}) 
export class FormComponent implements OnInit {

 constructor() {}

  emisor = new Emisor(10001, "Emisor1","12345678P");

 submited = false;

 alterEgo = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];


 onSubmit(){
   this.submited= true;
 }

  get test(){
    return JSON.stringify(this.emisor);
 }
  

  ngOnInit() {
  }

}
