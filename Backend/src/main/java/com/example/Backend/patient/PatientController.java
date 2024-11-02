package com.example.Backend.patient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/api/patient")
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;

    @GetMapping("/")
    public @ResponseBody String getPatient(@RequestParam int id) {
        return "Hello World!";
    }
}
