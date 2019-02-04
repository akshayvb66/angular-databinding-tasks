import { Component} from '@angular/core';

@Component({
  selector: 'app-parent4',
  templateUrl: './parent.component.html'
})
export class Parent4Component{

    constructor() { }

    message1:String;

    savefinal(val:String){
      this.message1=val;
    }
}
