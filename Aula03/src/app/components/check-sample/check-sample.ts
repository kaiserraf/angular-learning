import { 
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-check-sample',
  styleUrl: './check-sample.css',
  templateUrl: './check-sample.html',
})
export class CheckSample implements
OnInit,
DoCheck,
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
AfterViewInit,
OnDestroy
{
  quantidade: number = 0;


  adicionar(){
    this.quantidade += 1;
  }

  decrementar(){
    this.quantidade -=1;
  }

  // checked -> content -> view

  constructor() {}

  // depois da inicialização da view
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  // quando o primeiro conteudo é iniciado
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  // após alguma alteração, verifica o conteudo
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('Adeus a todos!');
  }

}
