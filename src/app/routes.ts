import { Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from './folders/home/home.component';
import { EmployeesComponent } from './folders/employees/employees.component';
import { MachinesComponent } from './folders/machines/machines.component';
import { JobCardsComponent } from './folders/job-cards/job-cards.component';
import { AdminComponent } from './folders/admin/admin.component';
import { TopMngmntComponent } from './folders/top-mngmnt/top-mngmnt.component';
import { TechniciansComponent } from './folders/technicians/technicians.component';
import { OperatorsComponent } from './folders/operators/operators.component';
import { EngineersComponent } from './folders/engineers/engineers.component';
import { EmpDetailsComponent } from './folders/emp-details/emp-details.component';
import { TechDetailReportComponent } from './folders/tech-detail-report/tech-detail-report.component';
import { MachineDetailsComponent } from './folders/machine-details/machine-details.component';
import { JobCardDetailsComponent } from './folders/job-card-details/job-card-details.component';
import { RankingReportComponent } from './folders/ranking-report/ranking-report.component';

export const appRoutes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path:"employees",
        component: EmployeesComponent
    },
    {
        path:"machines",
        component: MachinesComponent
    },
    {
        path:"machines/:id",
        component: MachineDetailsComponent
    },
    {
        path:"jobCards",
        component: JobCardsComponent
    },
    {
        path:"jobCards/:id",
        component: JobCardDetailsComponent
    },
    {
        path:"Admin",
        component: AdminComponent
    },
    {
        path:"TopManagement",
        component: TopMngmntComponent
    },
    {
        path:"Technician",
        component: TechniciansComponent
    },
    {
        path:"Operator",
        component: OperatorsComponent
    },
    {
        path:"ExecEngineer",
        component: EngineersComponent
    },
    {
        path: 'emp/:RegNo',
        component: EmpDetailsComponent
    },
    {
        path: 'Technician/:id/:year',
        component: TechDetailReportComponent
    },
    {
        path:'ranking',
        component: RankingReportComponent
    },
    {
        path: '',
        redirectTo: '/home', 
        pathMatch: 'full'
    }
];