import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  constructor(private http:HttpClient, private router:Router) { }

  getTechnicians(){
    return this.http.get(`http://localhost:5000/api/employees/technician/5c56bd04080ac2254c0684b8`);
  }

  getTechnicianDetails(id){
    return this.http.get(`http://localhost:5000/api/employees/`+id);
  }
}
