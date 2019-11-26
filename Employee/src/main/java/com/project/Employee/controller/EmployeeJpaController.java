package com.project.Employee.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.project.Employee.entity.Employee;
import com.project.Employee.repository.EmployeeRepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class EmployeeJpaController {
	

	@Autowired
	private EmployeeRepository employeeRepository;

	
	@GetMapping("/jpa/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}

	@GetMapping("/jpa/employees/{id}")
	public Employee getEmployee(@PathVariable long id){
		return employeeRepository.findById(id).get();
	}

	@DeleteMapping("/jpa/employees/{id}")
	public ResponseEntity<Void> deleteEmployee(@PathVariable long id){
		
		employeeRepository.deleteById(id);
		return ResponseEntity.noContent().build();
		
	}
	
	@PutMapping("/jpa/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(
			@PathVariable long id, @RequestBody Employee employee){
		
		Employee employeeUpdated = employeeRepository.save(employee);
		return new ResponseEntity<Employee>(employee, HttpStatus.OK);
	}
	
	@PostMapping("/jpa/employees")
	public ResponseEntity<Void> createEmployee(@RequestBody Employee employee){
		
		Employee createdEmployee = employeeRepository.save(employee);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdEmployee.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}

}
