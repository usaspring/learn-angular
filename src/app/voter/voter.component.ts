import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  @Input() name:string;
  @Output() voted: EventEmitter<boolean> = new EventEmitter<boolean>();
  didVote: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  vote(agreed: boolean) {
    // raise the voted event
    this.voted.emit(agreed);
    this.didVote = true;
  }

}
