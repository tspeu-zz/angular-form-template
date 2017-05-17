import { Component, OnInit } from '@angular/core';
import {Emisor} from '../../emisor';

@Component({
  selector: 'app-soscied',
  templateUrl: './soscied.component.html',
  styleUrls: ['./soscied.component.css']
})
export class SosciedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 
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
}
