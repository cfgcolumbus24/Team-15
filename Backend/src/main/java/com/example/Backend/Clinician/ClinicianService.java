package com.example.Backend.Clinician;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClinicianService {

    private final ClinicianRepository clinicianRepository;

    @Autowired
    public ClinicianService(ClinicianRepository clinicianRepository) {
        this.clinicianRepository = clinicianRepository;
    }

    public List<Clinician> getClinicians() {
        return clinicianRepository.findAll();
    }

    public List<Clinician> getClinicianByName(String name) {
        return clinicianRepository.findByName(name);
    }

    public List<Clinician> getClinicianBySpecialty(String specialty) {
        return clinicianRepository.findBySpecialty(specialty);
    }

    public List<Clinician> getClinicianByAddress(String Address){
        return clinicianRepository.findByAddress(Address);
    }
}
