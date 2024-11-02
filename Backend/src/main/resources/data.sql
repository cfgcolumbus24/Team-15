DROP TABLE IF EXISTS clinician_clients CASCADE;
DROP TABLE IF EXISTS patient CASCADE;
DROP TABLE IF EXISTS clinician CASCADE;
DROP TABLE IF EXISTS monthly_budget;
DROP TABLE IF EXISTS patient_progress CASCADE;


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

CREATE TABLE monthly_budget
(
   id SERIAL PRIMARY KEY,
   month_name VARCHAR(10),
   budget INT
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
    ('Leon', 'Kennedy', '117 Alder St, Boston MA', 'Family Medicine');

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

    
CREATE TABLE patient_progress (
    id SERIAL PRIMARY KEY,
    patient_id INT,
    month INT,
    current_month DECIMAL(5, 2),
    last_month DECIMAL(5, 2),
    FOREIGN KEY (patient_id) REFERENCES patient(id) 
);

INSERT INTO patient_progress (patient_id, month, current_month, last_month) VALUES 
    (1, 1, 85.0, 80.0),
    (1, 2, 85.0, 85.0),
    (1, 3, 87.0, 88.5),
    (1, 4, 90.0, 88.5),
    (1, 5, 92.0, 90.0),
    (1, 6, 93.5, 92.0),
    (1, 7, 95.0, 93.5),
    (1, 8, 96.0, 95.0),
    (1, 9, 96.5, 96.0),
    (1, 10, 97.0, 98.0),
    (1, 11, 99.0, 98.0),
    (1, 12, 100.0, 99.0),

    (2, 1, 75.0, 70.0),
    (2, 2, 76.5, 75.0),
    (2, 3, 76.5, 78.0),
    (2, 4, 80.0, 78.0),
    (2, 5, 82.0, 80.0),
    (2, 6, 83.5, 82.0),
    (2, 7, 85.0, 85.0),
    (2, 8, 86.0, 85.0),
    (2, 9, 87.5, 86.0),
    (2, 10, 88.0, 88.0),
    (2, 11, 89.0, 88.0),
    (2, 12, 90.0, 89.0),

    (3, 1, 60.0, 55.0),
    (3, 2, 62.0, 60.0),
    (3, 3, 64.0, 62.0),
    (3, 4, 66.0, 64.0),
    (3, 5, 67.0, 68.0),
    (3, 6, 69.0, 69.5),
    (3, 7, 70.0, 69.5),
    (3, 8, 71.0, 70.0),
    (3, 9, 72.0, 71.0),
    (3, 10, 73.0, 72.0),
    (3, 11, 74.0, 73.0),
    (3, 12, 75.0, 74.0),

    (4, 1, 80.0, 75.0),
    (4, 2, 81.0, 80.0),
    (4, 3, 82.5, 81.0),
    (4, 4, 84.0, 82.5),
    (4, 5, 85.0, 84.0),
    (4, 6, 86.5, 86.5),
    (4, 7, 87.0, 88.0),
    (4, 8, 88.0, 87.0),
    (4, 9, 89.0, 88.0),
    (4, 10, 90.0, 89.0),
    (4, 11, 91.0, 90.0),
    (4, 12, 92.0, 91.0),

    (5, 1, 70.0, 65.0),
    (5, 2, 72.0, 70.0),
    (5, 3, 74.0, 72.0),
    (5, 4, 75.0, 74.0),
    (5, 5, 77.0, 75.0),
    (5, 6, 79.0, 77.0),
    (5, 7, 80.0, 79.0),
    (5, 8, 81.0, 80.0),
    (5, 9, 82.5, 81.0),
    (5, 10, 83.0, 82.5),
    (5, 11, 84.0, 83.0),
    (5, 12, 85.0, 84.0),

    (6, 1, 90.0, 85.0),
    (6, 2, 92.0, 90.0),
    (6, 3, 93.5, 92.0),
    (6, 4, 95.0, 93.5),
    (6, 5, 96.0, 95.0),
    (6, 6, 97.0, 96.0),
    (6, 7, 98.0, 97.0),
    (6, 8, 99.0, 98.0),
    (6, 9, 100.0, 99.0),
    (6, 10, 101.0, 100.0),
    (6, 11, 102.0, 101.0),
    (6, 12, 103.0, 102.0),

    (7, 1, 55.0, 50.0),
    (7, 2, 57.0, 55.0),
    (7, 3, 58.0, 57.0),
    (7, 4, 60.0, 58.0),
    (7, 5, 62.0, 60.0),
    (7, 6, 63.0, 62.0),
    (7, 7, 65.0, 63.0),
    (7, 8, 67.0, 65.0),
    (7, 9, 68.0, 67.0),
    (7, 10, 70.0, 68.0),
    (7, 11, 71.0, 70.0),
    (7, 12, 73.0, 71.0);
INSERT INTO monthly_budget
    (month_name, budget)
VALUES
    ('January', 10000),
    ('February', 20000),
    ('March', 23500),
    ('April', 17650),
    ('May', 14305),
    ('June', 17500),
    ('July', 14300),
    ('August', 12980),
    ('September', 22000),
    ('October', 8000),
    ('November', 17000),
    ('December', 18000);

