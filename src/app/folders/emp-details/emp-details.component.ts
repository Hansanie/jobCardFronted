import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

 // technicians = [{RegNo:1, FirstName:'Abc', LastName:'WESRDTFGH'}, {RegNo: 2, FirstName: 'SGDH', LastName:'arestdfghvhjb'}]

  constructor(private appRoute: ActivatedRoute) { 
    //this.appRoute.params.subscribe(params => console.log(params));
  }

  ngOnInit() {
  }

}
