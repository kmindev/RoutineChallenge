package com.mysite.challengeproject.member;

import java.util.ArrayList;

public interface MemberService {
	public int insertMember(MemberVO member);
	public int login(MemberVO member);
	public int findId(MemberVO member);
	public int findPw(MemberVO member);
	public int updateMember(MemberVO member);
	public int getMember(MemberVO member);
	public ArrayList<MemberVO> getMemberList();	
	public int deleteMember(MemberVO member);
}
