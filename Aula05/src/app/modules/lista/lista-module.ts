import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inputs } from './inputs/inputs';
import { ListView } from './list-view/list-view'

@NgModule({
  imports: [CommonModule, Inputs, ListView],
  exports: [Inputs, ListView]
})
export class ListaModule {}
