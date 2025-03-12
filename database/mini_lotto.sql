-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 12, 2025 at 02:51 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mini_lotto`
--

-- --------------------------------------------------------

--
-- Table structure for table `bet`
--

CREATE TABLE `bet` (
  `bet_id` int(6) NOT NULL,
  `user_id` int(6) NOT NULL,
  `round_id` int(11) NOT NULL,
  `bet_amount` int(50) NOT NULL,
  `bet_number` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bet`
--

INSERT INTO `bet` (`bet_id`, `user_id`, `round_id`, `bet_amount`, `bet_number`, `created_at`) VALUES
(12, 3, 1, 20, '14-15-16-17-18-19', '2025-03-12 12:19:45'),
(13, 3, 1, 20, '14-15-16-17-18-19', '2025-03-12 12:22:50'),
(14, 3, 1, 20, '14-15-16-17-18-19', '2025-03-12 12:24:00'),
(15, 3, 1, 20, '14-15-16-17-18-19', '2025-03-12 12:26:08'),
(16, 4, 1, 20, '14-15-16-17-18-19', '2025-03-12 12:33:02'),
(17, 4, 2, 20, '14-15-16-17-18-19', '2025-03-12 13:41:40'),
(18, 4, 4, 20, '14-15-16-17-18-19', '2025-03-12 13:47:32'),
(19, 4, 5, 20, '14-15-16-17-19-20', '2025-03-12 13:49:06'),
(20, 4, 7, 20, '14-15-16-17-19-20', '2025-03-12 13:50:49'),
(21, 4, 7, 20, '14-15-16-17-19-20', '2025-03-12 13:51:09');

-- --------------------------------------------------------

--
-- Table structure for table `draw_result`
--

CREATE TABLE `draw_result` (
  `draw_id` int(6) NOT NULL,
  `winning_no` varchar(50) NOT NULL,
  `round_id` int(11) NOT NULL,
  `pot_id` int(6) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `draw_result`
--

INSERT INTO `draw_result` (`draw_id`, `winning_no`, `round_id`, `pot_id`, `created_at`) VALUES
(294, '14-15-16-17-18-19', 1, 1, '2025-03-12 12:46:11'),
(295, '14-15-16-17-18-19', 1, 1, '2025-03-12 12:46:12'),
(296, '14-15-16-17-18-19', 1, 1, '2025-03-12 13:18:37'),
(297, '14-15-16-17-18-19', 1, 1, '2025-03-12 13:27:44'),
(298, '14-15-16-17-18-19', 1, 1, '2025-03-12 13:28:52'),
(299, '14-15-16-17-18-19', 1, 1, '2025-03-12 13:40:54'),
(300, '14-15-16-17-18-19', 2, 1, '2025-03-12 13:42:30'),
(301, '14-15-16-17-18-19', 3, 1, '2025-03-12 13:44:22'),
(302, '14-15-16-17-18-19', 3, 1, '2025-03-12 13:47:05'),
(303, '14-15-16-17-18-19', 4, 1, '2025-03-12 13:47:48'),
(304, '14-15-16-17-19-20', 5, 1, '2025-03-12 13:49:46'),
(305, '14-15-16-17-19-20', 6, 1, '2025-03-12 13:50:36');

-- --------------------------------------------------------

--
-- Table structure for table `game_rounds`
--

CREATE TABLE `game_rounds` (
  `round_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `game_rounds`
--

INSERT INTO `game_rounds` (`round_id`, `created_at`) VALUES
(1, '2025-03-12 12:19:43'),
(2, '2025-03-12 13:40:55'),
(3, '2025-03-12 13:42:30'),
(4, '2025-03-12 13:47:06'),
(5, '2025-03-12 13:47:49'),
(6, '2025-03-12 13:49:46'),
(7, '2025-03-12 13:50:36');

-- --------------------------------------------------------

--
-- Table structure for table `pot_money`
--

CREATE TABLE `pot_money` (
  `pot_id` int(6) NOT NULL,
  `pot_amount` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pot_money`
--

INSERT INTO `pot_money` (`pot_id`, `pot_amount`) VALUES
(1, 1000200);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(6) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_money` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `password`, `user_money`) VALUES
(1, 'hahaha', '1c0e32618850554faf5bd33fe70f79ed11df1f8b3de363460464854c0629dbc5', 1000),
(2, 'hahahaha', '1c0e32618850554faf5bd33fe70f79ed11df1f8b3de363460464854c0629dbc5', NULL),
(3, 'niggers', 'ef752c879e03a6307c0934d98f72a1200eba4dec00d147ec5fb8b5f64ca64af1', NULL),
(4, 'what', '43310637a56859f839b48859e2faf0b181e0017137607e3d60704c61adfb5ab9', NULL),
(5, 'wew', '1c0e32618850554faf5bd33fe70f79ed11df1f8b3de363460464854c0629dbc5', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `win_result`
--

CREATE TABLE `win_result` (
  `win_id` int(6) NOT NULL,
  `user_id` int(6) NOT NULL,
  `draw_id` int(6) NOT NULL,
  `bet_id` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `win_result`
--

INSERT INTO `win_result` (`win_id`, `user_id`, `draw_id`, `bet_id`) VALUES
(12, 4, 300, 17),
(13, 4, 303, 18),
(14, 4, 304, 19);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bet`
--
ALTER TABLE `bet`
  ADD PRIMARY KEY (`bet_id`),
  ADD KEY `fk_user_id` (`user_id`),
  ADD KEY `round_id` (`round_id`);

--
-- Indexes for table `draw_result`
--
ALTER TABLE `draw_result`
  ADD PRIMARY KEY (`draw_id`),
  ADD KEY `pot_id` (`pot_id`),
  ADD KEY `fk_round_id` (`round_id`);

--
-- Indexes for table `game_rounds`
--
ALTER TABLE `game_rounds`
  ADD PRIMARY KEY (`round_id`);

--
-- Indexes for table `pot_money`
--
ALTER TABLE `pot_money`
  ADD PRIMARY KEY (`pot_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `win_result`
--
ALTER TABLE `win_result`
  ADD PRIMARY KEY (`win_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `draw_id` (`draw_id`),
  ADD KEY `bet_id` (`bet_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bet`
--
ALTER TABLE `bet`
  MODIFY `bet_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `draw_result`
--
ALTER TABLE `draw_result`
  MODIFY `draw_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=306;

--
-- AUTO_INCREMENT for table `game_rounds`
--
ALTER TABLE `game_rounds`
  MODIFY `round_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `pot_money`
--
ALTER TABLE `pot_money`
  MODIFY `pot_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `win_result`
--
ALTER TABLE `win_result`
  MODIFY `win_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bet`
--
ALTER TABLE `bet`
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `round_id` FOREIGN KEY (`round_id`) REFERENCES `game_rounds` (`round_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `draw_result`
--
ALTER TABLE `draw_result`
  ADD CONSTRAINT `fk_round_id` FOREIGN KEY (`round_id`) REFERENCES `game_rounds` (`round_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pot_id` FOREIGN KEY (`pot_id`) REFERENCES `pot_money` (`pot_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `win_result`
--
ALTER TABLE `win_result`
  ADD CONSTRAINT `bet_id` FOREIGN KEY (`bet_id`) REFERENCES `bet` (`bet_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `draw_id` FOREIGN KEY (`draw_id`) REFERENCES `draw_result` (`draw_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
