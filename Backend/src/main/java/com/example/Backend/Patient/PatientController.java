package com.example.Backend.Patient;

import com.example.Backend.Clinician.Clinician;
import com.example.Backend.Clinician.ClinicianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


@RestController
@RequestMapping("/api/patients")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private ClinicianRepository clinicianRepository;

    @GetMapping("/sampleData")
    public @ResponseBody String getPatient() {
        return "Hello World!";
    }
    @GetMapping
    public List<Patient> getAllPatients() {
        return (List<Patient>) patientRepository.findAll();
    }
}
