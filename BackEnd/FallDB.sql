DROP DATABASE IF EXISTS FallAppDB;
CREATE DATABASE  FallAppDB;
USE FallAppDB;

DROP TABLE IF EXISTS patient; 
CREATE TABLE patient(
   patientid	integer not null auto_increment,
   name			varchar(45),
   bloodtype	varchar(3),
   sex			varchar(2),
   phn			integer,
   diagnosis	varchar(100),
   weight		int,
   dob          date,
   PRIMARY KEY (patientid)
);
INSERT INTO patient(name, bloodtype, sex, phn, diagnosis, weight,dob)
VALUES
('Ada Elsher', 'A+', 'F', '41343828', 'ALS, Pancreatic Cancer, Pneumonia', '147.70954',"1949-11-2"),
('Ellie Fredricksens', 'O-', 'F', '55290955', 'Fibromyalgia, Osteoporosis, ALS', '110.231',"1950-8-1"),
('Otto Marley', 'O-', 'M', '36735847', 'Arrhythmia of the Heart, Leukemia, IBD', '114.64024',"1960-10-2"),
('Dora St. James', 'A+', 'F', '43613479', 'Cataracts, Lupus, IBS', '130.07258',"1949-9-10"),
('Theodore Madison', 'A+', 'M', '34655077', 'Hepatitis, Obstructive Sleep Apnea, Rheumatoid Arthritis', '108.02638',"1944-10-10"),
('Carl Fredricksens', 'AB+', 'M', '82294439', 'Arthritis, Dry Macular Degeneration, PTSD', '110.231','1945-9-9'),
('Beatrice Thatcher', 'O+', 'F', '24294589', 'Chronic Kidney Failure, MS, IBS', '141.09568','1939-1-5'),
('Victor Jenkins', 'B+', 'M', '17392815', 'COPD, Hypothyroidism, Parkinsons Disease', '138.89106','1951-2-5'),
('Silas Hope', 'AB+', 'M', '77884403', 'Glaucoma, Incontinence, Urinary, Staph Infections', '130.07258','1960-2-5'),
('Emily West', 'A-', 'F', '75202717', 'Cholesterol, Hyperthyroidism, Wrinkles', '145.50492','1942-11-12');
-- ('Arthur Langley', 'B-', 'M', '10701730', 'Atrial Fibrillation, Osteoarthritis, Periodontitis', '160.93726','1949-8-8'),
-- ('Dorothy Hansley', 'B+', 'F', '35842333', 'Alzheimers Disease, Chronic Kidney Failure, Thrush, Oral', '156.52802','1955-9-1'),
-- ('Amelia Solace', 'AB-', 'F', '32176747', 'HIV/AIDS, Chronic Kidney Failure, TB', '158.73264','1960-1-1'),
-- ('Ava Levine', 'O+', 'F', '27625301', 'Hypertension, Liver Failure, Acute, TIA', '127.86796','1950-12-12'),
-- ('Edith Monroe', 'A-', 'F', '64887564', 'Cancer, Melanoma, Skin Cancer, Vascular Dementia', '121.2541','1952-2-12'),
-- ('Cordelia Bardot', 'B-', 'F', '83683626', 'Bedsores, IBD, Diabetes', '149.91416','1953-10-12'),
-- ('Cyrus Daughtler', 'O-', 'M', '91942731', 'Heart Disease, Parkinsons Disease, Vertigo', '149.91416','1938-8-11'),
-- ('Harvey Lopez', 'A-', 'M', '98836361', 'Bipolar Disorder, Non-Hodgkins Lymphoma, Ulcerative Colitis', '108.02638','1948-9-1'),
-- ('Bessie Raven', 'O+', 'F', '43476740', 'Diabetes, Liver Spots, Bipolar Disorder', '156.52802','1951-8-1'),
-- ('Harriet Cromwell', 'AB-', 'F', '73894787', 'Autism, Hodgkins disease, Stroke', '121.2541','1970-1-3');


