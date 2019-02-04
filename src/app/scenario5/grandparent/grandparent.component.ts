import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.css']
})
export class GrandparentComponent implements OnInit {


  message2:String;

  savefinal2(val:String){
    this.message2=val;
  }

  constructor() { }

  ngOnInit() {
  }

}
