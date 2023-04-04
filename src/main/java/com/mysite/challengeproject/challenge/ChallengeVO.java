package com.mysite.challengeproject.challenge;

import java.sql.Date;

import lombok.Data;

@Data
public class ChallengeVO {
	
	private int challenge_num; // 챌린지 num(기본키) AI
	private String challenge_creater; // 챌린지 생성자(member_id) 외래키
	private String challenge_title;  // 챌린지 제목
	private String challenge_theme; // 챌린지 주제
	private Date challenge_start; // 챌린지 시작날짜 DATETIME(YYYY/MM/DD 00:00:00) 년/월/일 시/분/초
	private Date challenge_end; //  챌린지 종료날짜 DATETIME(YYYY/MM/DD 00:00:00) 년/월/일 시/분/초
	private String challenge_cycle; // 챌린지 주기
	private String challenge_intro; // 챌린지 소개
	private String challenge_content; // 챌린지 상세내용
	private String challenge_thumbnail; // 챌린지 대표사진 저장명
	private int challenge_readcount; // 챌린지 조회수

}
