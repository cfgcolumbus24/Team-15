package com.example.Backend.Patient;

import com.example.Backend.Clinician.ClinicianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


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

    // switches out patient
    @PutMapping("/api/v1/Patients/{id}")
    public Optional<Patient> replacePatient(@RequestBody Patient newPatient, @PathVariable int id){
        return Optional.of(patientRepository.findById(id).map(patient -> {
            patient.setName(newPatient.getName());
            patient.setDob(newPatient.getDob());
            return patientRepository.save(patient);
        }).orElseGet(() -> {
            return patientRepository.save(newPatient);
        }));
    }

}
