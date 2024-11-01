package com.example.Backend.Cliniation;

import com.example.Backend.patient.Patient;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
import java.util.List;
import jakarta.persistence.*;


@Component
@ConfigurationProperties(prefix = "clination")
public class Clination {
    @Id

    private Long id;

    private String name;
    private String address;
    private String speciality;
    private List<Patient> clients;


    // Constructor

    public Clination() {
    }

    // Getters and Setters
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

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    public List<Patient> getClients() {
        return clients;
    }

    public void setClients(List<Patient> clients) {
        this.clients = clients;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
