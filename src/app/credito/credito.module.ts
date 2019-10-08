import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditoComponent } from './components';
import { CreditoService } from './services';



@NgModule({
  declarations: [
    CreditoComponent
  ],
  imports: [
    CommonModule,
  ],
  providers:[
    CreditoService
  ],
  exports: [
    CreditoComponent
  ]
})
export class CreditoModule { }
