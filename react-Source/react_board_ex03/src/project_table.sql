create table userInfo_tbl (
user_id 		varchar(20) primary key,
user_pw 		varchar(20) not null,
user_name 		varchar(20) not null,
user_email 		varchar(20),
user_address 	varchar(50) not null,
user_phone 		varchar(20) not null
);

create table board_tbl (
board_num 			int auto_increment,
board_title 		varchar(500) not null,
board_writer 		varchar(20) not null,
board_content 		varchar(500) not null,
board_location 		varchar(50) not null,
board_date 			datetime default current_timestamp,
board_store			varchar(30),
primary key (board_num)
);

create table storeInfo_tbl (
store_id 				int(15) primary key,
store_pw 				varchar(30) not null,
store_name 				varchar(30) not null,
store_pname 			varchar(30) not null,
store_phone 			varchar(30) not null,
store_category			varchar(20)	NOT NULL,
store_maxDeliveryTime	int(3) not null,
store_operationHour		varchar(255) NULL,
store_closedDay			varchar(255) NULL,
store_deliveryFee 		int(11)	NOT NULL
);

CREATE TABLE menu_tbl (
menu_id				int(15) auto_increment PRIMARY KEY,
menu_storeId		int(15),
menu_name			varchar(255) NOT NULL unique key,
menu_price			int(11)	NOT NULL,
menu_pictureUrl		text NULL
); 

CREATE TABLE order_tbl (
order_id			bigint(20) PRIMARY KEY,
order_storeName		text(20) NOT NULL,
order_userId		varchar(20)	NOT NULL,
order_totalPrice	int(11)	NOT NULL,
order_request		varchar(255) NULL
);

create table comment_tbl (
comment_num       int auto_increment primary key,
comment_boardNum	int,
comment_name     varchar(20) NOT NULL,
comment_content   varchar(500),
comment_price    int(11) NOT NULL
);

alter table order_tbl add foreign key (order_userId) references userInfo_tbl (user_id);

alter table menu_tbl add foreign key (menu_storeId) references storeInfo_tbl (store_id);

alter table comment_tbl add foreign key (comment_num) references board_tbl (board_num);

select * from  userInfo_tbl;
desc userInfo_tbl;

select * from board_tbl;
desc board_tbl;

select * from storeInfo_tbl;
desc storeInfo_tbl;

select * from menu_tbl;
desc menu_tbl;

select * from order_tbl;
desc order_tbl;

select * from comment_tbl;
select * from board_tbl;
select * from storeInfo_tbl;
desc comment_tbl;
desc board_tbl;

INSERT INTO comment_tbl (comment_name, comment_content, comment_price, comment_boardNum) VALUES ('asd', '123', 123, (SELECT board_num FROM board_tbl));

SELECT comment_name, comment_content, comment_price FROM comment_tbl, board_tbl WHERE comment_tbl.comment_boardNum = board_tbl.board_num;

SELECT comment_name, comment_content, comment_price FROM comment_tbl WHERE comment_tbl.comment_boardNum = 4;

SELECT board_num, board_title, board_write, board_location, DATE_FORMAT(BOARD_DATE, "%y-%m-%d") AS BOARD_DATE FROM board_tbl, storeinfo_tbl WHERE board_category = storeinfo_tbl.store_id(?);

ALTER TABLE board_tbl ADD board_store varchar(100) after board_date;

ALTER TABLE comment_tbl ADD comment_userId varchar(100) after comment_price;

INSERT INTO menu_tbl (menu_pictureUrl, menu_name, menu_price) values (1, 1, 1);

SELECT menu_pictureUrl, menu_name, menu_price FROM menu_tbl;

UPDATE menu_tbl SET menu_pictureUrl = 0, menu_name = 324, menu_price = 555 WHERE menu_name = 123;

UPDATE menu_tbl SET menu_pictureUrl = 1, menu_name = 555, menu_price = 111 WHERE menu_name = 324;

SELECT COUNT(*) AS COUNT FROM board_tbl WHERE board_store = '?hosik';
SELECT COUNT(*) AS COUNT FROM board_tbl WHERE board_store = '?bbq';

INSERT INTO comment_tbl (comment_name, comment_content, comment_price, comment_boardNum) VALUES ('hhj1210', 0, 13, 28);

DELETE FROM comment_tbl WHERE comment_name = 'SDASSA' and comment_userId = 'hhj1210';