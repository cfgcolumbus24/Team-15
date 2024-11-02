package com.example.Backend.patient;

import jakarta.persistence.*;

@Entity
@Table(name = "patient_progress")
public class PatientProgress {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;

  @ManyToOne
  @JoinColumn(name = "patient_id", nullable = false)
  private Patient patient;

  private int month;

  private double currentMonth;

  private double lastMonth;

  public PatientProgress() {
  }

  public PatientProgress(Patient patient, int month, double currentMonth, double lastMonth) {
    this.patient = patient;
    this.month = month;
    this.currentMonth = currentMonth;
    this.lastMonth = lastMonth;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public Patient getPatient() {
    return patient;
  }

  public void setPatient(Patient patient) {
    this.patient = patient;
  }

  public int getMonth() {
    return month;
  }

  public void setMonth(int month) {
    this.month = month;
  }

  public double getCurrentMonth() {
    return currentMonth;
  }

  public void setCurrentMonth(double currentMonth) {
    this.currentMonth = currentMonth;
  }

  public double getLastMonth() {
    return lastMonth;
  }

  public void setLastMonth(double lastMonth) {
    this.lastMonth = lastMonth;
  }
}
