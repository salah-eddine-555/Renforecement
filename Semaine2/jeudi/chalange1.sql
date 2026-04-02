	create database librairie;
	use librairie;

	create table editeurs(id int primary key auto_increment,
						  nom varchar(255),
						  pays varchar(100)
						  );
	create table genres (id int primary key auto_increment,
						 nom varchar(100)
						 );

	create table livres(id int primary key auto_increment,
						titre varchar(100),
						prix float,
						annee_publication date,
						editeur_id int,
						genre_id int,
						foreign key (editeur_id) references editeurs(id),
						foreign key (genre_id) references genres(id) 
						);
	create table ventes(id int primary key auto_increment,
					client varchar(100),
					livre_id int,
					quantite  int,
					date_vente date,
					foreign key (livre_id) references livres(id) );
ALTER TABLE livres 
MODIFY COLUMN annee_publication YEAR;
##########################################################################################################

#les questions 
SELECT L.titre, E.nom as nomEditeur, G.nom as nomGenre FROM livres L
JOIN editeurs E ON L.editeur_id = E.id 
JOIN genres G ON L.genre_id = G.id;
####################################
select count(L.id) as nombreLivreParEditeur, E.nom as nomEditeur  from Livres L 
JOIN editeurs E ON L.editeur_id = E.id
group by E.nom; 
####################################

select L.titre as nomLivre , G.nom as genre, (L.prix * V.quantite) as chiffreAffaire from Livres L
JOIN genres G ON L.genre_id = G.id
JOIN ventes V ON L.id = V.livre_id
GROUP BY genre;
#######################################


select E.nom, V.client as vente  from editeurs E 
JOIN Livres L on L.editeur_id = E.id
LEFT JOIN ventes V ON V.livre_id = L.id
where V.livre_id is null;
#########################
select L.titre , G.nom, max(V.quantite) as maxLivreVendur from livres L 
JOIN genres G ON L.genre_id = G.id
JOIN ventes V on L.id = V.livre_id 
group by G.nom;
###########################

select V.client from Livres L 
JOIN ventes V on V.livre_id = L.id
group by V.client
having count(distinct genre_id > 3);

###########################################

SELECT MONTHNAME(V.date_vente) as mois, (V.quantite * L.prix) as chiffreAffaire from Livres L 
JOIN ventes V ON L.id = V.livre_id
group by mois;
#########################
select L.titre, L.prix, L.annee_publication  from Livres L
where L.annee_publication > 2020
and prix > (
	select avg(L2.prix) from Livres L2
    where L2.genre_id = L.genre_id
	);

select * from livres;