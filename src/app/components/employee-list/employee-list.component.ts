import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
  export class EmployeeListComponent implements OnInit {
    employees: any[] = [];
  
    constructor(private employeeService: EmployeeService) { }
  
    ngOnInit(): void {
      this.employees = this.employeeService.getAllEmployees();
    }
  }

