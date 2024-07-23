package net.java.emsbackend.mapper;

import net.java.emsbackend.dto.EmployeeDto;
import net.java.emsbackend.entity.Employee;

public class EmployeeMapper {

    //map empployee jpa entity into employeedto
    public static EmployeeDto maptoEmployeeDto(Employee employee) {
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getAddress(),
                employee.getSalary(),
                employee.getAge(),
                employee.getEmail()
        );
    }

//map employeedto into employee jpa entity

    public static Employee mapToEmployee(EmployeeDto employeeDto) {
     return new Employee(

             employeeDto.getId(),
             employeeDto.getFirstName(),
             employeeDto.getLastName(),
             employeeDto.getAddress(),
             employeeDto.getSalary(),
             employeeDto.getAge(),
             employeeDto.getEmail()
     );

    }


}