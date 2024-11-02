DROP TABLE IF EXISTS clinician;

CREATE TABLE clinician (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    address VARCHAR(255),
    speciality VARCHAR(100)
);

DROP TABLE IF EXISTS patient;

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
);

DROP TABLE IF EXISTS clinician_clients;

CREATE TABLE clinician_clients (
    clinician_id INT, 
    client_id INT, 
    PRIMARY KEY (clinician_id, patient_id), 
    FOREIGN KEY (clinician_id) REFERENCES clinician(id) ON DELETE CASCADE,
    FOREIGN KEY (patient_id) REFERENCES patient(id) ON DELETE CASCADE
)

INSERT INTO clinician (name, address, speciality) VALUES
    ('Randy Moss', '170 Lakeshore Drive, Westwood MA', 'dentist'),
    ('Alice Johnson', '245 Elm St, Boston MA', 'pediatrician'),
    ('Bob Smith', '567 Maple Ave, Springfield MA', 'general practitioner');

INSERT INTO patient (name, age, height, weight, race, sex, gender, income, history, clinician_id) VALUES
    ('John Smith', 45, '5''10"', 180, 'Caucasian', 'Male', 'Male', 75000, 'Hypertension, Seasonal allergies'),
    ('Maria Garcia', 32, '5''4"', 135, 'Hispanic', 'Female', 'Female', 62000, 'Asthma'),

    ('James Johnson', 58, '6''0"', 210, 'African American', 'Male', 'Male', 85000, 'Type 2 Diabetes, High cholesterol'),
    ('Emily Brown', 37, '5''6"', 145, 'Caucasian', 'Female','Female',  68000, 'Anxiety, Migraines'),

    ('Sarah Chen', 29, '5''3"', 125, 'Asian', 'Female', 'Female', 70000, 'No significant medical history'),
    ('David Wilson', 63, '5''9"', 175, 'Caucasian', 'Male', 'Male', 95000, 'Heart disease, Arthritis'),
    ('Jennifer Taylor', 44, '5''7"', 155, 'African American', 'Female', 'Female', 72000, 'Fibromyalgia');

INSERT INTO clinician_clients (clinician_id, client_id) VALUES 
    (1, 1), 
    (1, 2), 
    (2, 3), 
    (2, 4), 
    (3, 5), 
    (3, 6), 
    (3, 7)
