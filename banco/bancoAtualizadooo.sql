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

-- Copiando dados para a tabela stardev.aulas: ~12 rows (aproximadamente)
DELETE FROM `aulas`;
INSERT INTO `aulas` (`id_aula`, `materia`, `duracao`, `qtd_aulas`) VALUES
	(1, 'Back-End', '1hora', 12),
	(2, 'FundamentosProgramacao', '1hora', 10),
	(3, 'LogicaProgramacao', '1hora', 10),
	(4, 'DesenvolvimentoWeb', '1hora', 11),
	(5, 'Front-End', '1hora', 11),
	(6, 'BancoDados', '1hora', 10),
	(7, 'ProjetoSoftware', '1hora', 12),
	(8, 'SegurancaInformacao', '1hora', 12),
	(9, 'CodigoLimpo', '1hora', 12),
	(10, 'DesenvolvimentoMobile', '1hora', 13),
	(11, 'RedesIOT', '1hora', 10),
	(12, 'LinguagemProgramacao', '1hora', 12);

-- Copiando estrutura para tabela stardev.cadastro
DROP TABLE IF EXISTS `cadastro`;
CREATE TABLE IF NOT EXISTS `cadastro` (
  `id_cadastro` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` text NOT NULL,
  `telefone` varchar(15) NOT NULL DEFAULT '',
  `nivel` varchar(50) DEFAULT 'U',
  `bio` varchar(255) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_cadastro`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Copiando dados para a tabela stardev.cadastro: ~9 rows (aproximadamente)
DELETE FROM `cadastro`;
INSERT INTO `cadastro` (`id_cadastro`, `nome`, `email`, `senha`, `telefone`, `nivel`, `bio`, `foto`) VALUES
	(15, 'Lauane Gazola', 'lauanegazola@gmail.com', '$2b$10$N7C1CdfbwVM1ve9V7zO7ke7.UPLHOAlOlUxrgm5icwSCRNRNi4W.G', '(18) 99653-4326', 'U', NULL, NULL),
	(16, 'STARDEV', 'stardevaulas@gmail.com', '$2b$10$9nhJ99/wWi4EJIh4uXINie54Fhomuu2twV1zm9Jre.MQOV6tr0D.e', 'stardevaulas@gm', 'A', NULL, NULL),
	(17, 'Melissa Teste', 'marrofon@gmail.com', '$2b$10$.Ab/j2eVDiWAyc8oImBqzOk4ytz3wCz8QBACXLhJWITej6x.ZHDIC', '18991635678', 'U', NULL, NULL),
	(18, 'Melissa vieira dos @santos', 'lauaneribeiro@gmail.com', '$2b$10$VBxn3i5ajjskw3Th1xii3ebSfuyRrwB73IC4X3jfsrwudpfQlxtOy', '18988232550', 'U', NULL, NULL),
	(19, 'Melissa Vieira', 'stardev@gmail.com', '$2b$10$zu2ObJzS4JP.zUgYmjFZZeOAtQUqKJUOlVWhRXV074OPGQR03OrT2', '18988232550', 'U', NULL, NULL),
	(20, 'Testando Duplas', 'testeduplas@gmail.com', '$2b$10$cwOWk/33xywFgf14RJQKJ.zVkR6qIFIY9U3/Zhwprpiw8zSe3GbZq', '18988232550', 'U', NULL, NULL),
	(21, 'Teste gomes', 'teste@email.com', '$2b$10$VuKuL8.xCAThQbJN.gyQhOF8oCwbW5T22B.ByMLnZYiVo4N3Y2rZm', '1890028922', 'U', NULL, NULL),
	(22, 'Oi dos Santos', 'oi@gmail.com', '$2b$10$kqw3WHLVXzUPwanZkaY0Qu0I38zIGIl64Wrhj0S1UQZzDHtzMF9ku', '1867674267', 'U', NULL, NULL),
	(23, 'Antonio', 'antonio@gmail.com', '$2b$10$LkZwUN62ooGUQMNL1vxSTu6vw0CGSHdIPXqpbg.inZsYPgiDefo9.', '18987656678', 'U', NULL, NULL),
	(24, 'Bruna Markezini', 'bru@gmail.com', '$2b$10$kBobJ/i/fRBJTXJ7kv3/NOkj2fH/WP4RGJwU7jd6w7WC4WWkvynB2', '18996534326', 'U', NULL, NULL);

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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Copiando dados para a tabela stardev.contato: ~19 rows (aproximadamente)
DELETE FROM `contato`;
INSERT INTO `contato` (`id_contato`, `nome`, `email`, `comentario`, `data_envio`, `status_feedback`) VALUES
	(1, 'back', 'stardevaulas@gmail.com', 'shfghfg', '2026-05-05 13:24:30', 'Pendente'),
	(2, 'melissa cristina', 'melissasteste@hotmail.cm', 'qqqqqqqqqqqqqqqqqqq', '2026-05-05 13:24:30', 'Pendente'),
	(3, 'melissa cristina', 'melissasteste@hotmail.cm', 'rrrrrrrrrrrrrrrrr', '2026-05-05 13:24:30', 'Pendente'),
	(4, 'Teste Nome', 'teste@email.com', 'Isso é um comentário válido', '2026-05-05 13:24:30', 'Pendente'),
	(5, 'Melissa Vieira', 'melissacgv1@gmail.com', 'kkkkkkkkkkkkkkkkkkkkkkkkkk', '2026-05-05 13:24:30', 'Pendente'),
	(6, 'testando se fun', 'testetestete@gmail.com', 'kkkkkkkkkkkkkkkkkkkkkkkkkk', '2026-05-05 13:24:30', 'Pendente'),
	(7, 'BRUNO FERREIRA', 'BRUNÃOFERREIRÃO', 'TESTANDO O CONTATO', '2026-05-05 13:24:30', 'Pendente'),
	(8, 'Maria Laura Pasquini Ribeiro', 'marialaurapasquini@gmail.com', 'Olá sou irmã da Lauane', '2026-05-05 13:24:30', 'Pendente'),
	(9, 'Lauane Pasquini Ribeiro', 'lauane.ribeiro@aluno.senai.br', 'Melhor site que já vi em minha vida <3', '2026-05-05 13:24:30', 'Pendente'),
	(10, 'Lauane Pasquini', 'lauanepasquini@email.com', 'Melhor site do mundo ', '2026-05-05 13:24:30', 'Pendente'),
	(11, 'Lauane Pasquini', 'lauanepasquini@email.com', 'Melhor site', '2026-05-05 13:24:30', 'Pendente'),
	(12, 'Lauane Pasquini Ribeiro', 'lauanepasquini@email.br', 'Melhor site do mundo', '2026-05-05 13:24:30', 'Pendente'),
	(13, 'Lauane Pasquini', 'lauane@email.com', 'lauane megamente', '2026-05-05 13:24:30', 'Pendente'),
	(14, 'Kemilly Reginão', 'reginao@email.com', 'Reginão gostou', '2026-05-05 13:24:30', 'Pendente'),
	(15, 'Kemilly Reginão', 'reginao@email.com', 'Reginão gostou', '2026-05-05 13:24:30', 'Pendente'),
	(17, 'Filipe Deshasp', 'feliperer@email.com', 'ajfhasjkdfhajksdfhkjsdf', '2026-05-05 13:24:30', 'Pendente'),
	(18, 'Érick Jacquin', 'jacquin@email.com', 'trouxe bolinho de chocolate para o Brasil!', '2026-05-19 19:35:13', 'Pendente'),
	(19, 'Meliisa Testando', 'melissaviera@gmail.com', 'ometando teste', '2026-08-06 18:39:19', 'Pendente'),
	(20, 'Lauane Pasquini Ribeiro', 'lauane.ribeiro@aluno.senai.br', 'fudghsdfhgkjhfdkghsfd', '2026-08-06 18:39:58', 'Pendente'),
	(21, 'bndghjfghmf', 'fgdhghjfghjh', 'kfhjkhjgkhjk', '2026-08-27 16:30:36', 'Pendente');

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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Copiando dados para a tabela stardev.materias: ~11 rows (aproximadamente)
DELETE FROM `materias`;
INSERT INTO `materias` (`id_materias`, `nome_aulas`, `id_aula`, `link`, `descricao`) VALUES
	(2, 'Intranet- testandpo', 2, 'https://youtu.be/YIvGf2IjaXI?si=RhQhuyE79FcUxocI', 'aaaaaaaaaaaaaaaaaaa'),
	(3, 'testando logica de progamacao', 3, 'https://youtu.be/YIvGf2IjaXI?si=O3_enBiBSp2ozLjT', 'testando a intranet'),
	(4, 'testando DesenvolvimentoWeb', 4, 'https://youtu.be/YIvGf2IjaXI?si=O3_enBiBSp2ozLjT', 'testando a intranet'),
	(5, 'testando fronEND', 5, 'https://youtu.be/YIvGf2IjaXI?si=O3_enBiBSp2ozLjT', 'Testando a intranet'),
	(6, 'testando bancoDados', 6, 'https://youtu.be/YIvGf2IjaXI?si=O3_enBiBSp2ozLjT', 'testando a intranet'),
	(7, 'testando projetosoftware', 7, 'https://youtu.be/YIvGf2IjaXI?si=O3_enBiBSp2ozLjT', 'testando intranet'),
	(8, 'testando segurança da informação', 8, 'https://youtu.be/YIvGf2IjaXI?si=O3_enBiBSp2ozLjT', 'testando a intranet'),
	(9, 'testando a video aula codigo limpo', 9, 'https://youtu.be/YIvGf2IjaXI?si=O3_enBiBSp2ozLjT', 'testando a intranet da video aula'),
	(10, 'testando video aula desenvolvimento mobile', 10, 'https://youtu.be/YIvGf2IjaXI?si=O3_enBiBSp2ozLjT', 'testando a intranet'),
	(11, 'testando a intranet redes IOT', 11, 'https://youtu.be/YIvGf2IjaXI?si=O3_enBiBSp2ozLjT', 'Redes IOT testando'),
	(12, 'testando video aula linguagens de programação', 12, 'https://youtu.be/YIvGf2IjaXI?si=O3_enBiBSp2ozLjT', 'descrição linguagens de programaçao');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
