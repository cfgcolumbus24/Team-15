DROP TABLE IF EXISTS clinician_clients;
DROP TABLE IF EXISTS patient;
DROP TABLE IF EXISTS clinician;

CREATE TABLE clinician
(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    address VARCHAR(255),
    specialty VARCHAR(100)
);

CREATE TABLE patient
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    height VARCHAR(10),
    weight INT,
    bmi DECIMAL(3, 1),
    race VARCHAR(50),
    sex VARCHAR(10),
    gender VARCHAR(10),
    income INT,
    history TEXT,
    dob VARCHAR(20)
);

CREATE TABLE clinician_clients
(
    clinician_id INT,
    patient_id INT,
    PRIMARY KEY (clinician_id, patient_id),
    FOREIGN KEY (clinician_id) REFERENCES clinician(id) ON DELETE CASCADE,
    FOREIGN KEY (patient_id) REFERENCES patient(id) ON DELETE CASCADE
);

-- Insert sample clinicians
INSERT INTO clinician
    (first_name, last_name, address, specialty)
VALUES
    ('John', 'Smith', '123 Medical Ave, Boston MA', 'Cardiology'),
    ('Sarah', 'Johnson', '456 Health St, Boston MA', 'Neurology'),
    ('Michael', 'Brown', '789 Care Lane, Boston MA', 'Pediatrics');

-- Insert sample patients
INSERT INTO patient
    (name, age, height, weight, race, sex, gender, income, history, dob)
VALUES
    ('John Smith', 45, '5''10"', 180, 'Caucasian', 'Male', 'Male', 75000, 'Hypertension, Seasonal allergies', '1979-05-15'),
    ('Maria Garcia', 32, '5''4"', 135, 'Hispanic', 'Female', 'Female', 62000, 'Asthma', '1992-08-23'),
    ('James Johnson', 58, '6''0"', 210, 'African American', 'Male', 'Male', 85000, 'Type 2 Diabetes, High cholesterol', '1966-03-10'),
    ('Emily Brown', 37, '5''6"', 145, 'Caucasian', 'Female', 'Female', 68000, 'Anxiety, Migraines', '1987-11-30'),
    ('Sarah Chen', 29, '5''3"', 125, 'Asian', 'Female', 'Female', 70000, 'No significant medical history', '1995-02-18'),
    ('David Wilson', 63, '5''9"', 175, 'Caucasian', 'Male', 'Male', 95000, 'Heart disease, Arthritis', '1961-07-05'),
    ('Jennifer Taylor', 44, '5''7"', 155, 'African American', 'Female', 'Female', 72000, 'Fibromyalgia', '1980-09-12');

-- Create clinician-patient relationships
INSERT INTO clinician_clients
    (clinician_id, patient_id)
VALUES
    (1, 1),
    (1, 2),
    (2, 3),
    (2, 4),
    (3, 5),
    (3, 6),
    (3, 7);