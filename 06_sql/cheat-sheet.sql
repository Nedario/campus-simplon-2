/*
ouvrir invite de ligne de commande =>
  mysql -u root [ -p ] (puis saisir votre mot de passe d'utilisateur mysql)
                   ('' sur windows par defaut, 'root' sous mac)
quitter invite de ligne de commande =>
  quit;
    si bloqué... tenter : contrôle + C
*/

/*
Ressources =>
  la doc officielle :
    https://dev.mysql.com/doc/refman/5.7/en/ (ET son moteur de recherce)
  good cookbook :
    https://www.tutorialspoint.com/mysql
*/
-- DEBOGUER (avec moteur innoDB)
SHOW ENGINE INNODB STATUS;

/*
  innoDB ou MyISAM ?
  http://sql.sh/1548-mysql-innodb-myisam
*/

-- lister les bases de données du système
SHOW DATABASES;
-- créer une nouvelle base de données
CREATE DATABASE nom_base;
-- utiliser nom_base comme base courante
USE nom_base;
-- lister les tables de la base courante
SHOW TABLES;
-- lister les index et clés d'une table
SHOW INDEXES IN nom_table;
-- lister les colones d'une table + types et clés (PK / FK)
SHOW COLUMNS FROM nom_table;
-- renommer table
RENAME TABLE nom_table TO nom_table_new;

-- SUPPRESSION
-- D'UNE BASE DE DONNEES COMPLETE !
DROP DATABASE nom_base;
-- D'UNE TABLE DE LA BASE DE DONNÉES COURANTE !
DROP TABLE nom_table;
-- exemple :
-- DROP TABLE utilisateurs;
-- DROP TABLE factures;
-- créer table
CREATE TABLE users (
  id INT(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  lastname VARCHAR(30) NOT NULL,
  email VARCHAR(50),
  PRIMARY KEY(id)
);

CREATE TABLE bills (
  id INT(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  id_user INT(6) UNSIGNED NOT NULL,
  total DECIMAL(13,2) NOT NULL,
  created_at DATETIME,
  PRIMARY KEY (id),
  FOREIGN KEY (id_user) REFERENCES users(id)
);

CREATE TABLE genres (
  id INT(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  label VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE persos (
  id INT(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  id_genre INT(6) UNSIGNED,
  nom VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id_genre)
    REFERENCES genres(id)
    ON UPDATE CASCADE ON DELETE SET NULL
);

-- CRUD
-- CREATE
INSERT INTO users (nom, prenom) VALUES ('ada', 'lovelace');
INSERT INTO users (nom, prenom, email) VALUES ('jimmy', 'page', 'jimmy@gmail.com');
INSERT INTO users (nom, prenom, email) VALUES ('nom', 'bidon', null);
INSERT INTO users (nom, prenom, email) VALUES ('brendan', 'eich', 'js@js.js');
INSERT INTO users (nom, prenom, email) VALUES ('douglas', 'crockford', 'jstoo@js.js');
INSERT INTO users (nom, prenom, email) VALUES ('larry', 'page', 'owner@google.com');
INSERT INTO users (nom, prenom, email) VALUES ('linus', 'torvalds', 'iluv@linux.org');
INSERT INTO users (nom, prenom, email) VALUES ('edgar', 'poe', 'poem@crow.net');
INSERT INTO users (nom, prenom, email) VALUES ('bob', 'marley', 'rasta@jah.jm');
INSERT INTO bills (id_client, date_creation, total) VALUES (2, CURDATE(), 1000);
INSERT INTO bills (id_client, date_creation, total) VALUES (2, CURDATE(), 9.99);
INSERT INTO bills (id_client, date_creation, total) VALUES (3, CURDATE(), 23.99);
INSERT INTO bills (id_client, date_creation, total) VALUES (1, CURDATE(), 300.01);
INSERT INTO bills (id_client, date_creation, total) VALUES (5, CURDATE(), 13.99);
INSERT INTO bills (id_client, date_creation, total) VALUES (4, CURDATE(), 13.99);
-- READ
SELECT * FROM users;
SELECT * FROM users WHERE id = 1;
SELECT nom FROM users WHERE id < 10;
SELECT nom, email FROM users WHERE nom = 'page';
-- LIKE CLAUSE
-- lister les lignes dont colonne_table commencent par 'a'
SELECT * FROM nom_table WHERE colonne_table LIKE 'a%';
-- lister les lignes dont colonne_table finissent par 'a'
SELECT * FROM nom_table WHERE colonne_table LIKE '%a';
-- lister les lignes dont colonne_table contiennent 'ai'
SELECT * FROM nom_table WHERE colonne_table LIKE '%ai%';
-- UPDATE
UPDATE users SET email = 'computermum@binary.com' WHERE nom = 'ada';
UPDATE users SET email = 'guitarhero@email.com' WHERE id = 2;
UPDATE users SET
              nom = 'george',
              prenom = 'abitbol',
              email = 'guitarhero@email.com'
                WHERE id = 3;
-- DELETE
DELETE FROM users WHERE id = 1;
DELETE FROM users WHERE email = 'computermum@binary.com';
DELETE FROM users WHERE id;


-- ALTER TABLE
ALTER TABLE users ADD age TINYINT;
