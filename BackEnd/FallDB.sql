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
   PRIMARY KEY (patientid)
);
INSERT INTO patient(name, bloodtype, sex, phn, diagnosis, weight)
VALUES
('Ada Elsher', 'A+', 'F', '41343828', 'ALS, Pancreatic Cancer, Pneumonia', '147.70954'),
('Ellie Fredricksens', 'O-', 'F', '55290955', 'Fibromyalgia, Osteoporosis, ALS', '110.231'),
('Otto Marley', 'O-', 'M', '36735847', 'Arrhythmia of the Heart, Leukemia, IBD', '114.64024'),
('Dora St. James', 'A+', 'F', '43613479', 'Cataracts, Lupus, IBS', '130.07258'),
('Theodore Madison', 'A+', 'M', '34655077', 'Hepatitis, Obstructive Sleep Apnea, Rheumatoid Arthritis', '108.02638'),
('Carl Fredricksens', 'AB+', 'M', '82294439', 'Arthritis, Dry Macular Degeneration, PTSD', '110.231'),
('Beatrice Thatcher', 'O+', 'F', '24294589', 'Chronic Kidney Failure, MS, MS', '141.09568'),
('Victor Jenkins', 'B+', 'M', '17392815', 'COPD, Hypothyroidism, Parkinsons Disease', '138.89106'),
('Silas Hope', 'AB+', 'M', '77884403', 'Glaucoma, Incontinence, Urinary, Staph Infections', '130.07258'),
('Emily West', 'A-', 'F', '75202717', 'Cholesterol, Hyperthyroidism, Wrinkles', '145.50492'),
('Arthur Langley', 'B-', 'M', '10701730', 'Atrial Fibrillation, Osteoarthritis, Periodontitis', '160.93726'),
('Dorothy Hansley', 'B+', 'F', '35842333', 'Alzheimers Disease, Chronic Kidney Failure, Thrush, Oral', '156.52802'),
('Amelia Solace', 'AB-', 'F', '32176747', 'HIV/AIDS, IBS, TB', '158.73264'),
('Ava Levine', 'O+', 'F', '27625301', 'Hypertension, Liver Failure, Acute, TIA', '127.86796'),
('Edith Monroe', 'A-', 'F', '64887564', 'Cancer, Melanoma, Skin Cancer, Vascular Dementia', '121.2541'),
('Cordelia Bardot', 'B-', 'F', '83683626', 'Bedsores, IBD, Diabetes', '149.91416'),
('Cyrus Daughtler', 'O-', 'M', '91942731', 'Heart Disease, Parkinsons Disease, Vertigo', '149.91416'),
('Harvey Lopez', 'A-', 'M', '98836361', 'Bipolar Disorder, Non-Hodgkins Lymphoma, Ulcerative Colitis', '108.02638'),
('Bessie Raven', 'O+', 'F', '43476740', 'Diabetes, Liver Spots, Bipolar Disorder', '156.52802'),
('Harriet Cromwell', 'AB-', 'F', '73894787', 'Autism, Hodgkins disease, Stroke', '121.2541');



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
(2,"2021-2-1","11pm","3",36.6,"120/80",70,"95%","good"),
(2,"2021-2-2","12pm","3",36.5,"120/85",74,"92%","good"),
(2,"2021-2-3","10pm","3",36.7,"125/89",80,"91%","good");

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
(1, "commemnt for patient 1","2021-10-10"),
(1, "another commemnt for patient 1","2021-11-20"),
(2, "commemnt for patient 2","2021-11-11"),
(2, "another commemnt for patient 2","2022-1-2");


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
(1,8,"2021-1-2"),
(1,7,"2021-5-1"),
(1,7,"2021-5-1"),
(2,2,"2021-5-2"),
(2,2,"2021-6-10");
