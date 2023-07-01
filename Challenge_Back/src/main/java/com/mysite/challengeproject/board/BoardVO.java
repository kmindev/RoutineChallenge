package com.mysite.challengeproject.board;

import java.sql.Date;

import lombok.Data;

@Data
public class BoardVO {
	private int board_num; // board num(기본키) AI
	private String member_id; // 작성자 (외래키)
	private int challenge_num; // 챌린지 id (외래키)
	private String board_content; // 내용
	private Date board_date; // 작성날짜 DATETIME(YY/MM/DD XX:XX:XX) 년/월/일 시/분/초
}
