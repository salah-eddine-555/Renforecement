create database Hobital;
use Hobital;

create table medecins(id int primary key auto_increment,
					  nom varchar(255),
                      specialite varchar(255));
                      
create table patients(id int primary key auto_increment,
					  nom varchar(255),
                      date_naissance date);
create table consultations (id int primary key auto_increment,
							medecin_id int,
                            patient_id int,
                            date_consultation date,
                            diagnostic varchar(255),
                            cout decimal,
                            foreign key(medecin_id)references medecins(id),
                            foreign key(patient_ID) references patients(id)
                            );
                            
create table prescriptions (id int primary key auto_increment,
							consultation_id int,
                            medicament varchar(255),
                            posologie varchar(255));
 #######################################################
SELECT  C.diagnostic, M.nom as Medecin, P.nom as Patient FROM consultations C 
JOIN medecins M on C.medecin_id = M.id
JOIN patients P on C.patient_id = P.id;
###Question2 #####################################

SELECT Count(C.id) as nombreConsultationMedecine, M.nom as nomMedecin from consultations C 
JOIN medecins M on C.medecin_id = M.id
WHERE MONTH(C.date_consultation) = MONTH(CURDATE())
		AND YEAR(c.date_consultation) = YEAR(CURDATE())
group by nomMedecin;

### Question 3 ###############################################
select SUM(C.cout) as coutTotal, P.nom as patient from consultations C 
JOIN patients P ON  C.patient_id = P.id
group by patient;
### Question 4 ############################################
select P.nom as patient, C.* from patients P
left join consultations C on C.patient_id = P.id
where C.patient_id is null;
## Question 5 #############################################
select * from consultations;
select M.nom as medecin, (count(C.patient_id)) as nbrPatient from medecins M 
JOIN consultations C on C.medecin_id = M.id
group by medecin
order by nbrPatient desc limit 1;
## Question 6 ############################################

select Pr.*, M.nom as nomMedecin, P.nom as nomPatient from prescriptions Pr
JOIN consultations C on C.id = Pr.consultation_id
JOIN patients P on C.patient_id = P.id
JOIN medecins M on C.medecin_id = M.id
where C.patient_id = 4;

### Question 7 ####################################################
select M.specialite, count(C.id) as nbrConsultation  from consultations C
JOIN medecins M on C.medecin_id = M.id
group by M.specialite
order by nbrConsultation DESC LIMIT 2;