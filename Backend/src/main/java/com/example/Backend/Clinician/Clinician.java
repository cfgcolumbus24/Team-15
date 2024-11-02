package com.example.Backend.Clinician;
import com.example.Backend.patient.Patient;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

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

    public Clinician(String name, String address, String specialty) {
        this.name = name;
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

    public Set<Patient> getClients() {
        return clients;
    }

    public void setClients(Set<Patient> clients) {
        this.clients = clients;
    }
}