DROP TABLE IF EXISTS patientdata;
CREATE TABLE patientdata( 
	dataid				integer not null auto_increment,
	patientid			integer not null,
	date				date, 
	time				varchar(15),
	pupil				integer,
	temperature			double,
	bloodpressure		varchar(10),
	pulse				integer,
	oxygensaturation	varchar(10),
	verbalresponse		varchar(15),
	PRIMARY KEY (dataid),
    FOREIGN KEY (patientid) REFERENCES patient(patientid)
);
INSERT into patientdata (patientid, date, time, pupil, temperature, bloodpressure, pulse, oxygensaturation, verbalresponse) 
VALUES 
(1,"2021-1-1","11pm","3",36.6,"120/80",70,"95%","good"),
(1,"2021-1-2","12pm","3",36.5,"120/85",74,"92%","good"),
(1,"2021-1-3","10pm","3",36.7,"125/89",80,"91%","good"),
(3,"2021-2-1","11pm","3",36.6,"120/80",70,"95%","good"),
(3,"2021-2-2","12pm","3",36.5,"120/85",74,"92%","good"),
(3,"2021-2-3","10pm","3",36.7,"125/89",80,"91%","good"),
(4,"2021-1-1","11pm","3",36.6,"120/80",70,"95%","good"),
(4,"2021-1-2","12pm","3",36.5,"120/85",74,"92%","good"),
(4,"2021-1-3","10pm","3",36.7,"125/89",80,"91%","good"),
(5,"2021-2-1","11pm","3",36.6,"120/80",70,"95%","good"),
(5,"2021-2-2","12pm","3",36.5,"120/85",74,"92%","good"),
(5,"2021-2-3","10pm","3",36.7,"125/89",80,"91%","good"),
(6,"2021-1-1","11pm","3",36.6,"120/80",70,"95%","good"),
(6,"2021-1-2","12pm","3",36.5,"120/85",74,"92%","good"),
(6,"2021-1-3","10pm","3",36.7,"125/89",80,"91%","good"),
(7,"2021-2-1","11pm","3",36.6,"120/80",70,"95%","good"),
(7,"2021-2-2","12pm","3",36.5,"120/85",74,"92%","good"),
(7,"2021-2-3","10pm","3",36.7,"125/89",80,"91%","good"),
(8,"2021-2-1","11pm","3",36.6,"120/80",70,"95%","good"),
(8,"2021-2-2","12pm","3",36.5,"120/85",74,"92%","good"),
(8,"2021-2-3","10pm","3",36.7,"125/89",80,"91%","good"),
(9,"2021-1-1","11pm","3",36.6,"120/80",70,"95%","good"),
(9,"2021-1-2","12pm","3",36.5,"120/85",74,"92%","good"),
(9,"2021-1-3","10pm","3",36.7,"125/89",80,"91%","good"),
(10,"2021-2-1","11pm","3",36.6,"120/80",70,"95%","good"),
(10,"2021-2-2","12pm","3",36.5,"120/85",74,"92%","good"),
(10,"2021-2-3","10pm","3",36.7,"125/89",80,"91%","good");

DROP TABLE IF EXISTS comment;
CREATE TABLE comment(
    commentid       integer not null auto_increment,
	patientid		integer not null,
    comment         varchar(255),
    date            date,

    PRIMARY KEY (commentid),
    FOREIGN KEY (patientid) REFERENCES patient(patientid)
);
INSERT INTO comment (patientid, comment,date)
VALUES 
(1, "Walker should be within reach at all times","2021-10-10"),
(2, "Give Tylenol before getting patient up in AM","2021-11-11"),
(3, "Ask if there is fear of falling or reduction in usual activities","2022-1-3"),
(4, "Note signs and symptomps of depression and aggitation or anxiety","2022-1-5"),
(5, "Ask about light-headedness or dizziness","2022-1-7"),
(6, "Note use of alchohol and street recreational drugs","2022-1-9"),
(7, "Note presence of shortness of breath at rest or with minimal activity","2022-1-12"),
(8, "Note signs and symptomps of depression and aggitation or anxiety","2022-1-5"),
(9, "Show patients how to use their assistive device when getting up","2022-1-6"),
(10, "Note use of alchohol and street recreational drugs","2022-1-9");

