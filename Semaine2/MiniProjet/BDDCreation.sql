create database GestionHotel;
use GestionHotel;
create table hotels (id int primary key  auto_increment,
nom varchar(255), adresse varchar(255), rating int);

ALTER TABLE hotel RENAME TO hotels;

create table clients (id int primary key auto_increment,
firstname varchar(100), lastname varchar(100), email varchar(100), password varchar(100));

create table avis(id int primary key auto_increment, comment varchar(255), 
client_id int, hotel_id int , 
foreign key (client_id)references clients(id),
foreign key (hotel_id) references hotels(id));

create table typeChambres(id int primary key auto_increment,
nom varchar(255));


create table chambres(id int primary key auto_increment, numero int, prix float, disponibilte bool,
type_id int , hotel_id int ,
foreign key (type_id)references typeChambres(id),
foreign key (hotel_id) references hotels(id));

create table reservations(id int primary key auto_increment, dateDebut date, dateFin Date, statut bool, client_id int,
chambre_id int ,
foreign key(client_id) references clients(id),
foreign key(chambre_id) references chambres(id)
);

create table factures(id int primary key auto_increment, montant float, date date, reservation_id int,
foreign key(reservation_id)references reservations(id));

create table services(id int primary key auto_increment, service varchar(100));

create table serviceReserations(id int primary key auto_increment,
service_id int, reservation_id int,
foreign key(service_id) references services(id),
foreign key(reservation_id) references reservations(id)
);