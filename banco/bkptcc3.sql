-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.32-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.20.0.7320
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para stardev
DROP DATABASE IF EXISTS `stardev`;
CREATE DATABASE IF NOT EXISTS `stardev` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin */;
USE `stardev`;

-- Copiando estrutura para tabela stardev.aulas
DROP TABLE IF EXISTS `aulas`;
CREATE TABLE IF NOT EXISTS `aulas` (
  `id_aula` int(11) NOT NULL AUTO_INCREMENT,
  `materia` varchar(50) NOT NULL DEFAULT '0',
  `duracao` varchar(50) NOT NULL DEFAULT '0',
  `qtd_aulas` int(10) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_aula`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela stardev.cadastro
DROP TABLE IF EXISTS `cadastro`;
CREATE TABLE IF NOT EXISTS `cadastro` (
  `id_cadastro` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` text NOT NULL,
  `telefone` varchar(15) NOT NULL DEFAULT '',
  `nivel` varchar(50) DEFAULT 'U',
  PRIMARY KEY (`id_cadastro`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela stardev.contato
DROP TABLE IF EXISTS `contato`;
CREATE TABLE IF NOT EXISTS `contato` (
  `id_contato` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `comentario` text NOT NULL,
  `data_envio` timestamp NOT NULL DEFAULT current_timestamp(),
  `status_feedback` varchar(20) DEFAULT 'Pendente',
  PRIMARY KEY (`id_contato`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela stardev.materias
DROP TABLE IF EXISTS `materias`;
CREATE TABLE IF NOT EXISTS `materias` (
  `id_materias` int(11) NOT NULL AUTO_INCREMENT,
  `nome_aulas` varchar(50) NOT NULL DEFAULT '0',
  `id_aula` int(11) NOT NULL DEFAULT 0,
  `link` text DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  PRIMARY KEY (`id_materias`),
  KEY `id_aula` (`id_aula`),
  CONSTRAINT `id_aula` FOREIGN KEY (`id_aula`) REFERENCES `aulas` (`id_aula`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Exportação de dados foi desmarcado.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
