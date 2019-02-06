import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NgxNotificationComponent } from 'ngx-notification';
import { appRoutes } from './routes';
import { HomeComponent } from './folders/home/home.component';
import { EmployeesComponent } from './folders/employees/employees.component';
import { MachinesComponent } from './folders/machines/machines.component';
import { JobCardsComponent } from './folders/job-cards/job-cards.component';
import { TechDetailReportComponent } from './folders/tech-detail-report/tech-detail-report.component';
import { EmpDetailsComponent } from './folders/emp-details/emp-details.component';
import { AdminComponent } from './folders/admin/admin.component';
import { TopMngmntComponent } from './folders/top-mngmnt/top-mngmnt.component';
import { TechniciansComponent } from './folders/technicians/technicians.component';
import { EngineersComponent } from './folders/engineers/engineers.component';
import { OperatorsComponent } from './folders/operators/operators.component';
import { MachineService } from './services/machine.service';
import { CommonModule } from '@angular/common';
import { MachineDetailsComponent } from './folders/machine-details/machine-details.component';
import { TechnicianService } from './services/technician.service';
import { JobService } from './services/job.service';
import { JobCardDetailsComponent } from './folders/job-card-details/job-card-details.component';
import { NavbarComponent } from './folders/navbar/navbar.component';
import { EmployeesService } from './services/employees.service';
import { RankingReportComponent } from './folders/ranking-report/ranking-report.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxNotificationComponent,
    HomeComponent,
    EmployeesComponent,
    MachinesComponent,
    JobCardsComponent,
    TechDetailReportComponent,
    EmpDetailsComponent,
    AdminComponent,
    TopMngmntComponent,
    TechniciansComponent,
    EngineersComponent,
    OperatorsComponent,
    MachineDetailsComponent,
    JobCardDetailsComponent,
    NavbarComponent,
    RankingReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [MachineService, TechnicianService, JobService, EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
