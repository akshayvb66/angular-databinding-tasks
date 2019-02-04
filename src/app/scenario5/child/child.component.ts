import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

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
