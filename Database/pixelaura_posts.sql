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
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` longtext NOT NULL,
  `username` varchar(45) NOT NULL,
  `caption` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (16,'/PixelAuraplus/static/images/posts/831118.jpg','SanjuBh78','Devil In mY world.\r\nDetective cloi'),(17,'/PixelAuraplus/static/images/posts/858245.png','shanaya_ah_9','Shanaya Ahan'),(18,'/PixelAuraplus/static/images/posts/75772.jpg','Anju_807','Anju_807'),(19,'/PixelAuraplus/static/images/posts/wp2500782.jpg','ahan_rayzada','Ahan_RaYzada'),(20,'/PixelAuraplus/static/images/posts/img1.jpeg','shivam_gh','Shivam Gandhi'),(21,'/PixelAuraplus/static/images/posts/marvel-studios-avengers-age-of-ultron-2015-desktop-wallpaper-hd-1920×1200-wallpaper-preview.jpg','drashti_sh','Drashti Shivam Gandhi'),(22,'/PixelAuraplus/static/images/posts/img1.jpg','khushi_rajput_580','Khushi Rajput'),(23,'/PixelAuraplus/static/images/posts/img100.jpg','Ami89','Ammita Atr'),(25,'/PixelAuraplus/static/images/posts/thumb-1920-284151.jpg','Anju_807','Sherluck Homes : Anju_807'),(26,'/PixelAuraplus/static/images/posts/img1.jpeg','hemang_568','Nature '),(27,'/PixelAuraplus/static/images/posts/sample-video.mp4','Ami89','Amita Atr: new design'),(28,'/PixelAuraplus/static/images/posts/vedio2.mp4','vishal_pro','Vedeio: Vishal_Sindhal'),(30,'/PixelAuraplus/static/images/posts/5c1c9f4ff33ea-wallpaper-preview.jpg','Anju_807','loki bro of '),(31,'/PixelAuraplus/static/images/posts/709451.jpg','Anju_807','Avtar A new plcace with new human'),(33,'/PixelAuraplus/static/images/posts/912977.jpg','vishal_pro','Hulk'),(34,'/PixelAuraplus/static/images/posts/819478.jpg','mahi_rych__384','Mahi Raychand'),(35,'/PixelAuraplus/static/images/posts/pi_2.jpg','sofiya_an_285','sofi'),(36,'/PixelAuraplus/static/images/posts/1345088.jpeg','shivraj14','by shivraj 25 feb 2025'),(41,'/PixelAuraplus/static/images/posts/desktop-wallpaper-wonder-woman-full-and-backgrounds-wonder-woman.jpg','mishita_r_890','MishitaR56  today i. 12 march'),(42,'/PixelAuraplus/static/images/posts/521145.jpg','bhavun_patel','Avaytra today yani 13 March');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
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
