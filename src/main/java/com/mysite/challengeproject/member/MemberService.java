package com.mysite.challengeproject.member;

import java.util.ArrayList;

public interface MemberService {
	public int insertMember(MemberVO member); // 회원가입
	public int login(MemberVO member); // 로그인
	public String findId(MemberVO member); // 아이디 찾기
	public String findPw(MemberVO member); // 비밀번호 찾기
	public MemberVO getMember(MemberVO member);	// 회원 정보 조회
	public int updateMember(MemberVO member); // 회원 정보 수정
//	public ArrayList<MemberVO> getMemberList(); // 회원 리스트 조회 (관리자)
	public int deleteMember(MemberVO member); // 회원 탈퇴
}
