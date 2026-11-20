import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-personalize-titles',
  styleUrl: './personalize-titles.css',
  templateUrl: './personalize-titles.html',
})
export class PersonalizeTitles implements OnInit, OnChanges {

  @Input() nome: string = '';

  constructor() {
    console.log("constructor");
  }
  ngOnChanges(): void {
    console.log(`ngOnChanges ${this.nome}`);
  }

  ngOnInit(): void {
    console.log(`ngOnInit ${this.nome}`);
  }
}

/*
life cicle hooks

1. ngOnInit()
2. ngonChanges()
3. ngDoCheck()
  3.1. ngAfterContentInit()
  3.2. ngAfterContentCheckOut()
  3.3. ngAfterViewInit()
  3.4. ngAfterViewChecked()
4. ngOnDestroy()

*/