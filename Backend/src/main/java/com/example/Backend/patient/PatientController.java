package com.example.Backend.patient;

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
        Patient p = new Patient("John Doe", 24, "5'6\"", 165, "10/5/2000", "Asian", "Male", 100, "None",  "Man");
        Clinician c = new Clinician("Jane Doe", "1111 Polaris Pkway, Columbus OH", "Optometry");
        Set<Clinician> doctors = p.getDoctors();
        doctors.add(c);
        p.setDoctors(doctors);
        Set<Patient> patients = c.getClients();
        patients.add(p);
        c.setClients(patients);
        patientRepository.save(p);
        clinicianRepository.save(c);
        return "Hello World!";
    }
    @GetMapping("/all")
    public List<Patient> getAllPatients() {
        return (List<Patient>) patientRepository.findAll();
    }

    @GetMapping("/{name}")
    public Patient getPatientByName(@PathVariable String name) {
        return patientRepository.findPatientByName(name);
    }
}
