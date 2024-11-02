package com.example.Backend.MonthlyBudget;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class MonthlyBudget {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String month_name;

    private int budget;

    public MonthlyBudget() {
    }

    public MonthlyBudget(String month, int budget) {
        this.month_name = month;
        this.budget = budget;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMonth() {
        return month_name;
    }

    public void setMonth(String month) {
        this.month_name = month;
    }

    public int getBudget() {
        return budget;
    }

    public void setBudget(int budget) {
        this.budget = budget;
    }
}
