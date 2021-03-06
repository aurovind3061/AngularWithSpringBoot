import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../list-employees/list-employees.component';
import { EmployeeService } from '../service/data/employee.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  id:number
  employee:Employee
  Gender:any = ['male','female']

  constructor(private employeeService:EmployeeService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    
    this.employee = new Employee(this.id,"","","female",new Date(),"");
    
    if(this.id!=-1) {
      this.employeeService.retrieveEmployee(this.id)
          .subscribe (
            data => this.employee = data
          )
    }
  }

 saveEmployee() {
    if(this.id == -1) { 
      this.employeeService.createEmployee(this.employee)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['employees'])
            }
          )
    } else {
      this.employeeService.updateEmployee(this.id, this.employee)
          .subscribe (
            data => {
              console.log(data)
              this.router.navigate(['employees'])
            }
          )
    }
  }

}
