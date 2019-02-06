import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { TechnicianService } from '../../services/technician.service';

@Component({
  selector: 'app-technicians',
  templateUrl: './technicians.component.html',
  styleUrls: ['./technicians.component.css']
})
export class TechniciansComponent implements OnInit {

    technicians:any;

    constructor(private technicianService:TechnicianService,  private appRoutes: Router,
                private route: ActivatedRoute) { }

    ngOnInit() {
      this.technicianService.getTechnicians()
      .subscribe(
        res => this.technicians = res,
        err => console.log(err)
      );
    }

}
