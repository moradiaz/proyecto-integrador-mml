create database proyecto;
use proyecto;
create table usuarios(
id int unsigned primary key auto_increment,
email varchar(200) unique not null,
usuario varchar(150) not null,
password varchar(250) not null, 
foto varchar(200),
fecha date,
dni int unsigned,
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp null
);

insert into usuarios(id, email, usuario, password, foto, fecha, dni)
values(default, 'pablolima@gmail.com', 'pablo_lima', 'pablito1234', '/images/users/user_image.jpeg', '1998-05-16', '41545127');

insert into usuarios(id, email, usuario, password, foto, fecha, dni)
values(default, 'juanamartinez@gmail.com', 'juaana.martinez', 'juanamar12', '/images/users/user_image.jpeg', '2001-02-19', '44326789');

insert into usuarios(id, email, usuario, password, foto, fecha, dni)
values(default, 'fabianruiz@gmail.com', 'fabiruiz_', 'fabianruiz21', '/images/users/user_image.jpeg', '2003-12-07', '45326748');

insert into usuarios(id, email, usuario, password, foto, fecha, dni)
values(default, 'danielalopez@gmail.com', 'dani.lopezz', 'danielalopez76', '/images/users/user_image.jpeg', '2000-04-27', '42376297');

insert into usuarios(id, email, usuario, password, foto, fecha, dni)
values(default, 'juliocruz@gmail.com', 'julio_cruz', 'juliocruz1234', '/images/users/user_image.jpeg', '1999-08-21', '40544187');

create table tabla_productos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
idUsuario INT UNSIGNED NOT NULL, 
nombreProducto TEXT NOT NULL, 
descripcion VARCHAR(1000) NOT NULL,  
FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
deletedAt TIMESTAMP NULL
); 

insert into tabla_productos (nombreProducto, descripcion, idUsuario) 
values ('Hyaluronic Cream', 'Hidratante facial con ácido hialuronico, ideal para pieles mixtas a grasas, con acabado glowy',2);

insert into tabla_productos (nombreProducto, descripcion, idUsuario) 
values ('The Ordinary','Crema facial con vitamina C, ideal para todo tipo de piel',3);

insert into tabla_productos (nombreProducto, descripcion, idUsuario) 
values ('Drunk Elephant Oil','Oleo facial con antioxidantes, omega 6 y 9',4);

insert into tabla_productos (nombreProducto, descripcion, idUsuario) 
values ('Drunk Elephant Cream','Crema facial, ideal para pieles secas y cansadas',5);

insert into tabla_productos (nombreProducto, descripcion, idUsuario) 
values ('Unseen Sunscreen','Protector solar hidratante con SPF 40, con acabado luminoso', 1);

insert into tabla_productos (nombreProducto, descripcion, idUsuario) 
values ('La Mer exfolator','Este exfoliante facial sensorial perfecciona la piel', 2);

insert into tabla_productos (nombreProducto, descripcion, idUsuario) 
values ('Dermalogica','es un suave exfoliante enzimático a base de arroz', 3);

insert into tabla_productos (nombreProducto, descripcion, idUsuario) 
values ('Drunk Elephant Body Lotion','Una loción ligera de rápida absorción con una mezcla de aceites humectantes',4);

insert into tabla_productos (nombreProducto, descripcion, idUsuario) 
values ('Glossier Serum','Serum de acido hialuronico que contiene vitamina B5',5);

insert into tabla_productos (nombreProducto, descripcion, idUsuario) 
values ('Lip Treatment','balsamo labial reparador que hidrata la piel', 1);
