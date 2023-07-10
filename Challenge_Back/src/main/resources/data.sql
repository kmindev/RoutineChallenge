CREATE database onedaychallenge;    -- onedaychallenge 데이터베이스 생성

USE onedaychallenge;

CREATE TABLE `member` (  -- member 테이블 생성
                          `member_name` VARCHAR(5) NOT NULL,
                          `member_id`	VARCHAR(15)	NOT NULL,
                          `member_password` VARCHAR(15) NOT NULL,
                          `member_email` VARCHAR(50) NOT NULL,
                          `member_nickname` VARCHAR(10) NOT NULL,
                          `member_profile` VARCHAR(150),
                          `member_birth` DATE,
                          `member_theme` VARCHAR(20),
                          PRIMARY KEY(`member_id`) -- 기본키 지정
);

CREATE TABLE `challenge` ( -- challenge 테이블 생성
                             `challenge_num` INT NOT NULL AUTO_INCREMENT,
                             `challenge_creater`	VARCHAR(15)	NOT NULL,
                             `challenge_title` VARCHAR(20) NOT NULL,
                             `challenge_theme`	VARCHAR(20) NOT NULL,
                             `challenge_start` DATETIME NOT NULL,
                             `challenge_end` DATETIME NOT NULL,
                             `challenge_cycle` INT NOT NULL,
                             `challenge_intro` VARCHAR(100) NOT NULL,
                             `challenge_content` VARCHAR(500)	NOT NULL,
                             `challenge_thumbnail` VARCHAR(150) NOT NULL,
                             `challenge_readcount` INT NOT NULL,
                             PRIMARY KEY(`challenge_num`),
                             FOREIGN KEY (`challenge_creater`) REFERENCES member (`member_id`) -- member 테이블의 meber_id를 참조해서 member_id를 외래키로 지정
);

CREATE TABLE `challenge_member` ( -- challenge_member table 생성
                                    `entry_num`	INT NOT NULL AUTO_INCREMENT,
                                    `challenge_num` INT NOT NULL,
                                    `member_id`	VARCHAR(15)	NOT NULL,
                                    `attend_date` DATETIME NOT NULL,
                                    PRIMARY KEY(`entry_num`),
                                    FOREIGN KEY (`challenge_num`) REFERENCES challenge (`challenge_num`), -- challenge 테이블의 challenge_id를 참조해서 challenge_id를 외래키로 지정
                                    FOREIGN KEY (`member_id`) REFERENCES member (`member_id`) -- member 테이블의 meber_id를 참조해서 member_id를 외래키로 지정
);

CREATE TABLE `board` ( -- board 테이블 생성
                         `board_num` INT NOT NULL AUTO_INCREMENT,
                         `member_id` VARCHAR(15) NOT NULL,
                         `challenge_num` INT NOT NULL,
                         `board_content` VARCHAR(100) NOT NULL,
                         `board_date` DATETIME NOT NULL,
                         PRIMARY KEY(`board_num`),
                         FOREIGN KEY (`challenge_num`) REFERENCES challenge (`challenge_num`), -- challenge 테이블의 challenge_id를 참조해서 challenge_id를 외래키로 지정
                         FOREIGN KEY (`member_id`) REFERENCES member (`member_id`) -- member 테이블의 meber_id를 참조해서 member_id를 외래키로 지정
);

-- 테이블 구조 확인
DESC member;
DESC challenge;
DESC challenge_member;
DESC board;
