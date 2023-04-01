package com.mysite.challengeproject.member;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {

	private MemberService memberService; 
	
	public MemberController(MemberService memberService) { 
		this.memberService = memberService;
	}
	
	
	@RequestMapping("/join_member")
	public int insertMember(@RequestBody MemberVO memberVO) throws Exception {
		int res = memberService.insertMember(memberVO);	
		return res;
	}
	
	@RequestMapping("/login")
	public int login(@RequestBody MemberVO member) throws Exception {
		int res = memberService.login(member);
		return res;
	}
	
	@RequestMapping("/find_id")
	public String findId(@RequestBody MemberVO member) throws Exception {
		String res = memberService.findId(member);
		return res;
	}
	
	@RequestMapping("/find_pw")
	public int findPw(@RequestBody MemberVO member) throws Exception {
		int res = memberService.findPw(member);
		return res;
	}
	
	@RequestMapping("/update_member") 
	public int updateMember(@RequestBody MemberVO member) throws Exception {
		int res = memberService.updateMember(member);
		return res;
	}
	
	@RequestMapping("/get_member") 
	public MemberVO getMember(MemberVO member) throws Exception {
		MemberVO res = memberService.getMember(member);
		return res;
	}
	
	@RequestMapping("/member_list") 
	public ArrayList<MemberVO> member_list() { 
		ArrayList<MemberVO> memberList = memberService.getMemberList();
		return memberList;
	}
	
	@RequestMapping("/delete_member") 
	public int deleteMember(@RequestBody MemberVO member) throws Exception {
		int res = memberService.deleteMember(member);
		return res;
	}
}
