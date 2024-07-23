package net.java.emsbackend.service;

import lombok.AllArgsConstructor;
import net.java.emsbackend.dto.EmployeeDto;
import net.java.emsbackend.entity.Employee;
import net.java.emsbackend.exception.ResourceNotFoundException;
import net.java.emsbackend.mapper.EmployeeMapper;
import net.java.emsbackend.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor

public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);

        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.maptoEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
      Employee employee =  employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("employee is not exit within given id:"+employeeId));


                 return EmployeeMapper.maptoEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployee() {
       List<Employee> employees = employeeRepository.findAll();
       return employees.stream().map(EmployeeMapper::maptoEmployeeDto)
               .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeID, EmployeeDto updatedEmployee) {
        Employee employee = employeeRepository.findById(employeeID)
                 .orElseThrow(() -> new ResourceNotFoundException("Employee is not exits with given id:"+employeeID));
            employee.setFirstName(updatedEmployee.getFirstName());
            employee.setLastName(updatedEmployee.getLastName());
            employee.setAddress(updatedEmployee.getAddress());
            employee.setSalary(updatedEmployee.getSalary());
            employee.setAge(updatedEmployee.getAge());
            employee.setEmail(updatedEmployee.getEmail());

          //saving using save method in employee
           Employee updatedEmployeeobj = employeeRepository.save(employee);
             return EmployeeMapper.maptoEmployeeDto(updatedEmployeeobj);
    }

    @Override
    public void deleteEmployee(Long employeeID) {

        Employee employee = employeeRepository.findById(employeeID)
                .orElseThrow(() -> new ResourceNotFoundException("Employee is not exits with given id:"+employeeID));

    employeeRepository.deleteById(employeeID);
    }
}
