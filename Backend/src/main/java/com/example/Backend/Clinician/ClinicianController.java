package com.example.Backend.Clinician;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.Backend.patient.Patient;

import com.example.Backend.LoginRequest;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(path = "api/v1/clinician")
public class ClinicianController {

    private final ClinicianService clinicianService;

    @Autowired
    public ClinicianController(ClinicianService clinicianService) {
        this.clinicianService = clinicianService;
    }

    @GetMapping
    public List<Clinician> getClinicians() {
        return clinicianService.getClinicians();
    }

    @GetMapping("/name/{name}")
    public List<Clinician> getClinicianByName(@PathVariable String name) {
        return clinicianService.getClinicianByName(name);
    }

    @GetMapping("/specialty/{specialty}")
    public List<Clinician> getClinicianBySpecialty(@PathVariable String specialty) {
        return clinicianService.getClinicianBySpecialty(specialty);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        boolean isValid = clinicianService.validateLogin(
                loginRequest.getFirstName(),
                loginRequest.getLastName());

        if (isValid) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @GetMapping("/getClinicianPatients/{id}")
    public Set<Patient> getClinicianPatients(@PathVariable String id) {
        return clinicianService.getClinicianPatients(id);
    }

}