package com.example.Backend.patient;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;

    private int age;

    private String height;

    private int weight;

    private double bmi;

    private String race;

    private String sex;

    private int income;

    private String history;

    public Patient() {
        this.name = "";
        this.age = -1;
        this.height = "0'0\"";
        this.weight = -1;
        this.bmi = 0.0;
        this.race = "";
        this.sex = "";
        this.income = 0;
        this.history = "";
    }

    public Patient(String name, int age, String height, int weight, float BMI, String race, String sex, int income, String history) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.bmi = BMI;
        this.race = race;
        this.sex = sex;
        this.income = income;
        this.history = history;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public double getBmi() {
        return bmi;
    }

    public void setBmi(double BMI) {
        this.bmi = BMI;
    }

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public int getIncome() {
        return income;
    }

    public void setIncome(int income) {
        this.income = income;
    }

    public String getHistory() {
        return this.history;
    }

    public void setHistory(String history) {
        this.history = history;
    }

}
