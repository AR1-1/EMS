package net.java.emsbackend.controller;


import lombok.AllArgsConstructor;
import net.java.emsbackend.dto.EmployeeDto;
import net.java.emsbackend.entity.Employee;
import net.java.emsbackend.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/employee")

public class EmployeeController {

private EmployeeService employeeService;

//build add employee rest api

    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);

    }

    //buid get employee rest api

    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById( @PathVariable("id") Long employeeId){

         EmployeeDto employeeDto = employeeService.getEmployeeById(employeeId);
         return  ResponseEntity.ok(employeeDto);
    }

    //build get all employee rest api

    @GetMapping
    public ResponseEntity<List<EmployeeDto>>getAllEmployees(){
      List<EmployeeDto> employees= employeeService.getAllEmployee();
      return ResponseEntity.ok(employees);
    }


    //build  update rest api
 @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeID, @RequestBody EmployeeDto updatedEmployee){

       EmployeeDto employeeDto = employeeService.updateEmployee(employeeID,updatedEmployee);
        return  ResponseEntity.ok(employeeDto);
    }


    //build delete rest api
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
        employeeService.deleteEmployee(employeeId);
        return  ResponseEntity.ok("Employee deleted Successfully");

    }
}
