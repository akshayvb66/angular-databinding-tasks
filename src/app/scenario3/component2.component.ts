import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./scenario3.component.css']
})
export class Component2Component implements OnInit {

  @Input() childMessage:String;

  constructor() { }

  ngOnInit() {
  }

}