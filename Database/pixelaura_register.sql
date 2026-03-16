-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: localhost    Database: pixelaura
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `register`
--

DROP TABLE IF EXISTS `register`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `register` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `mobile` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `birthdate` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `is_private` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `register`
--

LOCK TABLES `register` WRITE;
/*!40000 ALTER TABLE `register` DISABLE KEYS */;
INSERT INTO `register` VALUES (1,'Ami','Amiatr@123gmail.com','2233556689','Ami123','2001-02-12','Ami89',1),(2,'Anju Jadav','anjujd45@gmail.com','9988665566','Anju','2001-05-23','Anju_807',0),(3,'Sanjana','sanju78bhala@gmail.com','9986547889','78','2003-10-12','SanjuBh78',1),(4,'Ahan Rayzada','ahanry23@gmail.com','9988776655','Ahan','1991-01-12','ahan_rayzada',0),(5,'Shanaya Rayzada','shanayarz34@gmail.com','8811223344','Shanaya','1992-02-12','shanaya_ah_9',0),(6,'Shivam Gandhi','shivamgh78@gmail.com','7711322112','Shivam','1994-03-23','shivam_gh',0),(7,'Drashti Gandhi','drashtigh56@gmail.com','8812455621','Drashti','1994-09-24','drashti_sh',0),(8,'Khushi Rajput','khushi78@gmail.com','7887566545','Khushi','2000-09-12','khushi_rajput_580',0),(9,'Sima Zala','simaa34@gmail.com','9978899856','Sima','2002-05-01','sima_314',0),(10,'Raj Dave','rajdv98@gmail.com','8896327889','Raj','2002-07-08','raj__dave26',0),(11,'Hemang Dave','hemang456@gmail.com','7788987456','hemang','2002-05-08','hemang_568',0),(12,'Nirav Patoliya','niravpt67@gmail.com','7256899875','Nirav','2002-07-20','nirav_798',0),(13,'Vishal Rayazada','vishalrd34@gmail.com','7788998856','Vishal','1991-03-12','vishal_pro',0),(14,'Sunny','ss@gmail.com','7878894556','Sunny','1982-11-12','sun38',0),(15,'Shivaraj Agrval','shiv@gmail.com','7887788998','Shiv','1971-02-12','shivraj14',0),(18,'Sofiya Ansari','sofi34@gmail.com','9966899889','Sofiya','2000-03-12','sofiya_an_285',1),(19,'Brijesh Patel','brijesh89@gmail.com','6656655556','Bg','1991-01-30','brijesh_pt95',0),(20,'Mahi Raychand','mahirh56@gmail.com','6655778899','Mahi','1999-12-12','mahi_rych__384',1),(28,'Govind Purohit111','abc@gmail.com','1234567890','A','1997-02-12','goa_74',0),(30,'david','david@gmail.com','4578456500','l','1111-11-11','12225',0),(31,'Zoya Javed','zoya@gmail.com','8898965645','Zoya45','1987-09-12','zoya_javed_875',0),(33,'Payal ','payal56@gmail.com','1234567890','Payal56','1111-11-11','payal_693',0),(34,'Mishita Rathi','mishita456@gmail.com','1234567890','56','1987-02-12','mishita_r_890',1),(35,'Parindhi Joshi','parinidhi34@gmail.com','1234567890','Parinidhi','1997-02-12','pari_487',0),(36,'Akash Joshi','akash23@gmail.com','1234567890','Akash12','1997-02-12','aka71',0),(37,'Bhavin Patel','bhavin89@gmail.com','1234567890','Bhavin','1871-03-12','bhavun_patel',0),(40,'Mayuri Rayazada ','mayuri34@gmail.com','1234567890','Mayuri','1997-02-12','mayuri_524',0);
/*!40000 ALTER TABLE `register` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-03-16 12:43:19
