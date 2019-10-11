import { Component, OnInit } from '@angular/core';
import {CreditoService} from '../../services';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {
  
  constructor(private debita: CreditoService) { }

  private credito;
  
  ngOnInit() {
    this.credito = 0;
  }

  aviso(){
    alert("Esta é uma atividade da disciplina de mobile com a framework Javascript Angular");
  }

  credita(value: number):number{
    return this.credito = this.credito + value;
  }

  get getCredito(){
    return this.credito;
  }

}
