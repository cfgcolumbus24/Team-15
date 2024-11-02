package com.example.Backend.PatientProgress;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.Backend.Clinician.Clinician;
import com.example.Backend.Clinician.ClinicianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.stream.Collectors;
import java.util.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/progress")
@CrossOrigin(origins = "*")
public class PatientProgressController {

  @Autowired
  private PatientProgressService patientProgressService;

  @Autowired
  public PatientProgressController(PatientProgressService patientProgressService) {
    this.patientProgressService = patientProgressService;
  }

  @GetMapping("/all")
  public HashMap<Integer, int[]> getProgress() {
    HashMap<Integer, int[]> counts = new HashMap<>();
    for (int i = 1; i < 13; i++) {
      counts.put(i, new int[3]);
    }

    List<PatientProgress> patientList = (List<PatientProgress>) patientProgressService.findAll();

    for (PatientProgress p : patientList) {
      int key = p.getMonth();
      double lastMonth = p.getLastMonth();
      double thisMonth = p.getCurrentMonth();

      int[] oldArr = counts.get(key);

      if (thisMonth > lastMonth) {
        oldArr[0]++;
      } else if (lastMonth > thisMonth) {
        oldArr[1]++;
      } else {
        oldArr[2]++;
      }
    }

    return counts;
  }
}
