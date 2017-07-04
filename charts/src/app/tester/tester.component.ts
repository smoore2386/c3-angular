import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import * as c3 from  'c3';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit, AfterViewInit {
  chart;
  id;
  chartType;
  constructor() {
  }
  ngAfterViewInit(){
    this.chart = c3.generate({
      bindto: ".chart",
      data: {
	
	columns: [
	  ['Facebook', 98],
	  ['YouTube', 2],
	],
	type:'pie'
      },
      legend: {
	show: true
      }
    });    
  }
  ngOnInit() {
  }

}

export class Charts{
  id = '23';
  chartType = 'pie'; // default to pie yum
  data: FirebaseObjectObservable<any>;;
  collection = 'chartData';
  constructor(db: AngularFireDatabase){
    this.data = db.object('/chartData');
  }


}
