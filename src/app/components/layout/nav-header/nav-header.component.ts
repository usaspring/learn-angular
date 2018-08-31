import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

  @Input() logo: string;


  constructor() { }

  ngOnInit() {
  }

}
