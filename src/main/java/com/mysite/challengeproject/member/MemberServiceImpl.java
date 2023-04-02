package com.mysite.challengeproject.member;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

@Service("memberService")
public class MemberServiceImpl implements MemberService {
	
	private MemberMapper mapper;
	
	public MemberServiceImpl(MemberMapper mapper) {
		this.mapper = mapper;
	}

	
	@Override // 회원가입
	public int insertMember(MemberVO member) {
		int res = mapper.insertMember(member);
		return res;
	}
	
	@Override // 로그인
	public int login(MemberVO member) {
		int res = mapper.login(member);
		return res;
	}
	
	@Override // 아이디 찾기 (이름, 이메일)
	public String findId(MemberVO member) {
		String res = mapper.findId(member);
		return res;
	}
	
	@Override // 비밀번호 찾기 (아이디, 이메일)
	public String findPw(MemberVO member) {
		String res = mapper.findPw(member);
		return res;
	}

	@Override // 회원 정보 조회
	public MemberVO getMember(MemberVO member) {
		MemberVO res = mapper.getMember(member);
		return res;
	}

	@Override // 회원 정보 수정
	public int updateMember(MemberVO member) {
		int res = mapper.updateMember(member);
		return res;
	}
	
//	@Override // 회원 리스트 조회 (관리자)
//	public ArrayList<MemberVO> getMemberList() {
//		ArrayList<MemberVO> memberList = new ArrayList<MemberVO>();
//		memberList = mapper.getMemberList();
//		return memberList;
//	}
	
	@Override // 회원 탈퇴
	public int deleteMember(MemberVO member) {
		int res = mapper.deleteMember(member);
		return res;
	}

}
