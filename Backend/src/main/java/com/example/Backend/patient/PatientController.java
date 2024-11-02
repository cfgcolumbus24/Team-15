package com.example.Backend.patient;

import com.example.Backend.Clinician.Clinician;
import com.example.Backend.Clinician.ClinicianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
        patientList.forEach((n) -> {n.getDoctors().forEach((i) -> {i.setClients(null);});});
        return patientList;
    }

    @GetMapping("/{name}")
    public Patient getPatientByName(@PathVariable String name) {
        Patient p = patientRepository.findPatientByName(name);
        p.getDoctors().forEach((n) -> {n.setClients(null);});
        return p;
    }

    @GetMapping("/demo")
    public HashMap<String, HashMap<String, Double>> getPatientDemographics() {
        HashMap<String, Double> demographics = new HashMap<>();
        HashMap<String, Double> genderDemographics = new HashMap<>();
        HashMap<String, Double> weightDemographics = new HashMap<>();
        HashMap<String, Double> incomeDemographics = new HashMap<>();
        HashMap<String, Double> raceDemographics = new HashMap<>();

        int count = 0;
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
            patientList.forEach((n) -> {
                String ageString = n.getRace();
                if (!raceDemographics.containsKey(ageString)) {
                    raceDemographics.put(ageString, 1.0);
                } else {
                    raceDemographics.put(ageString, raceDemographics.get(ageString) + 1);
                }
            });

            patientList.forEach((n) -> {
                String ageString = n.getGender();
                if (!genderDemographics.containsKey(ageString)) {
                    genderDemographics.put(ageString, 1.0);
                } else {
                    genderDemographics.put(ageString, genderDemographics.get(ageString) + 1);
                }
            });
            patientList.forEach((n) -> {
                String ageString = String.valueOf(n.getWeight());
                if (!weightDemographics.containsKey(ageString)) {
                    weightDemographics.put(ageString, 1.0);
                } else {
                    weightDemographics.put(ageString, weightDemographics.get(ageString) + 1);
                }
            });
            patientList.forEach((n) -> {
                String ageString = n.getIncome();
                if (!incomeDemographics.containsKey(ageString)) {
                    incomeDemographics.put(ageString, 1.0);
                } else {
                    incomeDemographics.put(ageString, incomeDemographics.get(ageString) + 1);
                }
            });
        for (String key : demographics.keySet()) {
            demographics.put(key, demographics.get(key) / count);
        }
        for (String key : weightDemographics.keySet()) {
            weightDemographics.put(key, weightDemographics.get(key) / count);
        }
        for (String key : raceDemographics.keySet()) {
            raceDemographics.put(key, raceDemographics.get(key) / count);
        }
        for (String key : genderDemographics.keySet()) {
            genderDemographics.put(key, genderDemographics.get(key) / count);
        }
        HashMap<String, HashMap<String, Double>> allDemographics = new HashMap<>();
        allDemographics.put("age", demographics);
        allDemographics.put("weight", weightDemographics);
        allDemographics.put("race", raceDemographics);
        allDemographics.put("gender", genderDemographics);

        return allDemographics;
    }


}
