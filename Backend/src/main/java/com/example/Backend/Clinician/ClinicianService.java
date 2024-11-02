package com.example.Backend.Clinician;

// import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import java.util.List;
import java.util.ArrayList;
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

    //returns all clinicians
    public List<Clinician> getClinicians() {
        return clinicianRepository.findAll();
    }
    public boolean validateLogin(String firstName, String lastName) {
        Optional<Clinician> clinician = clinicianRepository.findByFirstNameAndLastName(firstName, lastName);
        return clinician.isPresent();
    }

    //Returns a list of all clinicals firt and last name first
    public List<Clinician> getClinicianByName(String name) {
        // This will search in both first name and last name
        List<Clinician> byFirstName = clinicianRepository.findByFirstName(name);
        List<Clinician> byLastName = clinicianRepository.findByLastName(name);

        // Combine the results
        List<Clinician> results = new ArrayList<>();
        results.addAll(byFirstName);
        results.addAll(byLastName);
        return results;
    }

    //Finds cliniciations by speciality
    public List<Clinician> getClinicianBySpecialty(String specialty) {
        return clinicianRepository.findBySpecialty(specialty);
    }

    //finds clinicions by id

    public Clinician getClinicianById(int id) {
        return clinicianRepository.findById(id);
    }
    public Set<Patient> getClinicianPatients(String id) {
        return clinicianRepository.findById(Integer.parseInt(id)).getClients();
    }
}