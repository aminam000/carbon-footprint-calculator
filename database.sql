
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
DROP TABLE IF EXISTS "user";

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "profile_name" varchar(255)
    "authLevel" VARCHAR(64) DEFAULT 'USER'
--    "residence" DECIMAL not null,
--    "vehicle" DECIMAL not null,
--    "distance" DECIMAL not null,
--    "meals" DECIMAL not null

);

DROP TABLE IF EXISTS "questions";	

CREATE TABLE "questions"(
	"id" SERIAL PRIMARY KEY,
	"question" VARCHAR (1000) NOT NULL,
	"units" varchar (250)
	
	);
INSERT INTO "questions"("question" , "units" )
VALUES
	('I live in a(n)','residence' ),
	('What kind of vehicle do you own?','vehicle' ),
	('What is your main mode of transportation to work','per mile' ),
	('What was your main mode of transportation outside of work this week', 'per mile'),
	('How far away do you live from your job?','per mile' ),
	('Which of these choices best describe your meal habits', 'per serving'),
	('How would you best describe your shopping habits this week', 'per week'),
	('How many times did you have takeout this week', 'per serving'),
	('If you took any flights this week, please input the total miles below:', 'per mile')
;
--	('omnivorous', 'per meal', )
--	('pescatarian','per meal', )
--	('vegetarian', 'per meal', )
--	('vegan', 'per meal' )
--	('takeout', 'per meal' )
--	('house', 'residence' )
--	('townhome', 'residence' )
--	('apartment', 'residence' )

	
DROP TABLE IF EXISTS "choices";
CREATE TABLE "choices"(
	"id" SERIAL PRIMARY KEY,
	"questions_id" INT,
	"choices" varchar,
	"pounds of CO2" DECIMAL
);

INSERT INTO "choices"("questions_id" , "choices", "pounds of CO2" )
VALUES
	('1','apartment', 0 ),
	('1','townhouse', 0 ),
	('1','house', 0 ),
	('2', 'Conventional Car', 847),
	('2', 'Hybrid Car', 990),
	('2', 'Plug-In Hybrid Car', 859),
	('2', 'Electric Car', 334),
	('2', 'Motorbike', 554),
	('2', 'Bike', 340),
	('2', 'I do not own any vehicles', 0),
	('3','bike', 0 ),
	('3','walk', 0 ),
	('3','car', 0.96 ),
	('3','hybrid car', 0.7 ),
	('3','plug in hybrid car', 0.345 ),
	('3','electric car', 0 ),
	('3','public transport', 0.45 ),
	('4','bike', 0 ),
	('4','walk', 0 ),
	('4','car', 0.96 ),
	('4','hybrid car', 0.7 ),
	('4','plug in hybrid car', 0.345 ),
	('4','electric car', 0 ),
	('4','public transport', 0.45 ),
	('5', 'choose range' , 4673),
	('5', 'choose range', 66 ),
	('5', 'choose range', 453 ),
	('5', 'choose range', 32534 ),
	('6', 'choose range', 213),
	('7', 'choose rnage', 24234),
	('8', 'choose tange', 3244),
	('9', 'flight', 53.3 )
	
;	
DROP TABLE IF EXISTS "answers";	


CREATE TABLE "answers"(
	"id" SERIAL PRIMARY KEY,
	"week" DATE,
	"user_id" INT,
	"choice_id" INT
	
);


DROP TABLE IF EXISTS "values";	

CREATE TABLE "values"(
  "id" SERIAL PRIMARY KEY,
  "user_id" INT,
  "week" DATE,
  "Residence" DECIMAL not null,
  "Vehicle" DECIMAL not null,
  "WorkTransport" DECIMAL not null,
  "Distance" DECIMAL not null,
  "Transport" DECIMAL not null,
  "Meals" DECIMAL not null,
  "Takeout" DECIMAL not null,
  "Shopping" DECIMAL not null,
  "Flights" DECIMAL not null
  );
  
DROP TABLE IF EXISTS "total";	


CREATE TABLE "total"(
	"id" SERIAL PRIMARY KEY,
	"user_id" INT,
	"total" DECIMAL NOT NULL
);


DROP TABLE IF EXISTS "profile";
CREATE TABLE profile (
	id SERIAL PRIMARY KEY,
	profile_name varchar(255)
);

-- some data
INSERT INTO profile (profile_name) VALUES ('Amina'), ('Yusuf');



SELECT 
*, 
("Residence" + "Vehicle" + "WorkTransport" + "Meals"+ "Takeout"+ "Shopping"+"Flights" ) as total
FROM values;
