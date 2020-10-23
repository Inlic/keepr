--Data Reset
--DROP TABLE vaultkeeps;
--DROP TABLE keeps;
--DROP TABLE vaults;
--DROP TABLE profiles;


--New Tables

CREATE TABLE IF NOT EXISTS profiles(
  id VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  picture VARCHAR(255),

  PRIMARY KEY (id)
);

INSERT INTO profiles(id, email, name, picture)
VALUES("test", "test@test.com", "Jim Test", "Smiley.jpg");

SELECT * FROM profiles;
-- 

CREATE TABLE IF NOT EXISTS keeps(
  id int AUTO_INCREMENT NOT NULL,
  creatorid VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  description VARCHAR(255),
  img VARCHAR(255),
  views int,
  shares int,
  keeps int,

  PRIMARY KEY (id),
  FOREIGN KEY (creatorid)
  REFERENCES profiles(id)
  ON DELETE CASCADE
);

INSERT INTO keeps(creatorid, name, description, img, views, shares, keeps)
VALUES("test", "A Cool Post", "A nice thing.", "Smiley.jpg", 3, 2, 1);

SELECT * FROM keeps;


CREATE TABLE IF NOT EXISTS vaults(
 id int AUTO_INCREMENT NOT NULL,
 creatorid VARCHAR(255) NOT NULL,
 name VARCHAR(255),
 description VARCHAR(255),
 isprivate TINYINT,

 PRIMARY KEY (id),
 FOREIGN KEY (creatorid)
 REFERENCES profiles(id)
 ON DELETE CASCADE
);

INSERT INTO vaults(creatorid, name, description, isprivate)
VALUES("test", "House of Mouse", "All things mousey", 0);

SELECT * FROM vaults;


CREATE TABLE IF NOT EXISTS vaultkeeps(
  id int AUTO_INCREMENT NOT NULL,
  creatorid VARCHAR(255) NOT NULL,
  vaultid int,
  keepid int,

  PRIMARY KEY (id),

  FOREIGN KEY (creatorid)
  REFERENCES profiles(id)
  ON DELETE CASCADE,

  FOREIGN KEY (vaultid)
  REFERENCES vaults(id)
  ON DELETE CASCADE,

  FOREIGN KEY (keepid)
  REFERENCES keeps(id)
  ON DELETE CASCADE

);

INSERT INTO vaultkeeps(creatorid, vaultid, keepid) 
VALUES("test", 1,1);

SELECT * FROM vaultkeeps;