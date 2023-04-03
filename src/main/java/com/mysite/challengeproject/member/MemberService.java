package com.mysite.challengeproject.member;

import java.io.IOException;
import java.util.ArrayList;

import org.springframework.web.multipart.MultipartFile;

public interface MemberService {
	public int insertMember(MemberDTO memberDTO, MultipartFile member_profile) throws IOException; // 회원가입
	public int login(MemberVO member); // 로그인
	public String findId(MemberVO member); // 아이디 찾기
	public String findPw(MemberVO member); // 비밀번호 찾기
	public MemberVO getMember(String member_id);	// 회원 정보 조회
	public int updateMember(MemberVO member); // 회원 정보 수정
	public int deleteMember(String member_id); // 회원 탈퇴
}
