package com.example.Backend.Clinician;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Backend.patient.Patient;
import com.example.Backend.patient.PatientRepository;

import java.util.List;
import java.util.Set;

@Service
public class ClinicianService {

    private final ClinicianRepository clinicianRepository;

    @Autowired
    public ClinicianService(ClinicianRepository clinicianRepository, PatientRepository patientRepository) {
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

    public Set<Patient> getClinicianPatients(String id) {
        return clinicianRepository.findById(Integer.parseInt(id)).getClients();
    }
}