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
    income VarChar(20),
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
    ('Michael', 'Brown', '789 Care Lane, Boston MA', 'Pediatrics'),
    ('Linda', 'Wilson', '101 Main St, Boston MA', 'Dermatology'),
    ('Daniel', 'Lee', '102 Broad St, Boston MA', 'Orthopedics'),
    ('James', 'Jones', '103 Oak St, Boston MA', 'General Practice'),
    ('Patricia', 'Garcia', '104 Maple St, Boston MA', 'Geriatrics'),
    ('Robert', 'Martinez', '105 Elm St, Boston MA', 'Psychiatry'),
    ('Jennifer', 'Lopez', '106 Pine St, Boston MA', 'Endocrinology'),
    ('Charles', 'Hernandez', '107 Cedar St, Boston MA', 'Urology'),
    ('Elizabeth', 'Davis', '108 Birch St, Boston MA', 'Ophthalmology'),
    ('Joseph', 'Clark', '109 Spruce St, Boston MA', 'Rheumatology'),
    ('Mary', 'Rodriguez', '110 Ash St, Boston MA', 'Anesthesiology'),
    ('William', 'Lewis', '111 Chestnut St, Boston MA', 'Oncology'),
    ('Nancy', 'Walker', '112 Walnut St, Boston MA', 'Nephrology'),
    ('Richard', 'Hall', '113 Fir St, Boston MA', 'Pathology'),
    ('Barbara', 'Young', '114 Poplar St, Boston MA', 'Palliative Care'),
    ('Michael', 'Allen', '115 Sycamore St, Boston MA', 'Infectious Diseases'),
    ('Karen', 'King', '116 Willow St, Boston MA', 'Emergency Medicine'),
    ('Charles', 'Wright', '117 Alder St, Boston MA', 'Family Medicine');

-- Insert sample patients
INSERT INTO patient
    (name, age, height, weight, race, sex, gender, income, history, dob)
VALUES
    ('John Smith', 45, '5''10"', 180, 'Caucasian', 'Male', 'Male', 'Low', 'Hypertension, Seasonal allergies', '1979-05-15'),
    ('Maria Garcia', 32, '5''4"', 135, 'Hispanic', 'Female', 'Female', 'High', 'Asthma', '1992-08-23'),
    ('James Johnson', 58, '6''0"', 210, 'African American', 'Male', 'Male', 'Lower-Middle', 'Type 2 Diabetes, High cholesterol', '1966-03-10'),
    ('Emily Brown', 37, '5''6"', 145, 'Caucasian', 'Female', 'Female', 'Upper-Middle', 'Anxiety, Migraines', '1987-11-30'),
    ('Sarah Chen', 29, '5''3"', 125, 'Asian', 'Female', 'Female', 'Lower-Middle', 'No significant medical history', '1995-02-18'),
    ('David Wilson', 63, '5''9"', 175, 'Caucasian', 'Male', 'Male', 'Upper-Middle', 'Heart disease, Arthritis', '1961-07-05'),
    ('Jennifer Taylor', 44, '5''7"', 155, 'African American', 'Female', 'Female', 'Lower-Middle', 'Fibromyalgia', '1980-09-12'),
    ('Sam Taylor', 44, '5''7"', 155, 'African American', 'Female', 'Female', 'Lower-Middle', 'Fibromyalgia', '1980-09-12'),
    ('Laura Martinez', 39, '5''5"', 160, 'Hispanic', 'Female', 'Female', 'Upper-Middle', 'Diabetes, High blood pressure', '1985-02-02'),
    ('Anthony Robinson', 50, '5''11"', 190, 'African American', 'Male', 'Male', 'Lower-Middle', 'COPD', '1974-10-19'),
    ('Rebecca White', 26, '5''2"', 120, 'Caucasian', 'Female', 'Female', 'Upper-Middle', 'No significant medical history', '1998-01-30'),
    ('Joshua Harris', 30, '6''1"', 205, 'Hispanic', 'Male', 'Male', 'Middle', 'Asthma', '1994-07-14'),
    ('Olivia Thompson', 22, '5''4"', 130, 'Caucasian', 'Female', 'Female', 'Upper-Middle', 'Anxiety', '2002-05-11'),
    ('Ethan Martinez', 40, '5''8"', 170, 'Hispanic', 'Male', 'Male', 'Lower-Middle', 'Arthritis', '1984-11-16'),
    ('Samantha Garcia', 35, '5''6"', 140, 'Caucasian', 'Female', 'Female', 'Upper-Middle', 'No significant medical history', '1989-03-22'),
    ('Tyler Lewis', 47, '6''0"', 210, 'African American', 'Male', 'Male', 'Middle', 'Heart disease', '1977-08-01'),
    ('Grace Clark', 33, '5''3"', 125, 'Caucasian', 'Female', 'Female', 'Upper-Middle', 'Fibromyalgia', '1991-09-09'),
    ('Aiden Rodriguez', 28, '5''10"', 175, 'Hispanic', 'Male', 'Male', 'Lower-Middle', 'No significant medical history', '1996-12-28'),
    ('Chloe Young', 24, '5''5"', 130, 'Caucasian', 'Female', 'Female', 'Upper-Middle', 'No significant medical history', '2000-06-15'),
    ('Mason Hall', 55, '5''9"', 180, 'African American', 'Male', 'Male', 'Lower-Middle', 'High cholesterol', '1969-02-11');

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
    (3, 7),
    (4, 8),
    (4, 9),
    (5, 10),
    (5, 11),
    (6, 12),
    (6, 13),
    (7, 14),
    (7, 15),
    (8, 16),
    (8, 17),
    (9, 18),
    (9, 19),
    (10, 20);