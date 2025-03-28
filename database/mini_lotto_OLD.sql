-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 14, 2025 at 07:28 AM
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
(21, 4, 7, 20, '14-15-16-17-19-20', '2025-03-12 13:51:09'),
(22, 4, 8, 20, '14-15-16-17-19-20', '2025-03-12 14:06:37'),
(23, 4, 9, 20, '14-15-16-17-19-20', '2025-03-14 02:41:12'),
(24, 4, 9, 20, '14-15-16-17-19-20', '2025-03-14 03:15:35'),
(25, 4, 9, 20, '14-15-16-17-19-20', '2025-03-14 03:18:40'),
(26, 4, 9, 20, '14-15-16-17-19-20', '2025-03-14 03:21:06'),
(27, 4, 11, 20, '14-15-16-17-19-20', '2025-03-14 03:36:40'),
(28, 4, 12, 20, '14-15-16-17-19-20', '2025-03-14 03:49:13'),
(29, 4, 13, 20, '14-15-16-17-19-20', '2025-03-14 03:52:52'),
(30, 4, 14, 20, '14-15-16-17-19-20', '2025-03-14 04:07:01'),
(31, 4, 14, 20, '14-15-16-17-19-20', '2025-03-14 04:11:24'),
(32, 4, 15, 20, '14-15-16-17-19-21', '2025-03-14 05:07:50'),
(33, 4, 15, 20, '14-15-16-17-19-22', '2025-03-14 05:08:24'),
(34, 4, 15, 20, '14-15-16-17-19-22', '2025-03-14 05:08:31'),
(35, 4, 15, 20, '14-15-16-17-19-22', '2025-03-14 05:08:34'),
(36, 4, 15, 20, '14-15-16-17-19-22', '2025-03-14 05:08:37'),
(37, 4, 15, 20, '14-15-16-17-19-22', '2025-03-14 05:08:39'),
(38, 4, 15, 20, '14-15-16-17-19-22', '2025-03-14 05:08:42'),
(39, 4, 15, 20, '14-15-16-17-19-22', '2025-03-14 05:08:43'),
(40, 4, 15, 20, '14-15-16-17-19-22', '2025-03-14 05:08:45'),
(41, 4, 15, 20, '14-15-16-17-19-22', '2025-03-14 05:08:49'),
(42, 4, 15, 20, '14-15-16-17-19-22', '2025-03-14 05:08:51'),
(43, 4, 15, 20, '14-15-16-17-19-22', '2025-03-14 05:08:53'),
(44, 4, 15, 20, '14-15-16-17-19-22', '2025-03-14 05:08:55'),
(45, 4, 15, 20, '14-15-16-17-19-22', '2025-03-14 05:08:57'),
(46, 4, 15, 20, '14-15-16-17-19-22', '2025-03-14 05:09:00'),
(47, 4, 15, 20, '14-15-16-17-19-22', '2025-03-14 05:09:02'),
(48, 4, 15, 20, '14-15-16-17-19-22', '2025-03-14 05:09:03'),
(49, 4, 15, 20, '14-15-16-17-19-22', '2025-03-14 05:09:06'),
(50, 4, 15, 20, '14-15-16-17-19-20', '2025-03-14 05:09:13'),
(51, 4, 15, 20, '14-15-16-17-19-20', '2025-03-14 05:09:15'),
(52, 4, 16, 20, '14-15-16-17-19-20', '2025-03-14 05:39:15'),
(53, 4, 17, 20, '14-15-16-17-19-20', '2025-03-14 06:19:33');

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
(305, '14-15-16-17-19-20', 6, 1, '2025-03-12 13:50:36'),
(306, '30-31-17-11-34-40', 7, 1, '2025-03-12 14:06:00'),
(307, '31-41-16-12-5-22', 8, 1, '2025-03-12 14:06:44'),
(309, '5-18-1-14-29-36', 9, 1, '2025-03-14 03:15:54'),
(310, '40-16-34-14-30-5', 9, 1, '2025-03-14 03:18:51'),
(311, '24-38-10-15-37-42', 9, 1, '2025-03-14 03:21:14'),
(312, '12-8-2-42-15-4', 10, 1, '2025-03-14 03:30:33'),
(313, '14-15-16-17-19-20', 11, 1, '2025-03-14 03:36:48'),
(314, '14-15-16-17-19-20', 11, 1, '2025-03-14 03:41:20'),
(315, '14-15-16-17-19-20', 11, 1, '2025-03-14 03:43:59'),
(316, '14-15-16-17-19-20', 12, 1, '2025-03-14 03:49:18'),
(317, '14-15-16-17-19-20', 13, 1, '2025-03-14 03:52:57'),
(318, '14-15-16-17-19-20', 14, 1, '2025-03-14 04:07:21'),
(319, '14-15-16-17-19-20', 14, 1, '2025-03-14 04:11:31'),
(320, '14-15-16-17-19-20', 15, 1, '2025-03-14 05:09:46'),
(321, '14-15-16-17-19-20', 16, 1, '2025-03-14 05:39:27');

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
(7, '2025-03-12 13:50:36'),
(8, '2025-03-12 14:06:00'),
(9, '2025-03-12 14:06:45'),
(10, '2025-03-14 03:21:16'),
(11, '2025-03-14 03:30:33'),
(12, '2025-03-14 03:44:01'),
(13, '2025-03-14 03:49:18'),
(14, '2025-03-14 03:52:59'),
(15, '2025-03-14 04:11:45'),
(16, '2025-03-14 05:09:52'),
(17, '2025-03-14 05:39:29');

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `notification_id` int(6) NOT NULL,
  `user_id` int(6) NOT NULL,
  `notification_type` enum('round_won','round_lost','wallet_add','wallet_deduct') NOT NULL,
  `notification_message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`notification_id`, `user_id`, `notification_type`, `notification_message`, `created_at`) VALUES
(1, 4, 'round_lost', '😢 Sorry! Your bet 14-15-16-17-19-20 did not win this round.', '2025-03-14 03:21:14'),
(2, 4, 'round_lost', '😢 Sorry! Your bet 14-15-16-17-19-20 did not win this round.', '2025-03-14 03:21:15'),
(3, 4, 'round_lost', '😢 Sorry! Your bet 14-15-16-17-19-20 did not win this round.', '2025-03-14 03:21:15'),
(4, 4, 'round_lost', '😢 Sorry! Your bet 14-15-16-17-19-20 did not win this round.', '2025-03-14 03:21:16'),
(5, 4, 'round_won', '🎉 Congratulations! Your bet 14-15-16-17-19-20 won ₱1000320.', '2025-03-14 03:44:00'),
(6, 4, 'round_won', '🎉 Congratulations! Your bet 14-15-16-17-19-20 won ₱1000020.', '2025-03-14 03:49:18'),
(7, 4, 'round_won', '🎉 Congratulations! Your bet 14-15-16-17-19-20 won ₱1000020.', '2025-03-14 03:52:58'),
(8, 4, 'round_won', '🎉 Congratulations! Your bet 14-15-16-17-19-20 won ₱1000040.', '2025-03-14 04:11:40'),
(9, 4, 'round_won', '🎉 Congratulations! Your bet 14-15-16-17-19-20 won ₱1000400.', '2025-03-14 05:09:51'),
(10, 4, 'wallet_deduct', '💸 ₱20 has been deducted from your wallet for your bet.', '2025-03-14 05:39:15'),
(11, 4, 'round_won', '🎉 Congratulations! Your bet 14-15-16-17-19-20 won ₱1000020.', '2025-03-14 05:39:28'),
(12, 4, 'wallet_deduct', '💸 ₱20 has been deducted from your wallet for your bet.', '2025-03-14 06:19:33');

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
(1, 1000020);

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
(4, 'what', '43310637a56859f839b48859e2faf0b181e0017137607e3d60704c61adfb5ab9', 3000000),
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
(14, 4, 304, 19),
(15, 4, 313, 27),
(16, 4, 314, 27),
(17, 4, 315, 27),
(18, 4, 316, 28),
(19, 4, 317, 29),
(20, 4, 318, 30),
(21, 4, 319, 30),
(22, 4, 320, 50),
(23, 4, 321, 52);

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
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`notification_id`),
  ADD KEY `fks_user_id` (`user_id`);

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
  MODIFY `bet_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `draw_result`
--
ALTER TABLE `draw_result`
  MODIFY `draw_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=322;

--
-- AUTO_INCREMENT for table `game_rounds`
--
ALTER TABLE `game_rounds`
  MODIFY `round_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `notification_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

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
  MODIFY `win_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

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
-- Constraints for table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `fks_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
