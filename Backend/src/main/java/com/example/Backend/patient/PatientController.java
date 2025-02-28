package com.example.Backend.patient;

import com.example.Backend.Clinician.Clinician;
import com.example.Backend.Clinician.ClinicianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.stream.Collectors;
import java.util.*;

@RestController
@RequestMapping("/api/v1/patients")
@CrossOrigin(origins = "*")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private ClinicianRepository clinicianRepository;

    @GetMapping("/")
    public @ResponseBody String getPatient() {
        return "Hello World!";
    }

    @GetMapping("/all")
    public List<Patient> getAllPatients() {

        List<Patient> patientList = (List<Patient>) patientRepository.findAll();
        patientList.forEach((n) -> {
            n.getDoctors().forEach((i) -> {
                i.setClients(null);
            });
        });
        return patientList;
    }

    @GetMapping("/{name}")
    public Patient getPatientByName(@PathVariable String name) {
        Patient p = patientRepository.findPatientByName(name);
        p.getDoctors().forEach((n) -> {
            n.setClients(null);
        });
        return p;
    }

    @GetMapping("/age/{age}")
    public List<Patient> getPatientsUnderAge(@PathVariable int age) {
        List<Patient> allPatients = (List<Patient>) patientRepository.findAll();
        List<Patient> filteredPatients = allPatients.stream()
                .filter(patient -> patient.getAge() < age)
                .collect(Collectors.toList());

        // Clear circular references
        filteredPatients.forEach(p -> p.getDoctors().forEach(d -> d.setClients(null)));
        return filteredPatients;
    }

    @GetMapping("/race/{race}")
    public List<Patient> getPatientsByRace(@PathVariable String race) {
        List<Patient> allPatients = (List<Patient>) patientRepository.findAll();
        List<Patient> filteredPatients = allPatients.stream()
                .filter(patient -> patient.getRace().equalsIgnoreCase(race))
                .collect(Collectors.toList());

        // Clear circular references
        filteredPatients.forEach(p -> p.getDoctors().forEach(d -> d.setClients(null)));
        return filteredPatients;
    }

    @GetMapping("/dob")
    public List<Map<String, String>> getAllPatientsDOB() {
        List<Patient> allPatients = (List<Patient>) patientRepository.findAll();
        return allPatients.stream()
                .map(patient -> {
                    Map<String, String> dobMap = new HashMap<>();
                    dobMap.put("name", patient.getName());
                    dobMap.put("dob", patient.getDob());
                    return dobMap;
                })
                .collect(Collectors.toList());
    }

    @GetMapping("/clinicians")
    public List<Clinician> getAllClinicians() {
        List<Clinician> clinicians = clinicianRepository.findAll();
        // Clear circular references
        clinicians.forEach(c -> c.getClients().forEach(p -> p.setDoctors(null)));
        return clinicians;
    }

    @GetMapping("/demo/{demographic}")
    public HashMap<String, Double> getPatientDemographics(@PathVariable String demographic) {
        HashMap<String, Double> demographics = new HashMap<>();
        int count = 0;
        if (demographic.equals("age")) {
            demographics.put("<18", 0.0);
            demographics.put("18-25", 0.0);
            demographics.put("26-35", 0.0);
            demographics.put("36-45", 0.0);
            demographics.put("46-60", 0.0);
            demographics.put("60+", 0.0);

            List<Patient> patientList = new ArrayList<>();
            patientRepository.findAll().forEach(patientList::add);
            count = patientList.size();
            patientList.forEach((n) -> {
                int age = n.getAge();
                if (age < 18) {
                    demographics.put("<18", demographics.get("<18") + 1);
                } else if (age <= 25) {
                    demographics.put("18-25", demographics.get("18-25") + 1);
                } else if (age <= 35) {
                    demographics.put("26-35", demographics.get("26-35") + 1);
                } else if (age <= 45) {
                    demographics.put("36-45", demographics.get("36-45") + 1);
                } else if (age <= 60) {
                    demographics.put("46-60", demographics.get("46-60") + 1);
                } else {
                    demographics.put("60+", demographics.get("60+") + 1);
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
        } else if (demographic.equals("income")) {
            List<Patient> patientList = new ArrayList<>();
            patientRepository.findAll().forEach(patientList::add);
            count = patientList.size();
            patientList.forEach((n) -> {
                String ageString = n.getIncome();
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

        return demographics;
    }

}