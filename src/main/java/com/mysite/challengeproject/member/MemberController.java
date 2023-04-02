package com.mysite.challengeproject.member;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {

	private MemberService memberService;
	
	public MemberController(MemberService memberService) {
		this.memberService = memberService;
	}
	
	
	// 회원가입
	@RequestMapping("/join_member")
	public int insertMember(@RequestBody MemberVO memberVO) throws Exception {
		int res = memberService.insertMember(memberVO);
		return res;
	}
	
	// 로그인
	@RequestMapping("/login")
	public int login(@RequestBody MemberVO member) throws Exception {
		int res = memberService.login(member);
		return res;
	}
	
	// 아이디 찾기 (이름, 이메일)
	@RequestMapping("/find_id")
	public String findId(@RequestBody MemberVO member) throws Exception {
		String res = memberService.findId(member);
		return res;
	}
	
	// 비밀번호 찾기 (아이디, 이메일)
	@RequestMapping("/find_pw")
	public String findPw(@RequestBody MemberVO member) throws Exception {
		String res = memberService.findPw(member);
		return res;
	}
	
	// 회원 정보 조회
	@RequestMapping("/get_member")
	public MemberVO getMember(@RequestParam("member_id") String member_id) throws Exception {
		MemberVO res = memberService.getMember(member_id);
		return res;
	}
	
	// 회원 정보 수정
	@RequestMapping("/update_member")
	public int updateMember(MemberVO member) throws Exception {
		int res = memberService.updateMember(member);
		return res;
	}
	
//	// 회원 리스트 조회 (관리자)
//	@RequestMapping("/member_list")
//	public ArrayList<MemberVO> member_list() {
//		ArrayList<MemberVO> memberList = memberService.getMemberList();
//		return memberList;
//	}
	
	// 회원 탈퇴
	@RequestMapping("/delete_member")
	public int deleteMember(@RequestParam("member_id") String member_id) throws Exception {
		int res = memberService.deleteMember(member_id);
		return res;
	}
	
}
