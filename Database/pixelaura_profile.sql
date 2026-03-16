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
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `bio` longtext NOT NULL,
  `gender` varchar(45) NOT NULL,
  `image` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile`
--

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
INSERT INTO `profile` VALUES (1,'Anju_807','Anju Jadav|| MSC MATHEMATICS','female','/PixelAuraplus/static/images/profile/521145.jpg'),(2,'Sanju78','Sanju Bh|| Phiscs','female','/PixelAuraplus/static/images/profile/521145.jpg'),(3,'Ami89','Amii||Atr||','female','/PixelAuraplus/static/images/profile/521145.jpg'),(4,'ahan_rayzada','Ahan Rayzada|| Maried|| Business man ','male','/PixelAuraplus/static/images/profile/profile_boy.png'),(5,'drashti_sh','Dradhti Shivam Gandhi','female','/PixelAuraplus/static/images/profile/profile.avif'),(6,'shivam_gh','Shivam GABDHI','male','/PixelAuraplus/static/images/profile/profile_boy.png'),(7,'shanaya_ah_9','Shanaya Rayazada|| CEO Shanaya Jwellers','female','/PixelAuraplus/static/images/profile/694600.jpg'),(8,'SanjuBh78','Sanja Bhalgariya','female','/PixelAuraplus/static/images/profile/521145.jpg'),(9,'khushi_rajput_580','K for Khushi Rajput|| Hr|| Delhi','female','/PixelAuraplus/static/images/profile/profile.avif'),(10,'hemang_568','Hemang Dave|| Bhudev','male','/PixelAuraplus/static/images/profile/profile_boy.png'),(11,'vishal_pro','Vishal Sindhal|| Python Developer|| \r\nMarvel Movies','male','/PixelAuraplus/static/images/profile/profile_boy.png'),(12,'mahi_rych__384','Mahi','female','/PixelAuraplus/static/images/profile/4053972724e06696425c31dd15f9ea34.jpg'),(13,'shivraj14','Shivaraj Agrwal || Head of Agrwal Groups of Compny ','male','/PixelAuraplus/static/images/profile/profile_boy.png'),(14,'sima_314','         Sima','female','/PixelAuraplus/static/images/profile/1772093165_187144-3840x2160-desktop-4k-marvel-girls-wallpaper.jpg'),(15,'raj__dave26','Raj Dave ||','male','/PixelAuraplus/static/images/profile/1772093382_profile_boy.png'),(16,'brijesh_pt95','Brijesh Patel || Bg || 1230','male','/PixelAuraplus/static/images/profile/profile_boy.png'),(17,'mishita_r_890','Mishita Rathi || Doctor','female','/PixelAuraplus/static/images/profile/profile.avif'),(18,'aa12','fgf','female','/PixelAuraplus/static/images/profile/147.jpg');
/*!40000 ALTER TABLE `profile` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-03-16 12:43:17
