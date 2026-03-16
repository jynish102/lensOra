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
-- Table structure for table `follows`
--

DROP TABLE IF EXISTS `follows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `follows` (
  `id` int NOT NULL AUTO_INCREMENT,
  `follower_username` varchar(45) NOT NULL,
  `following_username` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(20) DEFAULT 'accepted',
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_follow` (`follower_username`,`following_username`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follows`
--

LOCK TABLES `follows` WRITE;
/*!40000 ALTER TABLE `follows` DISABLE KEYS */;
INSERT INTO `follows` VALUES (21,'Ami89','Sanju78','2026-01-05 08:09:53','accepted'),(22,'Ami89','ahan_rayzada','2026-01-05 08:11:11','accepted'),(23,'Ami89','shanaya_ah_9','2026-01-05 08:11:21','accepted'),(26,'Sanju78','ahan_rayzada','2026-01-05 09:36:20','accepted'),(29,'drashti_sh','khushi_rajput_580','2026-01-20 07:31:42','accepted'),(30,'shanaya_ah_9','Ami89','2026-01-21 05:34:00','accepted'),(37,'hemang_568','Ami89','2026-02-04 08:17:36','accepted'),(38,'hemang_568','Anju_807','2026-02-04 08:17:45','accepted'),(39,'hemang_568','SanjuBh78','2026-02-04 08:17:59','accepted'),(40,'hemang_568','ahan_rayzada','2026-02-04 08:18:37','accepted'),(41,'vishal_pro','Ami89','2026-02-06 06:20:20','accepted'),(42,'vishal_pro','Anju_807','2026-02-06 06:20:25','accepted'),(43,'vishal_pro','SanjuBh78','2026-02-06 06:20:30','accepted'),(44,'vishal_pro','ahan_rayzada','2026-02-06 06:20:34','accepted'),(45,'vishal_pro','shanaya_ah_9','2026-02-06 06:20:39','accepted'),(46,'ahan_rayzada','vishal_pro','2026-02-06 06:23:06','accepted'),(47,'Anju_807','khushi_rajput_580','2026-02-09 05:55:18','accepted'),(49,'vishal_pro','mahi_rych__384','2026-02-13 14:08:46','accepted'),(50,'mahi_rych__384','vishal_pro','2026-02-13 14:09:41','accepted'),(51,'Ami89','Anju_807','2026-02-17 07:20:28','accepted'),(54,'SanjuBh78','Anju_807','2026-02-17 07:25:42','accepted'),(63,'mahi_rych__384','SanjuBh78','2026-02-24 08:37:54','accepted'),(64,'mahi_rych__384','Ami89','2026-02-24 08:38:09','accepted'),(65,'mahi_rych__384','ahan_rayzada','2026-02-24 08:38:23','accepted'),(70,'SanjuBh78','mahi_rych__384','2026-02-24 08:45:34','accepted'),(71,'mahi_rych__384','Anju_807','2026-02-24 08:54:58','accepted'),(72,'brijesh_pt95','Ami89','2026-02-24 09:20:58','accepted'),(74,'Ami89','brijesh_pt95','2026-02-24 09:21:39','accepted'),(75,'Ami89','mahi_rych__384','2026-02-24 09:22:14','accepted'),(77,'mahi_rych__384','brijesh_pt95','2026-02-25 08:05:37','accepted'),(79,'brijesh_pt95','mahi_rych__384','2026-02-25 08:12:41','requested'),(80,'Anju_807','ahan_rayzada','2026-02-25 08:20:41','accepted'),(81,'Anju_807','drashti_sh','2026-02-25 08:20:50','accepted'),(83,'drashti_sh','Anju_807','2026-02-25 08:21:30','accepted'),(86,'brijesh_pt95','sofiya_an_285','2026-02-25 08:28:06','accepted'),(87,'sofiya_an_285','brijesh_pt95','2026-02-25 08:30:15','accepted'),(88,'SanjuBh78','Ami89','2026-02-27 07:17:22','accepted'),(89,'Ami89','SanjuBh78','2026-02-27 07:21:55','accepted'),(91,'shivam_gh','Ami89','2026-02-27 07:38:22','accepted'),(93,'ahan_rayzada','Anju_807','2026-02-27 07:55:31','accepted'),(94,'goa_74','Ami89','2026-02-28 05:08:03','accepted'),(95,'mishita_r_890','Anju_807','2026-03-12 16:31:40','accepted'),(96,'aa12','shanaya_ah_9','2026-03-13 06:04:46','accepted');
/*!40000 ALTER TABLE `follows` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-03-16 12:43:18
