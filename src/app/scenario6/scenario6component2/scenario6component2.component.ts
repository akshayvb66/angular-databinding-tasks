import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario6component2',
  templateUrl: './scenario6component2.component.html',
  styleUrls: ['./scenario6component2.component.css']
})
export class Scenario6component2Component implements OnInit {

  @Input() siblingMessage:String;

  constructor() { }

  ngOnInit() {
  }

}
