DROP DATABASE IF EXISTS FallApp;
CREATE DATABASE  FallApp;
USE FallApp;

DROP TABLE IF EXISTS PATIENT; 
CREATE TABLE PATIENT (
   PatientID	integer not null auto_increment,
   Name			varchar(45),
   BloodType	varchar(3),
   Sex			varchar(2),
   PHN			integer,
   Diagnosis	varchar(100),
   Weight		integer,
   PRIMARY KEY (PatientID)
);



DROP TABLE IF EXISTS PATIENTDATA;
CREATE TABLE PATIENTDATA ( 
	DataID				integer not null auto_increment,
	PatientID			integer not null,
	Date				varchar(15), 
	Time				varchar(15),
	Pupil				integer,
    Temperature			double,
    BloodPressure		varchar(10),
    Pulse				integer,
    OxygenSaturation	varchar(10),
    VerbalResponse		varchar(15),
	PRIMARY KEY (DataID),
    FOREIGN KEY (PatientID) REFERENCES PATIENT(PatientID)
);


DROP TABLE IF EXISTS FALLDATA;
CREATE TABLE FALLDATA ( 
	FallID			integer not null auto_increment,
	PatientID		integer not null,
	FROPScore		integer, 
	FROPDate		varchar(100),
	PRIMARY KEY (FallID),
    FOREIGN KEY (PatientID) REFERENCES PATIENT(PatientID)
);
