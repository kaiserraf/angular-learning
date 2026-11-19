import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  imports: [FormsModule],
  selector: 'app-entry-data',
  styleUrl: './entry-data.css',
  templateUrl: './entry-data.html',
})
export class EntryData {
  placeholder:string = "";
  placepass:string = "";

  color:string = "red"
}
