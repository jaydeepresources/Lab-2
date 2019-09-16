import { Employee } from './../model/Employee';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  newEmployee: Employee
  updatedEmployee: Employee
  employees: Employee[]
  updatedIndex: number
  alertMsg:string

  constructor() {
    this.alertMsg = ''
    this.newEmployee = this.initEmployee()
    this.updatedEmployee = this.initEmployee()
    this.employees = [
      { id: 1001, name: "Rahul", salary: 9000, department: "Java" },
      { id: 1002, name: "Sachin", salary: 19000, department: "OraApps" },
      { id: 1003, name: "Vikash", salary: 29000, department: "BI" },
    ]
  }

  initEmployee() {
    return {
      id: undefined,
      name: '',
      salary: undefined,
      department: ''
    }
  }

  addEmployee() {
    this.employees.push(this.newEmployee)
    this.newEmployee = this.initEmployee()
    this.alertMsg = 'Employee Added'
  }

  deleteEmployee(i) {
    this.employees.splice(i, 1)
    this.alertMsg = 'Employee Deleted' 
  }

  updateClicked(i) {
    this.updatedIndex = i
    this.updatedEmployee = JSON.parse(JSON.stringify(this.employees[i]))
  }

  updateEmployee() {
    this.employees[this.updatedIndex] = JSON.parse(JSON.stringify(this.updatedEmployee))
    this.updatedEmployee = this.initEmployee()    
    this.alertMsg = 'Employee Updated'
  }

}