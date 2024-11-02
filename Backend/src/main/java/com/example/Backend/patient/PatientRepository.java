package com.example.Backend.patient;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.Backend.Clinician.ClinicianService;

public interface PatientRepository extends CrudRepository<Patient, Integer> {
    Patient findPatientByName(String name);
}
