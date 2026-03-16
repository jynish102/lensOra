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
-- Table structure for table `chats`
--

DROP TABLE IF EXISTS `chats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sender` varchar(45) NOT NULL,
  `receiver` varchar(45) NOT NULL,
  `message` longtext NOT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chats`
--

LOCK TABLES `chats` WRITE;
/*!40000 ALTER TABLE `chats` DISABLE KEYS */;
INSERT INTO `chats` VALUES (1,'','SanjuBh78','a','2026-02-03 08:31:30'),(2,'','Ami89','aa','2026-02-03 08:35:17'),(3,'guest','Ami89','12','2026-02-03 08:53:24'),(4,'guest','Ami89','nnnn','2026-02-03 08:54:17'),(5,'guest','Ami89','a','2026-02-03 08:58:47'),(6,'guest','ahan_rayzada','a','2026-02-03 09:11:59'),(7,'guest','ahan_rayzada','A','2026-02-03 09:18:53'),(8,'guest','ahan_rayzada','df','2026-02-03 09:22:24'),(9,'guest','ahan_rayzada','as','2026-02-03 09:23:54'),(10,'guest','Ami89','asss','2026-02-04 07:22:50'),(11,'guest','Ami89','as','2026-02-04 07:23:54'),(12,'guest','Ami89','assd','2026-02-04 07:24:11'),(13,'Anju_807','Anju_807','asas','2026-02-04 07:38:35'),(14,'Anju_807','Anju_807','mnnmnmn','2026-02-04 07:41:17'),(15,'Anju_807','Ami89','asds','2026-02-04 07:52:46'),(16,'Anju_807','SanjuBh78','n  nb','2026-02-04 07:53:25'),(17,'Anju_807','SanjuBh78','nb nb n bn nb','2026-02-04 07:53:47'),(18,'Ami89','Anju_807','nbbnbnbbnbnbnbm','2026-02-04 07:54:39'),(19,'Anju_807','Ami89','nbnbn','2026-02-04 07:55:18'),(20,'Ami89','hemang_568','asasdssdsdfsdfdsdfsdfsdfsdfsdgt7457487','2026-02-04 08:10:32'),(21,'hemang_568','Ami89','ssssdssss','2026-02-04 08:11:28'),(22,'Anju_807','Ami89','hhhhhvhgvhv','2026-02-04 08:30:20'),(23,'Ami89','Anju_807','bbbbb','2026-02-04 08:31:04'),(24,'Ami89','Anju_807','aaaaa','2026-02-06 05:45:43'),(25,'Ami89','Anju_807','asadasdasd','2026-02-06 05:45:56'),(26,'Anju_807','ahan_rayzada','nnmnmn','2026-02-27 08:30:21'),(27,'Anju_807','ahan_rayzada','nbnbnb','2026-02-27 08:30:30');
/*!40000 ALTER TABLE `chats` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-03-16 12:43:16
