package com.mysite.challengeproject.member;

import java.sql.Date;

import lombok.Data;

@Data
public class MemberVO {
	private String member_name; // 회원 이름
	private String member_id; // 회원 아이디(기본키)
	private String member_password; // 회원 비밀번호
	private String member_email; // 회원 이메일
	private String member_nickname; // 회원 닉네임
	private String member_profile; // 회원 프로필 이미지 저장명
	private Date member_birth; // 회원 생년월일 DATE(YY/MM/DD) 년/월/일
	private String theme; // 회원 관심 주제
}
