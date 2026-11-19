import { Component, input, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-buttons',
  styleUrl: './buttons.css',
  templateUrl: './buttons.html',
})
export class Buttons {
  @Input() label: string = ""; 
  buttonText: string[] = [
    "Cliente", "Veiculo", "Peça", "Serviço", "OS", "Funcionario"
  ]

  getAlert(numero:number){
    alert(this.label + 14);
  }
}
