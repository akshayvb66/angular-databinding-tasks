import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child4',
  templateUrl: './child.component.html'
})
export class Child4Component implements OnInit {

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
