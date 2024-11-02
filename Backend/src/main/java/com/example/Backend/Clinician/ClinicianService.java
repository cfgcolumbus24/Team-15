package com.example.Backend.Clinician;

// import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import java.util.List;
import java.util.ArrayList;

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
    public boolean validateLogin(String firstName, String lastName) {
        Optional<Clinician> clinician = clinicianRepository.findByFirstNameAndLastName(firstName, lastName);
        return clinician.isPresent();
    }

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
    public List<Clinician> getClinicianBySpecialty(String specialty) {
        return clinicianRepository.findBySpecialty(specialty);
    }
}