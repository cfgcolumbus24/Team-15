package com.example.Backend.PatientProgress;

import com.example.Backend.patient.Patient;

import jakarta.persistence.*;

@Entity
@Table(name = "patient_progress")
public class PatientProgress {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "patient_id")
  private Integer patientId;

  @Column(name = "month")
  private Integer month;

  @Column(name = "current_month")
  private Double currentMonth;

  @Column(name = "last_month")
  private Double lastMonth;

  public PatientProgress() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Integer getPatientId() {
    return patientId;
  }

  public void setPatientId(Integer patientId) {
    this.patientId = patientId;
  }

  public Integer getMonth() {
    return month;
  }

  public void setMonth(Integer month) {
    this.month = month;
  }

  public Double getCurrentMonth() {
    return currentMonth;
  }

  public void setCurrentMonth(Double currentMonth) {
    this.currentMonth = currentMonth;
  }

  public Double getLastMonth() {
    return lastMonth;
  }

  public void setLastMonth(Double lastMonth) {
    this.lastMonth = lastMonth;
  }
}
