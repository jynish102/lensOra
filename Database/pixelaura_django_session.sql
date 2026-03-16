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
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('1ax6l2qwqy5z9dx7rg746qg5kzbzs9wr','eyJ1c2VyIjoiU2FuanU3OCJ9:1vch00:p-aJm7TrdErmJLjB_yGutgQyMphr0kzOqOF6fuZv_lU','2026-01-19 09:35:40.343587'),('3418f3j5ztdz29hvm1l6ykwn10k14b8l','eyJ1c2VyIjoiQW1pODkifQ:1veT9j:A4eza6GwN_G3u3FVUqV3lcPIFPJk_x0B4uFKFgWKBJw','2026-01-24 07:13:03.805146'),('cb92f8dcrs9chp4a33eqtu5mymb14075','eyJ1c2VyIjoiQW5qdV84MDcifQ:1vx0KO:XwyJt51FHrL1-iCmexaQiUwj7uFwg54tLi9kNWA_4aY','2026-03-16 10:16:40.078080'),('chz3irsetri5sj7hgiushfkkenh632ss','.eJxVjEEOwiAQRe_C2hBgoFSX7j0DmYFBqoYmpV0Z7y5NutDte-__twi4rSVsjZcwJXERIE6_jDA-ue4iPbDeZxnnui4TyT2Rh23yNid-XY_276BgK309OAcmowY2kRSopKIaHVtrtKeUzRlG8qB9B5DQONXbwTu0yJyRnPh8AcSSN4A:1vqP8f:c8JS3nwVUg68f4ajl6rEmQfMFKLTZr9y_iYKPgIO1yQ','2026-02-26 05:21:17.699395'),('g4cfnplloa52fpddm5hdfxgpfxanqqz8','eyJ1c2VyIjoiQW1pODkifQ:1venE5:AJ3GcB9MM8UzYp94qWU-oe_4peh9SIM60ULbh9GsMOQ','2026-01-25 04:38:53.158998'),('k8y0qkkzqdix8qca934ctkvbnpxfxsk8','eyJ1c2VyIjoiQW1pODkifQ:1vdkay:I8v6Sk4nWkOyOOrUhdhsgdDJB61Do8TKMcNm5Pxh_9E','2026-01-22 07:38:12.116600'),('n38twke4p8hr5aoq4c5pd3n2g6sls068','eyJ1c2VyIjoic3VuMzgifQ:1vjV4D:FWDfVRjKiqeHuON-l6GR7rZTBAeO7IUqygrXy6TEaHQ','2026-02-07 04:16:09.977701'),('qgjpnosdh89r2goejc3q27rmc74vdhrq','eyJ1c2VyIjoicGF5YWxfNjkzIn0:1vxSTN:uCd0Hjcu37f1ZgQMBy9eWX8FyUkZIjLW5Ie3aHA4CZU','2026-03-17 16:19:49.770161'),('rhm1emq68mwmvv09a7gs1ubwcmr1k1pt','eyJ1c2VyIjoiQW1pODkifQ:1vxepO:gqr6g6iIO5z-HtE4HVqX0C17BbL3Q6AiZWBrhprspFE','2026-03-18 05:31:22.849978'),('rk6q4ojyl47guy52dzs47o6rubu6tpd9','eyJ1c2VyIjoicGF5YWxfNjkzIn0:1vxSTN:uCd0Hjcu37f1ZgQMBy9eWX8FyUkZIjLW5Ie3aHA4CZU','2026-03-17 16:19:49.687674'),('ss6jd9a257xc86qxynzybf0zvhca921e','eyJ1c2VyIjoiQW1pODkifQ:1ve6qz:PYXsIDiub3ExDbXdOY9KEXjK7lkvourQI0fg9p1ceO0','2026-01-23 07:24:13.259367'),('t8ckg60lgcrgjx6zimsj6647dgf6lwls','eyJ1c2VyIjoiQW1pODkifQ:1vdW2C:Xw3XyEaFUxPidYwC_AnYDEUEG2mhV6B1_TwAaZlZzTo','2026-01-21 16:05:20.404792'),('tag1e34w17msrqjnygvpgnwoh2n8jdsk','eyJ1c2VyIjoiU2FuanU3OCJ9:1vhK4q:li8-IFoaAmI8-TtnsSegce00yfGVVwGl2GRBopa-OUI','2026-02-01 04:07:48.337380');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
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