DROP TABLE IF EXISTS falldata;
CREATE TABLE falldata( 
	fallid			integer not null auto_increment,
	patientid		integer not null,
	fropscore		integer, 
	fropdate		date,

	PRIMARY KEY (fallid),
    FOREIGN KEY (patientid) REFERENCES patient(patientid)
);
INSERT into falldata (patientid, fropscore, fropdate) 
VALUES
(1,5,"2021-1-2"),
(1,7,"2021-5-1"),
(1,7,"2021-5-1"),
(2,2,"2021-5-2"),
(2,2,"2021-6-10"),
(3,3,"2021-1-2"),
(3,5,"2021-5-1"),
(3,7,"2021-5-1"),
(4,3,"2021-5-2"),
(4,5,"2021-6-10"),
(5,2,"2021-1-2"),
(5,2,"2021-5-1"),
(5,3,"2021-5-1"),
(6,5,"2021-5-2"),
(6,8,"2021-6-10"),
(7,2,"2021-5-2"),
(7,4,"2021-6-10"),
(8,1,"2021-1-2"),
(8,2,"2021-5-1"),
(8,3,"2021-5-1"),
(9,3,"2021-5-2"),
(9,2,"2021-6-10"),
(10,8,"2021-5-2"),
(10,9,"2021-6-10");

DROP TABLE IF EXISTS recs;
CREATE TABLE recs ( 
    id         bigint AUTO_INCREMENT,
    frop_score        int,
    recommendation      varchar(255),
    risk_factor        varchar(100),
    PRIMARY KEY (id)

);

INSERT INTO recs(frop_score, recommendation, risk_factor)
VALUES
('1', 'Consider equipment needs', 'Mobility'),
('2', 'Consider behavior change strategies to address resident readiness', 'Behavior'),
('3', 'Assess for signs of Delirium', 'Cognition'),
('4', 'Ensure equipment needs met for safe transfer', 'Transfers'),
('5', 'Check pulse', 'Dizziness'),
('6', 'Refer to physician or pharmacist for medication review', 'Medication'),
('7', 'Check for weight loss/gain', 'Acute Illness'),
('8', 'LAbel glasses for type of correction', 'Visual Impairment'),
('9', 'Ensure furniture is stable', 'Environmental');

DROP TABLE IF EXISTS meds;
CREATE TABLE meds ( 
    id         bigint AUTO_INCREMENT,
    frop_score        int,
    medication      varchar(255),
    risk_factor        varchar(100),
    PRIMARY KEY (id)

);

INSERT INTO meds(frop_score, medication, risk_factor)
VALUES
('1', 'Imipramine, Lithium, Maprotiline, Mirtazapine, Moclobemide, Nortriptyline', 'Drowsiness'),
('2', 'Amitriptyline, Bupropion, Citalopram', 'Dizziness'),
('3', 'Alfuzosin, Doxazosin, Prazosin', 'Hypotension'),
('4', 'Thiothixene, Trifluoperazine, Ziprasidone, Zuclopenthixol', 'Parkinsonian Effects'),
('5', 'Bromocriptine, Entacapone, Levodopa, Pramipexole', 'Ataxia'),
('6', 'Lamotrigine, Levetiracetam, Oxcarbazepine', 'Vision Disturbance'),
('7', 'Brivaracetam, Carbamazepin, Clonazepam, Ethosuximide', 'Osteoporosis'),
('8', 'Apixaban, Dabigatran, Dalteparin, Enoxaparin, Fondaparinux', 'Serious Bleeding'),
('9', 'Donepezil, Galantamine, Rivastigmine', 'Syncope');
