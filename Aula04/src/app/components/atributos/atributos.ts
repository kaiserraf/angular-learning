import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-atributos',
  styleUrl: './atributos.css',
  templateUrl: './atributos.html',
})
export class Atributos {
  estilo: string = "disable";
  corFundo: string = "red";
  corFonte: string = 'yellow'
  item: string = ""

  mudarEstilo(){
    if(this.estilo === "disable"){
      this.estilo = "enable"
    }else{
      this.estilo = "disable"
    }
  }
}
