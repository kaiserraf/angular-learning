import { Component, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card implements OnInit{
  produtos:string[] = [];
  profileType: string = "superuser";

  constructor(){
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "fonte"
    ];
  }
  ngOnInit(): void {
    
  }

  adicionar(nomeProduto: string){
    this.produtos.push(nomeProduto);
  }
  remover(index:number){
    this.produtos.splice(index, 1);
  }
}
