package com.example.Backend.Clinician;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClinicianRepository extends JpaRepository<Clinician, Long> {
    Optional<Clinician> findByFirstNameAndLastName(String firstName, String lastName);

    List<Clinician> findByFirstName(String firstName);

    List<Clinician> findByLastName(String lastName);

    List<Clinician> findBySpecialty(String specialty);
}