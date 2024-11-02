package com.example.Backend.patient;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Backend.patient.PatientProgress;

import com.example.Backend.Clinician.ClinicianService;

public interface PatientProgressRepository extends JpaRepository<PatientProgress, Integer> {
  List<PatientProgress> findAll();
}
