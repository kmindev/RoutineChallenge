package com.mysite.challengeproject.member;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

@Service("memberService")
public class MemberServiceImpl implements MemberService {
	
	private MemberMapper mapper;
	
	public MemberServiceImpl(MemberMapper mapper) {
		this.mapper = mapper;
	}

	
	@Override
	public int insertMember(MemberVO member) {
		int res = mapper.insertMember(member);
		return res;
	}
	
	@Override
	public int login(MemberVO member) {
		int res = mapper.login(member);
		return res;  //id와 pw가 일치하는 행 반환
	}
	
	@Override
	public int findId(MemberVO member) {
		int res = mapper.findId(member);
		return res;
	}
	
	@Override
	public int findPw(MemberVO member) {
		int res = mapper.findPw(member);
		return res;
	}

	@Override
	public int updateMember(MemberVO member) {
		int res = mapper.updateMember(member);
		return res;
	}
	
	@Override
	public int getMember(MemberVO member) {
		int res = mapper.getMember(member);
		return res;
	}
	
	@Override
	public ArrayList<MemberVO> getMemberList() {
		ArrayList<MemberVO> memberList = new ArrayList<MemberVO>();
		memberList = mapper.getMemberList();
		return memberList;
	}
	
	@Override
	public int deleteMember(MemberVO member) {
		int res = mapper.deleteMember(member);
		return res;
	}

}
