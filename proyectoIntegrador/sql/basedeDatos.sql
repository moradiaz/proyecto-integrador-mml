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

