package net.java.emsbackend.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//using dto for rest api class

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class EmployeeDto {

    private Long id;
    private String firstName;
    private String lastName;
    private String address;
    private double salary;
    private int age;
    private String email;
}
