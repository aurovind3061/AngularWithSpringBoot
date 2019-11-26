import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/data/employee.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


export interface Employee1{
  firstName: string,
  lastName: string,
  gender : string,
  dateOfBirth: Date,
  department:string
}

export class Employee implements Employee1{
  constructor(public id: number,
    public firstName: string,
    public lastName: string,
    public gender : string,
    public dateOfBirth: Date,
    public  department:string){}

}
@Component({
 selector: 'app-list-employees',
 templateUrl: './list-employees.component.html',
 styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {



employees:Employee[];
 message:String
 sortedEmployees : Employee[];
 beforeSorted : Employee[];
  
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'gender','dateOfBirth','department'];
  dataSource = new MatTableDataSource(this.beforeSorted);

 @ViewChild(MatSort, {static: true}) sort: MatSort;


 constructor(private router : Router,private employeeService:EmployeeService){
   //this.sortedEmployees = this.beforeSorted.slice();
 }

 ngOnInit() {
   this.refereshEmployees();
   this.fetchEmployee();
   this.dataSource.sort = this.sort
 }
 refereshEmployees(){
   this.employeeService.retrieveAllEmployees().subscribe(
       response=>{
         //console.log(response);
         this.employees=response;
       }
   )
 }
 fetchEmployee(){
   this.employeeService.retrieveAllEmployees().subscribe(
       response=>{
         console.log(this.beforeSorted);
         //console.log(response)
         this.beforeSorted=response;
       }
   )
 }
 deleteEmployee(id) {
   this.employeeService.deleteEmployee(id).subscribe (
     response => {
       //console.log(response);
       this.message = `Delete of Employee ${id} Successful!`;
       this.refereshEmployees();
     }
   )
 }
 updateEmployee(id) {
   this.router.navigate(['employees',id])
 }
 addEmployee() {
   this.router.navigate(['employees',-1])
 }
}