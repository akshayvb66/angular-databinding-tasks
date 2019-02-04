import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario6component1',
  templateUrl: './scenario6component1.component.html',
  styleUrls: ['./scenario6component1.component.css']
})
export class Scenario6component1Component implements OnInit {


  value:String;

  @Output()
  answer=new EventEmitter<String>();

  save1(){
    this.answer.emit(this.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
