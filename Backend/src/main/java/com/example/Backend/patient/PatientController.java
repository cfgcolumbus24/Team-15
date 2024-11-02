package com.example.Backend.patient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/patients")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @GetMapping("/")
    public @ResponseBody String getPatient(@RequestParam int id) {
        //patientRepository.save(new Patient("John Doe", 10, "5'6\"", 165, 20.1, "Asian", "M", 100,  "None"));
        return "Hello World!";
    }
    @GetMapping
    public List<Patient> getAllPatients() {
        return (List<Patient>) patientRepository.findAll();
    }
}
