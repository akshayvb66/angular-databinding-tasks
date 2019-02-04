import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario6parent',
  templateUrl: './scenario6parent.component.html',
  styleUrls: ['./scenario6parent.component.css']
})
export class Scenario6parentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  message1:String;

  savefinal(val:String){
    this.message1=val;
  }
}
