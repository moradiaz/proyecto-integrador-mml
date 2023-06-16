-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 16-06-2023 a las 20:47:30
-- Versión del servidor: 5.7.39
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `usuariosId` int(10) UNSIGNED NOT NULL,
  `productosId` int(10) UNSIGNED NOT NULL,
  `comentario` varchar(500) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `usuariosId`, `productosId`, `comentario`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 2, 4, 'Excelente producto!!', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(2, 3, 4, 'Me encanto lo recomiendo 100%', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(3, 1, 4, 'Me encanto, lo recomiendo 100%', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(4, 4, 4, 'Me dejo la piel hermosa, nuna había visto algo así', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(5, 3, 2, 'Excelente producto!!', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(6, 1, 2, 'Me encanto lo recomiendo 100%', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(7, 4, 2, 'Me encanto, lo recomiendo 100%', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(8, 2, 2, 'Me dejo la piel hermosa, nuna había visto algo así', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(9, 1, 6, 'Excelente producto!!', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(10, 5, 6, 'Me encanto lo recomiendo 100%', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(11, 2, 6, 'Me encanto, lo recomiendo 100%', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(12, 3, 6, 'Me dejo la piel hermosa, nuna había visto algo así', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(13, 2, 9, 'Excelente producto!!', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(14, 4, 9, 'Me encanto lo recomiendo 100%', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(15, 3, 9, 'Me encanto, lo recomiendo 100%', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(16, 5, 9, 'Me dejo la piel hermosa, nuna había visto algo así', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(17, 2, 3, 'Excelente producto!!', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(18, 3, 3, 'Me encanto lo recomiendo 100%', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(19, 1, 3, 'Me encanto, lo recomiendo 100%', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(20, 4, 3, 'Me dejo la piel hermosa, nuna había visto algo así', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(21, 2, 7, 'Excelente producto!!', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(22, 3, 7, 'Me encanto lo recomiendo 100%', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(23, 1, 7, 'Me encanto, lo recomiendo 100%', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(24, 4, 7, 'Me dejo la piel hermosa, nuna había visto algo así', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(25, 2, 1, 'Excelente producto!!', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(26, 3, 1, 'Me encanto lo recomiendo 100%', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(27, 1, 1, 'Me encanto, lo recomiendo 100%', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(28, 4, 1, 'Me dejo la piel hermosa, nuna había visto algo así', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(29, 2, 5, 'Excelente producto!!', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(30, 3, 5, 'Me encanto lo recomiendo 100%', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(31, 1, 5, 'Me encanto, lo recomiendo 100%', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(32, 4, 5, 'Me dejo la piel hermosa, nuna había visto algo así', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(33, 2, 8, 'Excelente producto!!', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(34, 3, 8, 'Me encanto lo recomiendo 100%', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(35, 1, 8, 'Me encanto, lo recomiendo 100%', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(36, 4, 8, 'Me dejo la piel hermosa, nuna había visto algo así', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(37, 2, 10, 'Excelente producto!!', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(38, 3, 10, 'Me encanto lo recomiendo 100%', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(39, 1, 10, 'Me encanto, lo recomiendo 100%', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(40, 4, 10, 'Me dejo la piel hermosa, nuna había visto algo así', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(41, 17, 8, 'Increíble producto! Lo volvería a comprar', '2023-06-13 14:57:49', '2023-06-13 14:57:49', NULL),
(42, 17, 4, 'Hermosa textura', '2023-06-16 14:08:13', '2023-06-16 14:08:13', NULL),
(43, 18, 6, 'Buenisimo exfoliante facial', '2023-06-16 14:09:11', '2023-06-16 14:09:11', NULL),
(44, 17, 7, 'Buenisimo!', '2023-06-16 14:49:53', '2023-06-16 14:49:53', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_productos`
--

CREATE TABLE `tabla_productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `idUsuario` int(10) UNSIGNED NOT NULL,
  `nombreProducto` text NOT NULL,
  `descripcion` varchar(1000) NOT NULL,
  `fotoProducto` varchar(1200) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tabla_productos`
--

INSERT INTO `tabla_productos` (`id`, `idUsuario`, `nombreProducto`, `descripcion`, `fotoProducto`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 2, 'Hyaluronic Cream', 'Hidratante facial con ácido hialuronico, ideal para pieles mixtas a grasas, con acabado glowy', '/images/products/skin-1.jpg', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(2, 3, 'The Ordinary', 'Crema facial con vitamina C, ideal para todo tipo de piel', '/images/products/skin-2.jpg', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(3, 4, 'Drunk Elephant Oil', 'Oleo facial con antioxidantes, omega 6 y 9', '/images/products/skin-3.jpg', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(4, 5, 'Drunk Elephant Cream', 'Crema facial, ideal para pieles secas y cansadas', '/images/products/skin-4.jpg', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(5, 1, 'Unseen Sunscreen', 'Protector solar hidratante con SPF 40, con acabado luminoso', 'images/products/skin-5.jpg', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(6, 2, 'La Mer exfolator', 'Este exfoliante facial sensorial perfecciona la piel', '/images/products/skin-6.jpg', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(7, 3, 'Dermalogica', 'es un suave exfoliante enzimático a base de arroz', '/images/products/skin-7.jpg', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(8, 4, 'Drunk Elephant Body Lotion', 'Una loción ligera de rápida absorción con una mezcla de aceites humectantes', '/images/products/skin-8.jpg', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(9, 5, 'Glossier Serum', 'Serum de acido hialuronico que contiene vitamina B5', '/images/products/skin-9.jpg', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(10, 1, 'Lip Treatment', 'balsamo labial reparador que hidrata la piel', '/images/products/skin-10.jpg', '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(12, 17, 'Kiehl\'s ultra facial cream', 'Hidratante ligero de rápida absorción.', 'https://media.ulta.com/i/ulta/2540233?w=1020&h=1020', '2023-06-09 23:21:59', '2023-06-09 23:21:59', NULL),
(13, 17, 'Caudalie Vinoperfect Essence ', 'Esencia adecuada para todo tipo de piel', 'https://static.thcdn.com/images/large/original//productimg/1600/1600/14229322-1525043684529008.jpg', '2023-06-12 12:57:41', '2023-06-12 16:45:30', NULL),
(14, 18, 'Dior Prestige Le Sucre De Gommage', 'Exfoliante enriquecido con micronutrientes', 'https://cdn.shopify.com/s/files/1/0502/9393/2199/products/3348901565318_1.jpg?v=1624984759', '2023-06-12 13:24:32', '2023-06-12 13:24:32', NULL),
(15, 18, 'Magic Cream Moisturizer with Hyaluronic Acid', 'Humectante con ácido hialurónico que ayuda a disminuir las arrugas', 'https://www.sephora.com/productimages/sku/s2486272-main-zoom.jpg?imwidth=1224', '2023-06-12 15:56:17', '2023-06-12 15:56:36', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(200) NOT NULL,
  `usuario` varchar(150) NOT NULL,
  `password` varchar(250) NOT NULL,
  `foto` varchar(200) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `dni` int(10) UNSIGNED DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `usuario`, `password`, `foto`, `fecha`, `dni`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'pablolima@gmail.com', 'pablo_lima', 'pablito1234', '/images/users/pablo_image.png', '1998-05-16', 41545127, '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(2, 'juanamartinez@gmail.com', 'juaana.martinez', 'juanamar12', '/images/users/juli.png', '2001-02-19', 44326789, '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(3, 'fabianruiz@gmail.com', 'fabiruiz_', 'fabianruiz21', '/images/users/holder.png', '2003-12-07', 45326748, '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(4, 'danielalopez@gmail.com', 'dani.lopezz', 'danielalopez76', '/images/users/coty.png', '2000-04-27', 42376297, '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(5, 'juliocruz@gmail.com', 'julio_cruz', 'juliocruz1234', '/images/users/nacho.png', '1999-08-21', 40544187, '2023-06-05 13:53:37', '2023-06-05 13:53:37', NULL),
(6, 'caro@gmail.com', 'caro_serpe', '$2a$12$dxce14iKTp05FgbcDsls0ulJlev5gXTsdrrGLWp43PPLJuf36sHwa', '/images/users/pablo_image.png', '2003-07-12', 34543298, '2023-06-05 15:03:36', '2023-06-05 15:03:36', NULL),
(7, 'tali@gmail.com', 'tali_1', '$2a$12$irt8eTHeDe/pdJhRZTpSIeoDfCzfd/H40bZARgc5qgVNMHhC7ov7.', '/images/users/pablo_image.png', '2001-04-12', 34564098, '2023-06-05 15:05:27', '2023-06-05 15:05:27', NULL),
(8, 'lu@gmail.com', 'luu_1', '$2a$12$Gdsl8cqKVjpSMesoWMPflOgKuKjw9q4XmQxyM.fxLoBanEaT.auem', '/images/users/pablo_image.png', '2023-06-06', 23432987, '2023-06-05 15:08:06', '2023-06-05 15:08:06', NULL),
(9, 'mora@gmail.com', 'mora-1', '$2a$12$RfKkaOvwWQUqQZFAjrPpUuxs.EsyR453EXR4qvVrYo7jLlOoR6852', '/images/users/pablo_image.png', '2004-08-27', 34569987, '2023-06-05 15:22:38', '2023-06-05 15:22:38', NULL),
(10, 'guille@gmail.com', 'guille_2', '$2a$12$uJjT53DL05vSpJZv/yHh8ea7tFegNvSMwhf8gnNDAa.VGYcAGa/O.', '/images/users/pablo_image.png', '1887-03-12', 34567987, '2023-06-05 15:38:40', '2023-06-05 15:38:40', NULL),
(11, 'sofi@gmail.com', 'sofi1234', '$2a$12$3omUy7hVJtVYNvhznuIS5eUjEc02tggjvz0r2.yCNq7BakUNQ.uPa', '/images/users/pablo_image.png', '2012-06-05', 3456, '2023-06-05 15:42:35', '2023-06-05 15:42:35', NULL),
(12, 'juan@gmail.com', 'juan_12', '$2a$12$7dkddGOQihVl4eJ5qnALqu/kd80JL6UTlNcckJZ0tHwPw7eE7q5Yi', '/images/users/pablo_image.png', '2000-05-01', 34568987, '2023-06-05 16:13:54', '2023-06-05 16:13:54', NULL),
(13, 'justi@gmail.com', 'justina_2', '$2a$12$6Czz5TU2D9J7QRZSp5gEueJQ6VacYNuBJesaemkoY.P9ajtPoApXa', '/images/users/pablo_image.png', '2001-03-21', 34579897, '2023-06-05 16:27:42', '2023-06-05 16:27:42', NULL),
(14, 'ali@gmail.com', 'alisu_', '$2a$12$yPEylaUyI5dxt0OUHfnQxe6nAD0Gy2fJECC5Fyn6FoHSLblcdMVNW', '/images/users/pablo_image.png', '1897-01-01', 34467923, '2023-06-05 16:39:41', '2023-06-05 16:39:41', NULL),
(15, 'hernan@gmail.com', 'hernan_7', '$2a$12$YncBWRcgCFUrIebL/wjVeeJMxtUw0aivNL09kar/.5WLDj79xeV3u', '/images/users/pablo_image.png', '1896-02-26', 456789867, '2023-06-06 02:25:30', '2023-06-06 02:25:30', NULL),
(16, 'fran@gmail.com', 'fran', '$2a$12$3SbVzCsuglrSmkM6O3CLXuFC6hrujl7bjXk5/o.zizxWL1dkCwMTq', '/images/users/pablo_image.png', '2002-03-12', 3475853, '2023-06-06 11:11:08', '2023-06-06 11:11:08', NULL),
(17, 'mori@gmail.com', 'mora_7', '$2a$12$67QAJu4GXIUYUa9Z9SC.auB0jt9bRn5t2RbqaYZ.2UHN3pjZmAu8W', 'https://es.web.img3.acsta.net/pictures/16/05/11/14/25/152055.jpg', '1002-03-21', 35798433, '2023-06-06 11:16:27', '2023-06-16 12:54:15', NULL),
(18, 'bella@gmail.com', 'bella_hadid1', '$2a$12$JUDuckhp4kcM7LRxOVZrZOl76qyOOemqVcwQmcgR7ciuFFh/xxdhe', 'https://s3.abcstatics.com/abc/www/multimedia/estilo/2022/12/21/DL_u520241_020-RTJm6RXoiHbEgOLaZuIkEmL-1200x840@abc.jpg', '1992-09-12', 3456735, '2023-06-12 13:22:16', '2023-06-16 14:48:51', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuariosId` (`usuariosId`),
  ADD KEY `productosId` (`productosId`);

--
-- Indices de la tabla `tabla_productos`
--
ALTER TABLE `tabla_productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de la tabla `tabla_productos`
--
ALTER TABLE `tabla_productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`usuariosId`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`productosId`) REFERENCES `tabla_productos` (`id`);

--
-- Filtros para la tabla `tabla_productos`
--
ALTER TABLE `tabla_productos`
  ADD CONSTRAINT `tabla_productos_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
