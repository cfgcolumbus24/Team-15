DROP TABLE IF EXISTS clinician_clients CASCADE;
DROP TABLE IF EXISTS patient CASCADE;
DROP TABLE IF EXISTS clinician CASCADE;
DROP TABLE IF EXISTS monthly_budget;
DROP TABLE IF EXISTS patient_progress CASCADE;
DROP INDEX IF EXISTS first_name_idx;
DROP INDEX IF EXISTS specialty_idx;
DROP INDEX IF EXISTS patient_idx;
DROP INDEX IF EXISTS name_idx;

CREATE TABLE clinician
(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    address VARCHAR(255),
    specialty VARCHAR(100)
);

CREATE INDEX first_name_idx ON clinician (first_name);
CREATE INDEX specialty_idx ON clinician (specialty);

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

CREATE INDEX name_idx on patient (name);

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

CREATE INDEX patient_idx on patient_progress (patient_id);

INSERT INTO patient_progress (patient_id, month, current_month, last_month) VALUES 
    (1, 1, 85.0, 85.0),
    (1, 2, 86.0, 87.5),
    (1, 3, 87.5, 87.5),
    (1, 4, 87.5, 88.5),
    (1, 5, 88.5, 88.0),
    (1, 6, 90.0, 88.0),
    (1, 7, 92.0, 92.0),
    (1, 8, 93.5, 92.0),
    (1, 9, 93.5, 95.0),
    (1, 10, 95.0, 95.0),
    (1, 11, 97.0, 98.0),
    (1, 12, 98.0, 99.5),

    (2, 1, 75.0, 76.0),
    (2, 2, 76.0, 77.5),
    (2, 3, 77.5, 78.0),
    (2, 4, 78.0, 77.0),
    (2, 5, 80.0, 82.0),
    (2, 6, 82.0, 82.0),
    (2, 7, 82.0, 84.0),
    (2, 8, 84.0, 85.0),
    (2, 9, 85.0, 87.0),
    (2, 10, 87.0, 87.5),
    (2, 11, 87.5, 88.0),
    (2, 12, 89.0, 91.0),

    (3, 1, 60.0, 61.0),
    (3, 2, 61.0, 61.0),
    (3, 3, 62.0, 63.5),
    (3, 4, 63.5, 63.5),
    (3, 5, 63.5, 65.0),
    (3, 6, 65.0, 67.0),
    (3, 7, 67.0, 68.0),
    (3, 8, 68.0, 69.5),
    (3, 9, 69.5, 69.5),
    (3, 10, 70.0, 71.5),
    (3, 11, 71.5, 71.5),
    (3, 12, 72.0, 73.5),

    (4, 1, 80.0, 80.0),
    (4, 2, 80.0, 79.0),
    (4, 3, 81.5, 83.0),
    (4, 4, 83.0, 83.0),
    (4, 5, 84.0, 85.5),
    (4, 6, 85.5, 86.5),
    (4, 7, 86.5, 87.0),
    (4, 8, 87.0, 87.0),
    (4, 9, 89.0, 89.0),
    (4, 10, 89.0, 90.5),
    (4, 11, 90.5, 91.0),
    (4, 12, 91.0, 92.5),

    (5, 1, 70.0, 71.0),
    (5, 2, 71.0, 71.0),
    (5, 3, 71.0, 72.5),
    (5, 4, 72.5, 74.0),
    (5, 5, 74.0, 75.5),
    (5, 6, 75.5, 77.0),
    (5, 7, 77.0, 78.0),
    (5, 8, 78.0, 79.5),
    (5, 9, 79.5, 80.0),
    (5, 10, 80.0, 80.0),
    (5, 11, 81.5, 83.0),
    (5, 12, 83.0, 84.5),

    (6, 1, 90.0, 85.6),
    (6, 2, 91.0, 92.5),
    (6, 3, 92.5, 94.0),
    (6, 4, 94.0, 94.0),
    (6, 5, 94.0, 95.5),
    (6, 6, 95.5, 95.5),
    (6, 7, 97.0, 98.5),
    (6, 8, 98.5, 99.5),
    (6, 9, 99.5, 101.0),
    (6, 10, 101.0, 102.0),
    (6, 11, 102.0, 103.5),
    (6, 12, 103.5, 104.5),

    (7, 1, 55.0, 54.0),
    (7, 2, 56.0, 57.0),
    (7, 3, 57.0, 58.5),
    (7, 4, 58.5, 59.0),
    (7, 5, 59.0, 60.0),
    (7, 6, 60.0, 61.5),
    (7, 7, 61.5, 62.5),
    (7, 8, 62.5, 64.0),
    (7, 9, 64.0, 65.0),
    (7, 10, 65.0, 66.5),
    (7, 11, 66.5, 67.0),
    (7, 12, 67.0, 68.5),

    (8, 1, 100.0, 99.0),
    (8, 2, 101.0, 102.5),
    (8, 3, 102.5, 104.0),
    (8, 4, 104.0, 105.0),
    (8, 5, 105.0, 106.5),
    (8, 6, 106.5, 108.0),
    (8, 7, 108.0, 109.5),
    (8, 8, 109.5, 110.0),
    (8, 9, 110.0, 111.5),
    (8, 10, 111.5, 112.5),
    (8, 11, 112.5, 114.0),
    (8, 12, 114.0, 115.5),

    (9, 1, 105.0, 106.0),
    (9, 2, 106.0, 108.0),
    (9, 3, 108.0, 108.0),
    (9, 4, 109.5, 111.0),
    (9, 5, 111.0, 112.0),
    (9, 6, 112.0, 113.5),
    (9, 7, 113.5, 115.0),
    (9, 8, 115.0, 116.5),
    (9, 9, 116.5, 117.5),
    (9, 10, 117.5, 119.0),
    (9, 11, 119.0, 119.0),
    (9, 12, 120.0, 121.5),

    (10, 1, 95.0, 94.5),
    (10, 2, 96.0, 97.5),
    (10, 3, 97.5, 98.5),
    (10, 4, 98.5, 100.0),
    (10, 5, 100.0, 99.0),
    (10, 6, 101.5, 103.0),
    (10, 7, 103.0, 104.5),
    (10, 8, 104.5, 105.5),
    (10, 9, 105.5, 106.5),
    (10, 10, 106.5, 108.0),
    (10, 11, 108.0, 109.0),
    (10, 12, 109.0, 110.5),

    (11, 1, 110.0, 109.5),
    (11, 2, 111.0, 110.0),
    (11, 3, 112.5, 112.5),
    (11, 4, 114.0, 115.5),
    (11, 5, 115.5, 116.0),
    (11, 6, 116.0, 118.0),
    (11, 7, 118.0, 119.5),
    (11, 8, 119.5, 121.0),
    (11, 9, 121.0, 122.5),
    (11, 10, 122.5, 123.5),
    (11, 11, 123.5, 124.0),
    (11, 12, 124.0, 125.5),

    (12, 1, 95.0, 96.5),
    (12, 2, 96.5, 97.0),
    (12, 3, 97.0, 98.5),
    (12, 4, 98.5, 100.0),
    (12, 5, 100.0, 101.0),
    (12, 6, 101.0, 103.0),
    (12, 7, 103.0, 104.5),
    (12, 8, 104.5, 105.5),
    (12, 9, 105.5, 107.0),
    (12, 10, 107.0, 108.5),
    (12, 11, 108.5, 109.0),
    (12, 12, 109.0, 110.5),

    (13, 1, 85.0, 86.5),
    (13, 2, 86.5, 87.5),
    (13, 3, 87.5, 88.5),
    (13, 4, 88.5, 90.0),
    (13, 5, 90.0, 91.0),
    (13, 6, 91.0, 93.0),
    (13, 7, 93.0, 94.5),
    (13, 8, 94.5, 95.0),
    (13, 9, 95.0, 96.5),
    (13, 10, 96.5, 97.5),
    (13, 11, 97.5, 98.5),
    (13, 12, 98.5, 100.0),

    (14, 1, 75.0, 76.0),
    (14, 2, 76.0, 77.0),
    (14, 3, 77.0, 78.5),
    (14, 4, 78.5, 80.0),
    (14, 5, 80.0, 81.5),
    (14, 6, 81.5, 83.0),
    (14, 7, 83.0, 84.0),
    (14, 8, 84.0, 85.5),
    (14, 9, 85.5, 86.0),
    (14, 10, 86.0, 87.5),
    (14, 11, 87.5, 88.5),
    (14, 12, 88.5, 90.0),

    (15, 1, 105.0, 106.0),
    (15, 2, 106.0, 107.0),
    (15, 3, 107.0, 108.5),
    (15, 4, 108.5, 110.0),
    (15, 5, 110.0, 111.5),
    (15, 6, 111.5, 113.0),
    (15, 7, 113.0, 114.5),
    (15, 8, 114.5, 115.5),
    (15, 9, 115.5, 116.5),
    (15, 10, 116.5, 117.5),
    (15, 11, 117.5, 119.0),
    (15, 12, 119.0, 120.5),

    (16, 1, 65.0, 66.0),
    (16, 2, 66.0, 67.5),
    (16, 3, 67.5, 69.0),
    (16, 4, 69.0, 70.0),
    (16, 5, 70.0, 71.5),
    (16, 6, 71.5, 72.5),
    (16, 7, 72.5, 74.0),
    (16, 8, 74.0, 75.5),
    (16, 9, 75.5, 76.5),
    (16, 10, 76.5, 78.0),
    (16, 11, 78.0, 79.0),
    (16, 12, 79.0, 80.5),

    (17, 1, 90.0, 91.5),
    (17, 2, 91.5, 92.5),
    (17, 3, 92.5, 94.0),
    (17, 4, 94.0, 95.5),
    (17, 5, 95.5, 96.5),
    (17, 6, 96.5, 98.0),
    (17, 7, 98.0, 99.5),
    (17, 8, 99.5, 100.5),
    (17, 9, 100.5, 101.5),
    (17, 10, 101.5, 102.5),
    (17, 11, 102.5, 104.0),
    (17, 12, 104.0, 105.5),

    (18, 1, 115.0, 116.0),
    (18, 2, 116.0, 117.5),
    (18, 3, 117.5, 119.0),
    (18, 4, 119.0, 120.0),
    (18, 5, 120.0, 121.5),
    (18, 6, 121.5, 123.0),
    (18, 7, 123.0, 124.5),
    (18, 8, 124.5, 126.0),
    (18, 9, 126.0, 127.0),
    (18, 10, 127.0, 128.5),
    (18, 11, 128.5, 129.5),
    (18, 12, 129.5, 131.0),

    (19, 1, 50.0, 51.5),
    (19, 2, 51.5, 52.5),
    (19, 3, 52.5, 54.0),
    (19, 4, 54.0, 55.5),
    (19, 5, 55.5, 56.5),
    (19, 6, 56.5, 58.0),
    (19, 7, 58.0, 59.5),
    (19, 8, 59.5, 60.5),
    (19, 9, 60.5, 61.5),
    (19, 10, 61.5, 62.5),
    (19, 11, 62.5, 63.5),
    (19, 12, 63.5, 65.0),

    (20, 1, 85.0, 86.5),
    (20, 2, 86.5, 87.5),
    (20, 3, 87.5, 89.0),
    (20, 4, 89.0, 90.5),
    (20, 5, 90.5, 92.0),
    (20, 6, 92.0, 93.5),
    (20, 7, 93.5, 94.5),
    (20, 8, 94.5, 96.0),
    (20, 9, 96.0, 97.5),
    (20, 10, 97.5, 98.5),
    (20, 11, 98.5, 100.0),
    (20, 12, 100.0, 101.5);
    
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

