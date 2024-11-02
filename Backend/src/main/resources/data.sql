DROP TABLE IF EXISTS clinician;
CREATE TABLE clinician (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    address VARCHAR(255),
    speciality VARCHAR(100)
);

DROP TABLE IF EXISTS patient
CREATE TABLE patient (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    height VARCHAR(10),
    weight INT,
    bmi DECIMAL(3, 1),
    race VARCHAR(50),
    sex VARCHAR(10),
    income INT,
    history TEXT,
    clinician_id INT,
    FOREIGN KEY (clinician_id) REFERENCES clinician(id)
);

INSERT INTO patient
    (name, age, height, weight, bmi, race, sex, income, history, clinician_id)
VALUES
    ('John Smith', 45, '5''10"', 180, 25.8, 'Caucasian', 'Male', 75000, 'Hypertension, Seasonal allergies', 1),
    ('Maria Garcia', 32, '5''4"', 135, 23.2, 'Hispanic', 'Female', 62000, 'Asthma', 1),

    -- Patients for Alice Johnson (clinician_id = 2)
    ('James Johnson', 58, '6''0"', 210, 28.5, 'African American', 'Male', 85000, 'Type 2 Diabetes, High cholesterol', 2),
    ('Emily Brown', 37, '5''6"', 145, 23.4, 'Caucasian', 'Female', 68000, 'Anxiety, Migraines', 2),

    -- Patients for Bob Smith (clinician_id = 3)
    ('Sarah Chen', 29, '5''3"', 125, 22.1, 'Asian', 'Female', 70000, 'No significant medical history', 3),
    ('David Wilson', 63, '5''9"', 175, 25.8, 'Caucasian', 'Male', 95000, 'Heart disease, Arthritis', 3),
    ('Jennifer Taylor', 44, '5''7"', 155, 24.3, 'African American', 'Female', 72000, 'Fibromyalgia', 3);

INSERT into clinician
    (name, address, speciality)
VALUES
    ('Randy Moss', '170 Lakeshore Drive, Westwood MA', 'dentist'),
    ('Alice Johnson', '245 Elm St, Boston MA', 'pediatrician'),
    ('Bob Smith', '567 Maple Ave, Springfield MA', 'general practitioner');