import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
  styleUrls: ['./votetaker.component.css']
})
export class VotetakerComponent implements OnInit {

  agreed:number = 0;
  disagreed:number = 0;
  voters:string[] = ['Mr. IQ', 'Ms. Universe'];

  constructor() { }

  ngOnInit() {
  }

  onVoted(agreed:boolean):void {
    agreed ? this.agreed++ : this.disagreed++;
  }

}
