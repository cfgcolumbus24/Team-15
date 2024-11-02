package com.example.Backend.patient;

import com.example.Backend.Clinician.Clinician;
import com.example.Backend.Clinician.ClinicianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;


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
        Clinician c = new Clinician("Jane Doe", "1111 Polaris Pkway, Columbus OH", "Optometry", null);
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

        List<Patient> patientList = (List<Patient>) patientRepository.findAll();
        patientList.forEach((n) -> {n.getDoctors().forEach((i) -> {i.setClients(null);});});
        return patientList;
    }

    @GetMapping("/{name}")
    public Patient getPatientByName(@PathVariable String name) {
        Patient p = patientRepository.findPatientByName(name);
        p.getDoctors().forEach((n) -> {n.setClients(null);});
        return p;
    }

    @GetMapping("/demo/{demographic}")
    public HashMap<String, Double> getPatientDemographics(@PathVariable String demographic) {
        HashMap<String, Double> demographics = new HashMap<>();
        int count = 0;
        if (demographic.equals("age")) {
            List<Patient> patientList = new ArrayList<>();
            patientRepository.findAll().forEach(patientList::add);
            count = patientList.size();
            patientList.forEach((n) -> {
                String ageString = String.valueOf(n.getAge());
                if (!demographics.containsKey(ageString)) {
                    demographics.put(ageString, 1.0);
                } else {
                    demographics.put(ageString, demographics.get(ageString) + 1);
                }
            });
        } else if (demographic.equals("race")) {
            List<Patient> patientList = new ArrayList<>();
            patientRepository.findAll().forEach(patientList::add);
            count = patientList.size();
            patientList.forEach((n) -> {
                String ageString = n.getRace();
                if (!demographics.containsKey(ageString)) {
                    demographics.put(ageString, 1.0);
                } else {
                    demographics.put(ageString, demographics.get(ageString) + 1);
                }
            });
        } else if (demographic.equals("gender")) {
            List<Patient> patientList = new ArrayList<>();
            patientRepository.findAll().forEach(patientList::add);
            count = patientList.size();
            patientList.forEach((n) -> {
                String ageString = n.getGender();
                if (!demographics.containsKey(ageString)) {
                    demographics.put(ageString, 1.0);
                } else {
                    demographics.put(ageString, demographics.get(ageString) + 1);
                }
            });
        } else if (demographic.equals("weight")) {
            List<Patient> patientList = new ArrayList<>();
            patientRepository.findAll().forEach(patientList::add);
            count = patientList.size();
            patientList.forEach((n) -> {
                String ageString = String.valueOf(n.getWeight());
                if (!demographics.containsKey(ageString)) {
                    demographics.put(ageString, 1.0);
                } else {
                    demographics.put(ageString, demographics.get(ageString) + 1);
                }
            });
        } else {
            List<Patient> patientList = new ArrayList<>();
            patientRepository.findAll().forEach(patientList::add);
            count = patientList.size();
            patientList.forEach((n) -> {
                String ageString = n.getSex();
                if (!demographics.containsKey(ageString)) {
                    demographics.put(ageString, 1.0);
                } else {
                    demographics.put(ageString, demographics.get(ageString) + 1);
                }
            });
        }

        for (String key : demographics.keySet()) {
            demographics.put(key, demographics.get(key) / count);
        }
        return demographics;
    }


}
