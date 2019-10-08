import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {

  constructor() { }

  debitaCredito(valorAtual:number, newValue:number):number{
    return valorAtual + newValue;
  }
}
