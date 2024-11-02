package com.example.Backend.MonthlyBudget;

import com.example.Backend.patient.Patient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


public interface BudgetRepository extends CrudRepository<MonthlyBudget, Integer> {



}
