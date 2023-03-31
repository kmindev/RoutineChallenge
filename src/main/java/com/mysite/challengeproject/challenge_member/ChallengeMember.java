package com.mysite.challengeproject.challenge_member;

import java.sql.Date;

import lombok.Data;

@Data
public class ChallengeMember {
	private int entry_num; // challege_member 기본키 AI
	private int challenge_num; // 챌린지 num (외래키)
	private String member_id; // 참여 회원(외래키)
	private Date attend_date; // 가입(참여) 날짜; DATETIME(YY/MM/DD XX:XX:XX)년/월/일 시/분/초
}
