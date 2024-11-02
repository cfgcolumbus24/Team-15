package com.example.Backend.Clinician;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClinicianRepository extends JpaRepository<Clinician, Long> {
    List<Clinician> findByName(String name);
    List<Clinician> findByAddress(String Address);
    List<Clinician> findBySpecialty(String specialty);
}
