create database Udemy;
use Udemy;

show tables;
create table users (id int primary key auto_increment, 
	firstname varchar(255),
    lastname varchar(255),
    email  varchar(255),
    password varchar(255)
    );
    
create table formateurs(id int primary key auto_increment,
						matricule int, 
                        user_id  int,
                        foreign key (user_id) references users(id)
                        );
create table apprenants(id int primary key auto_increment,
						codeApp int unique,
						user_id int,
                        foreign key(user_id) references users(id)
                        );
create table categories(id int primary key  auto_increment,
						name varchar(255) unique);
create table cours(id int primary key auto_increment,
				   titre varchar(255),
                   content varchar(255),
                   id_formateur int,
                   id_categorie int,
                   foreign key (id_formateur) references formateurs(id),
                   foreign key (id_categorie) references categories(id)
					);
create table avis(id int primary key auto_increment,
					comment varchar(255),
                    note int ,
                    id_cour int,
                    id_apprenant int,
					foreign key (id_cour) references cours(id),
                    foreign key (id_apprenant) references apprenants(id)
                    );
create table inscriptions(id int primary key auto_increment,
						typeInscription varchar(255) unique,
                        id_apprenant int,
                        id_cour int,
                        foreign key (id_apprenant) references apprenants(id),
                        foreign key (id_cour) references cours(id));
create table modules(id int primary key auto_increment,
					titre varchar(100),
                    description varchar(255),
                    maxHoraire date,
                    id_cour int,
                    foreign key(id_cour) references cours(id));
create table lecons(id int primary key auto_increment,
					titre varchar(100),
                    content varchar(255),
                    isGratuit bool,
                    id_module int,
                    foreign key(id_module) references modules(id)
                    );