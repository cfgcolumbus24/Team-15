DROP TABLE IF EXISTS clinician;

-- Create the clinician table
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
    dob VARCHAR(30),
    race VARCHAR(50),
    sex VARCHAR(10),
    gender VARCHAR(10),
    income INT,
    history TEXT,
    clinician_id INT,
    FOREIGN KEY (clinician_id) REFERENCES clinician(id)
);

INSERT INTO clinician (name, address, speciality) VALUES
    ('Randy Moss', '170 Lakeshore Drive, Westwood MA', 'dentist'),
    ('Alice Johnson', '245 Elm St, Boston MA', 'pediatrician'),
    ('Bob Smith', '567 Maple Ave, Springfield MA', 'general practitioner');

INSERT INTO patient (name, age, height, weight, dob, race, sex, gender, income, history, clinician_id) VALUES
    ('John Smith', 45, '5''10"', 180, '10/31/1999', 'Caucasian', 'Male', 'Man' 75000, 'Hypertension, Seasonal allergies', 1),
    ('Maria Garcia', 32, '5''4"', 135, '1/30/1992', 'Hispanic', 'Female', 'Woman' 62000, 'Asthma', 1),

    ('James Johnson', 58, '6''0"', 210, '1/30/1966', 'African American', 'Male', 'Man', 85000, 'Type 2 Diabetes, High cholesterol', 2),
    ('Emily Brown', 37, '5''6"', 145, '5/10/2987' 'Caucasian', 'Female', 'Woman', 68000, 'Anxiety, Migraines', 2),

    ('Sarah Chen', 29, '5''3"', 125, '3/5/1995', 'Asian', 'Female', 'Woman', 70000, 'No significant medical history', 3),
    ('David Wilson', 63, '5''9"', 175, '4/1/1961', 'Caucasian', 'Male', 'Man', 95000, 'Heart disease, Arthritis', 3),
    ('Jennifer Taylor', 44, '5''7"', 155, '2/2/1980', 'African American', 'Female', 'Woman', 72000, 'Fibromyalgia', 3);
