package com.example.Backend.MonthlyBudget;


import com.example.Backend.patient.Patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/budgets")
@CrossOrigin(origins = "*")
public class BudgetController {

    @Autowired
    private BudgetRepository budgetRepository;

    @GetMapping("/all")
    public List<MonthlyBudget> getAll() {

        List<MonthlyBudget> budgetList = (List<MonthlyBudget>) budgetRepository.findAll();
        return budgetList;
    }
}
