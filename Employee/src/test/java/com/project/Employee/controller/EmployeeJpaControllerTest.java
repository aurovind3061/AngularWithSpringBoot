package com.project.Employee.controller;

import java.util.Date;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.project.Employee.entity.Employee;
import com.project.Employee.repository.EmployeeRepository;

import junit.framework.Assert;

@RunWith(SpringRunner.class)
@DataJpaTest
public class EmployeeJpaControllerTest {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	public void testCreateEmployee() {
		
		Employee employee = new Employee("Rakesh", "panda","male",new Date(),"sales");
		employeeRepository.save(employee);
		Employee employee1= (Employee) employeeRepository.findAll();
		Assert.assertEquals(employee1.getFirstName(), "Rakesh");
	}

}
