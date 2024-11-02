package com.example.Backend.Clinician;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/address/{address}")
    public List<Clinician> getClinicianByAddress(@PathVariable String address) {
        return clinicianService.getClinicianByAddress(address);
    }

}
