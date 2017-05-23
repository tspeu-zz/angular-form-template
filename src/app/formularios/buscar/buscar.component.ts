import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

 title : string ="";
  titulo :string = `Nombre de la operación/ Información`;
  
  constructor() { 
    this.setTitle(this.titulo);
  }

  setTitle(val : string) {
    this.title = val;
  }

  getTitle(){
    return this.title;
  }

  ngOnInit() {
  }

}
