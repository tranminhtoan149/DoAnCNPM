-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 03, 2021 lúc 07:59 AM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 7.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `dbdoancnpm`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account_info`
--

CREATE TABLE `account_info` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `level` int(2) DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `phonenumber` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(1024) NOT NULL,
  `nationality` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `account_info`
--

INSERT INTO `account_info` (`id`, `username`, `password`, `level`, `birth`, `phonenumber`, `name`, `email`, `address`, `nationality`, `city`) VALUES
(1, 'admin', 'admin', 1, '2001-08-10', NULL, NULL, '', '', '', ''),
(2, '123', '123', 2, '0000-00-00', '091283091', 'Trần Minh Toàn', '', 'TP hồ chí minh', 'VietNam', 'TPHCM'),
(4, '1234', '1234', 2, '2002-08-10', '098171021', 'toan', '', 'Vung tau', 'Viet Nam', 'Thanh Pho');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `price` int(20) DEFAULT NULL,
  `quantity` int(10) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `src` varchar(1024) DEFAULT NULL,
  `srcDetail` varchar(1024) DEFAULT NULL,
  `alt` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`_id`, `name`, `type`, `color`, `price`, `quantity`, `description`, `src`, `srcDetail`, `alt`) VALUES
(1, 'iPhone 12 Pro Max 128GB', 'smartphone', 'Đen', 310, 5, 'iPhone 12 Pro Max 128 GB một siêu phẩm smartphone đến từ Apple. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng. Thay đổi thiết kế mới sau 6 năm Theo chu kỳ cứ mỗi 3 năm thì iPhone lại thay đổi thiết kế và 2020 là năm đánh dấu cột mốc quan trong này, vì thế rất có thể đây là thời điểm các mẫu iPhone 12 sẽ có một sự thay đổi mạnh mẽ về thiết kế. iPhone 12 Pro Max sở hữu diện mạo mới mới với khung viền được vát thẳng và mạnh mẽ như trên iPad Pro 2020, chấm dứt hơn 6 năm với kiểu thiết kế bo cong trên iPhone 6 được ra mắt lần đầu tiên vào năm 2014.', 'item1.jpg', 'item_detail1.jpg', 'None'),
(2, 'Samsung Galaxy Z Fold3 5G', 'smartphone', 'Lam', 860, 50, 'Galaxy Z Fold3 5G đánh dấu bước tiến mới của Samsung trong phân khúc điện thoại gập cao cấp khi được cải tiến về độ bền cùng những nâng cấp đáng giá về cấu hình hiệu năng, hứa hẹn sẽ mang đến trải nghiệm sử dụng đột phá cho người dùng. Đột phá thiết kế màn hình gập Đầu tiên, khung viền Galaxy Z Fold3 được hoàn thiện bằng chất liệu Armor Aluminum cao cấp nhất từ trước đến giờ nhằm tăng cường được độ bền, mà vẫn đảm bảo được trọng lượng cân đối đem tới cảm giác vô cùng chắc chắn và cao cấp.', 'item2.jpg', 'item_detail2.jpg', NULL),
(4, 'Macbook Air M1', 'laptop', 'Bạc', 50000, 48, 'Apple MacBook Air M1 2020 sở hữu các tính năng hiện đại cùng với hiệu năng mạnh mẽ từ Chip Apple M1 độc quyền từ Apple, chiếc laptop nhỏ gọn này rất phù hợp với sinh viên, nhân viên văn phòng không chỉ xử lý tốt các tác vụ văn phòng mà còn giải quyết ổn định thiết kế đồ hoạ. Thiết kế cao cấp, mỏng nhẹ Tôn lên vẻ cá tính, sang trọng, laptop được bọc bởi một lớp kim loại nguyên khối cùng với những đường nét trang nhã, tinh tế. Hơn thế nữa, với trọng lượng khá nhẹ chỉ 1.29 kg và độ mỏng từ 4.1 mm đến 16.1 mm có thể dễ dàng mang theo, chiếc laptop này sẽ là người bạn đồng hành cùng bạn mọi lúc mọi nơi như đi công tác, đi học, đi họp,...', 'item4.jpg', 'item_detail4.jpg', NULL),
(5, 'MacBook Pro 16 M1 Pro 2021', 'laptop', NULL, 40000, 44, 'Thể hiện đẳng cấp sang chảnh cùng chiếc MacBook Pro 16 M1 Pro 2021 cực kì sang trọng, cùng hiệu năng mạnh mẽ được nâng cấp với chip M1 Pro cho hiệu suất đột phá và thời lượng pin ấn tượng, đem đến cho bạn trải nghiệm tuyệt vời nhất. Hiệu năng vượt trội, chinh phục mọi tác vụ MacBook Pro 16 được trang bị con chip M1 Pro tiên tiến với 10 nhân (8 nhân hiệu suất cao + 2 nhân tiết kiệm điện) mang lại hiệu năng kinh ngạc cho bạn, chip này được sản xuất dựa trên tiến trình 5 nm, có tận 33.7 tỷ bóng bán dẫn mang đến hiệu suất nhanh hơn tới 70% so với M1, cho khả năng xử lý mượt mà mọi tác vụ từ cơ bản đến những tác vụ khắt khe nhất như chỉnh sửa hình ảnh với độ phân giải cao đều được M1 Pro giải quyết nhẹ nhàng,... Không những cho độ trễ thấp mà còn năng lượng cũng được tiết kiệm đáng kể.', 'item5.jpg', 'item_detail5.jpg', NULL),
(6, 'OPPO A74', 'smartphone', NULL, 1000, 20, 'OPPO luôn đa dạng hoá các sản phẩm của mình từ giá rẻ cho đến cao cấp. Trong đó, điện thoại OPPO A74 4G được nằm trong phân khúc tầm trung rất đáng chú ý với nhiều tính năng và smartphone cũng chính là bản nâng cấp của OPPO A73 ra mắt trước đó. Thiết kế quen thuộc, màu sắc tối giản\",\r\ntype: \"smartphone', 'item6.jpg', 'item_detail6.jpg', NULL),
(7, 'Xiaomi 11 Lite 5G NE', 'smartphone', NULL, 990, 40, 'Xiaomi 11 Lite 5G NE một phiên bản có ngoại hình rất giống với Mi 11 Lite được ra mắt trước đây. Chiếc smartphone này của Xiaomi mang trong mình một hiệu năng ổn định, thiết kế sang trọng và màn hình lớn đáp ứng tốt các tác vụ hằng ngày của bạn một cách dễ dàng. Thiết kế mỏng nhẹ, mang đến sự nổi bật cho người dùng\",\r\ntype: \"smartphone', 'item7.jpg', 'item_detail7.jpg', NULL),
(8, 'Apple Watch S6', 'watch', NULL, 990, 5, 'Thiết kế năng động, khỏe khoắn Apple Watch S6 LTE 44mm viền thép dây cao su xanh dương mang kiểu dáng sang trọng, màu sắc hiện đại, trẻ trung. Nó sở hữu màn hình OLED 1.78 inch cho khả năng hiển thị hình ảnh rực rỡ, sắc nét. Mặt đồng hồ được bảo vệ bởi lớp kính cường lực Sapphire có độ cứng cao, chống trầy xước hiệu quả. Dây đeo silicone có độ đàn hồi tốt, không thấm nước, cho cảm giác êm nhẹ suốt ngày dài.', 'item8.jpg', 'item_detail8.jpg', NULL),
(9, 'Samsung Galaxy Watch 4', 'watch', NULL, 990, 40, 'Kiểu dáng cá tính, ưa nhìn, phù hợp với đa số người dùng Samsung Galaxy Watch 4 LTE Classic 42mm sở hữu thiết kế trẻ trung, hiện đại cùng khung viền thép không gỉ sang trọng, cứng cáp, lớp kính cường lực Gorrilla Glass Dx+ bảo vệ an toàn cho đồng hồ trước những va chạm thông thường. Dây đeo silicone mềm nhẹ, đàn hồi tốt, không thấm mồ hôi, cho cảm giác thoải mái khi mang.', 'item9.jpg', 'item_detail9.jpg', NULL),
(10, 'Pin sạc dự phòng', 'accessory', NULL, 230, 86, 'Công nghệ sạc nhanh Power Delivery, PowerIQ độc quyền. Lõi pin Polymer sử dụng an toàn, bền bỉ. Thiết kế siêu mỏng nhẹ, bề mặt chống trầy xước. Dung lượng pin sạc dự phòng 10.000 mAh. Hỗ trợ sạc đồng thời 2 cổng Type C và USB tương thích hầu hết mọi thiết bị. Đèn báo dung lượng pin, sạc lại nhanh hơn với Adapter sạc hỗ trợ Type C Power Delivery. Đến từ thương hiệu Anker đứng đầu tại Mỹ.', 'item10.jpg', 'item_detail10.jpg', NULL),
(11, 'Tai nghe Bluetooth True', 'accessory', NULL, 210, 84, 'Kiểu dáng nhỏ nhắn, đeo vừa vặn, có dây đeo housing hạn chế rơi rớt. Âm thanh trong trẻo, sống động với driver 6 mm, khả năng chống ồn thụ động tối ưu. Chuẩn Bluetooth 5.0 ổn định với khoảng cách truyền lên đến 10 m. Có khả năng kháng nước và mồ hôi Housing dùng liên tục trong 5 giờ, với hộp sạc cho 15 giờ, sạc đầy chỉ trong 1.5 giờ. Điều khiển cảm ứng chạm dễ chọn nhận/kết thúc cuộc gọi, phát/dừng nhạc, chuyển bài hát,...', 'item11.jpg', 'item_detail11.jpg', NULL),
(12, 'Acer Nitro 5 Gaming', 'laptop', 'Đen', 21000, 94, 'Acer Nitro 5 Gaming AN515 57 727J i7 (NH.QD9SV.005.) sở hữu vẻ ngoài cá tính, nổi bật và được tích hợp bộ vi xử lý Intel thế hệ 11 tân tiến, card đồ hoạ rời NVIDIA GeForce RTX, hứa hẹn mang đến các trải nghiệm tuyệt vời cho người dùng. Sức mạnh nổi bật nhờ công nghệ tiên tiến', 'item12.jpg', 'item_detail12.jpg', NULL),
(13, 'Lenovo Ideapad Gaming 3', 'laptop', NULL, 29000, 150, 'Laptop Lenovo Ideapad Gaming 3 15IMH05 i7 (81Y4013UVN) là dòng laptop gaming tầm trung với thiết kế tối giản, vẻ ngoài không quá hầm hố nhưng vẫn sở hữu hiệu năng cao đáp ứng tốt từ nhu cầu làm việc đến giải trí. Thiết kế hiện đại, tối giản', 'item13.jpg', 'item_detail13.jpg', NULL),
(14, 'Loa Bluetooth JBL Charge 4', 'accessory', NULL, 1200, 129, 'Thiết kế chất liệu vải bền và vỏ cao su chắc chắn. Kết nối Bluetooh 4.2 kết nối đến 10m. Âm thanh chất lượng cao bởi bộ tản âm độc quyền của JBL. Thời gian sử dụng đến 20 tiếng và sạc lại khoảng 4 tiếng. Trang bị chuẩn chống nước IPX7. Tích hợp chức năng JBL Connect+ kết nối đến 100 loa với nhau.', 'item14.jpg', 'item_detail14.jpg', NULL),
(15, 'Điện thoại Samsung Galaxy S20', 'smartphone', '', 12000, 90, 'Samsung đã giới thiệu đến người dùng thành viên mới của dòng điện thoại thông minh S20 Series đó chính là Samsung Galaxy S20 FE. Đây là mẫu flagship cao cấp quy tụ nhiều tính năng mà Samfan yêu thích, hứa hẹn sẽ mang lại trải nghiệm cao cấp của dòng Galaxy S với mức giá dễ tiếp cận hơn', 'item15.jpg', 'item_detail15.jpg', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `transaction`
--

CREATE TABLE `transaction` (
  `_id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(20) DEFAULT NULL,
  `quantity` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `transaction`
--

INSERT INTO `transaction` (`_id`, `name`, `price`, `quantity`) VALUES
(4, 'Macbook Air M1', 50000, 2),
(5, 'MacBook Pro 16 M1 Pro 2021', 40000, 3),
(10, 'Pin sạc dự phòng', 230, 14),
(11, 'Tai nghe Bluetooth True', 210, 16),
(12, 'Acer Nitro 5 Gaming', 21000, 3),
(14, 'Loa Bluetooth JBL Charge 4', 1200, 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account_info`
--
ALTER TABLE `account_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`_id`),
  ADD KEY `name` (`name`);

--
-- Chỉ mục cho bảng `transaction`
--
ALTER TABLE `transaction`
  ADD UNIQUE KEY `id` (`_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `account_info`
--
ALTER TABLE `account_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
