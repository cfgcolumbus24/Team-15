package com.example.Backend.PatientProgress;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import java.util.List;
import java.util.ArrayList;
import com.example.Backend.PatientProgress.PatientProgressRepository;
import java.util.Set;

@Service
public class PatientProgressService {

    private final PatientProgressRepository patientProgressRepository;
    private static final Logger logger = LoggerFactory.getLogger(PatientProgressService.class);

    @Autowired
    public PatientProgressService(PatientProgressRepository patientProgressRepository) {
        this.patientProgressRepository = patientProgressRepository;
    }

    public List<PatientProgress> findAll() {
        try {
            return patientProgressRepository.findAll();
        } catch (Exception e) {
            logger.error("Error retrieving progress data", e);
            throw new RuntimeException("Failed to retrieve progress data", e);
        }
    }
}