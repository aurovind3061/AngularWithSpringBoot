import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employee} from '../../list-employees/list-employees.component'
import { EMPLOYEE_JPA_API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  retrieveAllEmployees() {
    return this.http.get<Employee[]>(`${EMPLOYEE_JPA_API_URL}/employees`);
  }

  deleteEmployee(id){
    return this.http.delete(`${EMPLOYEE_JPA_API_URL}/employees/${id}`);
  }

  retrieveEmployee(id){
    return this.http.get<Employee>(`${EMPLOYEE_JPA_API_URL}/employees/${id}`);
  }

  updateEmployee(id, employee){
    return this.http.put(
          `${EMPLOYEE_JPA_API_URL}/employees/${id}`
                , employee);
  }

  createEmployee(employee){
    return this.http.post(
              `${EMPLOYEE_JPA_API_URL}/employees`
                , employee);
  }
}
