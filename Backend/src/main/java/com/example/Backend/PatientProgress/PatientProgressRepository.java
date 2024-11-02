package com.example.Backend.PatientProgress;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientProgressRepository extends JpaRepository<PatientProgress, Long> {
  // The findAll() method is automatically provided by JpaRepository
}
