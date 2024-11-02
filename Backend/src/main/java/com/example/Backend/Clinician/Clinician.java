package com.example.Backend.Clinician;
import com.example.Backend.patient.Patient;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
import jakarta.persistence.*;

import java.util.HashSet;

import java.util.Set;

@Component
@ConfigurationProperties(prefix = "clinician")
@Entity

//Clinican client aka doctor in non profit
public class Clinician {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String firstName;
    private String lastName;
    private String address;
    private String specialty;

    @ManyToMany
    @JoinTable(
            name="clinician_clients",
            joinColumns = @JoinColumn(name="clinician_id"),
            inverseJoinColumns = @JoinColumn(name="patient_id")
    )
    private Set<Patient> clients;

    // Default constructor
    public Clinician() {
    }

    //constructor
    public Clinician(String firstName, String lastName, String address, String specialty) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.specialty = specialty;
        this.clients = new HashSet<>();
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // Add getters and setters for firstName and lastName
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getSpecialty() {
        return specialty;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }

    public Set<Patient> getClients() {
        return clients;
    }

    public void setClients(Set<Patient> clients) {
        this.clients = clients;
    }
}