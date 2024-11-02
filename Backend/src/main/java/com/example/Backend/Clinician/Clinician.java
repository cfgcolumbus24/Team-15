package com.example.Backend.Clinician;

import com.example.Backend.Patient.Patient;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
import jakarta.persistence.*;
import java.util.List;

@Component
@ConfigurationProperties(prefix = "clinician")
@Entity
public class Clinician {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String address;
    private String specialty;

    @OneToMany
    private List<Patient> clients;

    // Default constructor
    public Clinician() {
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public List<Patient> getClients() {
        return clients;
    }

    public void setClients(List<Patient> clients) {
        this.clients = clients;
    }
}
