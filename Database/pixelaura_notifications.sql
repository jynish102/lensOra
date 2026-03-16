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
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `is_read` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_notifications_user` (`user_id`),
  CONSTRAINT `fk_notifications_user` FOREIGN KEY (`user_id`) REFERENCES `register` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES (6,2,'Ami89 started following you',0,'2026-01-05 08:08:51'),(7,3,'Ami89 started following you',0,'2026-01-05 08:09:53'),(8,4,'Ami89 started following you',0,'2026-01-05 08:11:11'),(9,5,'Ami89 started following you',0,'2026-01-05 08:11:21'),(10,1,'Anju_807 started following you',0,'2026-01-05 09:35:15'),(11,1,'Sanju78 started following you',0,'2026-01-05 09:35:58'),(12,4,'Sanju78 started following you',0,'2026-01-05 09:36:20'),(13,1,'Sanju78 started following you',0,'2026-01-05 09:37:27'),(14,2,'Ami89 started following you',0,'2026-01-19 15:54:14'),(15,8,'drashti_sh started following you',0,'2026-01-20 07:31:42'),(16,1,'shanaya_ah_9 started following you',0,'2026-01-21 05:34:00'),(17,4,'Anju_807 started following you',0,'2026-01-21 15:44:31'),(18,1,'Anju_807 started following you',0,'2026-01-21 15:49:43'),(19,3,'Anju_807 started following you',0,'2026-01-30 15:54:44'),(20,4,'Anju_807 started following you',0,'2026-01-30 15:55:12'),(21,1,'Anju_807 started following you',0,'2026-01-30 15:58:29'),(22,1,'hemang_568 started following you',0,'2026-02-04 08:17:30'),(23,1,'hemang_568 started following you',0,'2026-02-04 08:17:36'),(24,2,'hemang_568 started following you',0,'2026-02-04 08:17:45'),(25,3,'hemang_568 started following you',0,'2026-02-04 08:17:59'),(26,4,'hemang_568 started following you',0,'2026-02-04 08:18:37'),(27,1,'vishal_pro started following you',0,'2026-02-06 06:20:20'),(28,2,'vishal_pro started following you',0,'2026-02-06 06:20:25'),(29,3,'vishal_pro started following you',0,'2026-02-06 06:20:30'),(30,4,'vishal_pro started following you',0,'2026-02-06 06:20:34'),(31,5,'vishal_pro started following you',0,'2026-02-06 06:20:39'),(32,13,'ahan_rayzada started following you',0,'2026-02-06 06:23:06'),(33,8,'Anju_807 started following you',0,'2026-02-09 05:55:18'),(34,1,'Anju_807 started following you',0,'2026-02-12 05:02:44'),(35,20,'vishal_pro started following you',0,'2026-02-13 14:08:46'),(36,13,'mahi_rych__384 started following you',0,'2026-02-13 14:09:41'),(37,2,'Ami89 started following you',0,'2026-02-17 07:20:28'),(38,1,'SanjuBh78 started following you',0,'2026-02-17 07:25:04'),(39,1,'SanjuBh78 started following you',0,'2026-02-17 07:25:30'),(40,2,'SanjuBh78 started following you',0,'2026-02-17 07:25:42'),(41,1,'Anju_807 started following you',0,'2026-02-18 07:16:06'),(42,18,'Ami89 started following you',0,'2026-02-24 07:23:35'),(43,1,'Anju_807 started following you',0,'2026-02-24 07:24:37'),(44,1,'mahi_rych__384 started following you',0,'2026-02-24 08:00:47'),(45,3,'mahi_rych__384 started following you',0,'2026-02-24 08:00:58'),(46,3,'mahi_rych__384 requested to follow you',0,'2026-02-24 08:36:04'),(47,3,'mahi_rych__384 requested to follow you',0,'2026-02-24 08:36:14'),(48,3,'mahi_rych__384 requested to follow you',0,'2026-02-24 08:37:49'),(49,3,'mahi_rych__384 requested to follow you',0,'2026-02-24 08:37:54'),(50,1,'mahi_rych__384 requested to follow you',0,'2026-02-24 08:38:09'),(51,4,'mahi_rych__384 started following you',0,'2026-02-24 08:38:23'),(52,20,'Ami89 started following you',0,'2026-02-24 08:41:16'),(53,20,'Ami89 started following you',0,'2026-02-24 08:41:59'),(54,20,'SanjuBh78 started following you',0,'2026-02-24 08:42:35'),(55,20,'SanjuBh78 started following you',0,'2026-02-24 08:45:00'),(56,20,'SanjuBh78 started following you',0,'2026-02-24 08:45:34');
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
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
