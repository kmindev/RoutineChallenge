package com.mysite.challengeproject.member;

import java.util.ArrayList;

public interface MemberService {
	public int insertMember(MemberVO member);
	public int login(MemberVO member);
	public String findId(MemberVO member);
	public int findPw(MemberVO member);
	public int updateMember(MemberVO member);
	public MemberVO getMember(MemberVO member);
	public ArrayList<MemberVO> getMemberList();	
	public int deleteMember(MemberVO member);
}
