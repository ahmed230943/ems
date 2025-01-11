import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees = [
    { id: 1111, name: 'John', position: 'Software Developer', department: 'IT', salary: 1000 },
    { id: 2222, name: 'Jill', position: 'Project Manager', department: 'Management', salary: 1500 },
    { id: 3333, name: 'James', position: 'Business Analyst', department: 'Business', salary: 1200 },
    { id: 4444, name: 'Jenny', position: 'HR Manager', department: 'HR', salary: 1100 },
    { id: 5555, name: 'Jim', position: 'QA Engineer', department: 'IT', salary: 900 },
    { id: 6666, name: 'Joe', position: 'DevOps Engineer', department: 'IT', salary: 1300 },
    { id: 7777, name: 'Ahmed', position: 'Software Developer', department: 'IT', salary: 1000 },
    { id: 8888, name: 'Fatima', position: 'Project Manager', department: 'Management', salary: 1500 },
    { id: 9999, name: 'Hassan', position: 'Business Analyst', department: 'Business', salary: 1200 },
    { id: 1234, name: 'Aisha', position: 'HR Manager', department: 'HR', salary: 1100 },
    { id: 2345, name: 'Sung', position: 'QA Engineer', department: 'IT', salary: 900 },
    { id: 3456, name: 'Min', position: 'DevOps Engineer', department: 'IT', salary: 1300 },
    { id: 4567, name: 'Yuna', position: 'Software Developer', department: 'IT', salary: 1000 },
    { id: 5678, name: 'Jisoo', position: 'Project Manager', department: 'Management', salary: 1500 },
    { id: 6789, name: 'Hyun', position: 'Business Analyst', department: 'Business', salary: 1200 },
    { id: 7890, name: 'Jiho', position: 'HR Manager', department: 'HR', salary: 1100 },
    { id: 8901, name: 'Soo', position: 'QA Engineer', department: 'IT', salary: 900 },
    { id: 9012, name: 'Nari', position: 'DevOps Engineer', department: 'IT', salary: 1300 },
    { id: 1010, name: 'Kwame', position: 'Software Developer', department: 'IT', salary: 1000 },
    { id: 2020, name: 'Amina', position: 'Project Manager', department: 'Management', salary: 1500 },
    { id: 3030, name: 'Kofi', position: 'Business Analyst', department: 'Business', salary: 1200 },
    { id: 4040, name: 'Zainab', position: 'HR Manager', department: 'HR', salary: 1100 },
    { id: 5050, name: 'Chidi', position: 'QA Engineer', department: 'IT', salary: 900 },
    { id: 6060, name: 'Ngozi', position: 'DevOps Engineer', department: 'IT', salary: 1300 },
    { id: 7070, name: 'Tunde', position: 'Software Developer', department: 'IT', salary: 1000 },
    { id: 8080, name: 'Fatou', position: 'Project Manager', department: 'Management', salary: 1500 },
    { id: 9090, name: 'Baba', position: 'Business Analyst', department: 'Business', salary: 1200 },
    { id: 1122, name: 'Ayo', position: 'HR Manager', department: 'HR', salary: 1100 },
    { id: 2233, name: 'Sade', position: 'QA Engineer', department: 'IT', salary: 900 },
    { id: 3344, name: 'Femi', position: 'DevOps Engineer', department: 'IT', salary: 1300 },
    { id: 4455, name: 'Nia', position: 'Software Developer', department: 'IT', salary: 1000 },
    { id: 5566, name: 'Kehinde', position: 'Project Manager', department: 'Management', salary: 1500 },
    { id: 6677, name: 'Abena', position: 'Business Analyst', department: 'Business', salary: 1200 },
    { id: 7788, name: 'Kwesi', position: 'HR Manager', department: 'HR', salary: 1100 },
    { id: 8899, name: 'Adjoa', position: 'QA Engineer', department: 'IT', salary: 900 },
    { id: 9900, name: 'Obi', position: 'DevOps Engineer', department: 'IT', salary: 1300 }
  ];

  constructor() { }

  getAllEmployees() {
    return this.employees;
  }

  getEmployeeById(id: number) {
    return this.employees.find(employee => employee.id === id);
  }
}
