import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

    message1:String;

    savefinal(val:String){
      this.message1=val;
      this.save2();
    }

    // value:String;

     @Output()
     answer1=new EventEmitter<String>();
  
     save2(){
       this.answer1.emit(this.message1);
    }
    
    constructor() { }
    ngOnInit() {
    }
}
