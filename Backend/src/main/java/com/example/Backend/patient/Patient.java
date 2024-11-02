package com.example.Backend.patient;

import com.example.Backend.Clinician.Clinician;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "patient")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;

    private int age;

    private String height;

    private int weight;

    private String dob;

    private String race;

    private String sex;

    private String income;

    private String history;

    private String gender;


    @ManyToMany(mappedBy = "clients")
    private Set<Clinician> doctors;

    public Patient() {
    }

    public Patient(String name, int age, String height, int weight, String dob, String race, String sex, String income, String history, String gender) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.dob = dob;
        this.race = race;
        this.sex = sex;
        this.income = income;
        this.history = history;
        this.gender = gender;
        this.doctors = new HashSet<>();
    }

    public String getName() {
        return name;
    }

    public Set<Clinician> getDoctors() {
        return doctors;
    }

    public void setDoctors(Set<Clinician> doctors) {
        this.doctors = doctors;
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

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
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

    public String getIncome() {
        return income;
    }

    public void setIncome(String income) {
        this.income = income;
    }

    public String getHistory() {
        return history;
    }

    public void setHistory(String history) {
        this.history = history;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

}
