import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AddEditEmployeeComponent } from './components/add-edit-employee/add-edit-employee.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'employees', component: EmployeeListComponent},
    {path: 'employees/add', component: AddEditEmployeeComponent},
    {path: 'employees/edit/:id', component: AddEditEmployeeComponent},
    {path: 'employees/:id', component: EmployeeDetailsComponent}
];
