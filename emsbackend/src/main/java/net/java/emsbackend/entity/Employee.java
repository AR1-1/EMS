package net.java.emsbackend.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="employees")


public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)//auto update primary key
    private Long id;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="address_id",nullable = false)
    private String address;

    @Column(name="salary")
    private double salary;

    @Column(name="age")
    private int age;

    @Column(name="email_id",nullable = false, unique = true)
    private String email;


}
