package com.mysite.challengeproject.member;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class MemberController {

	private MemberService memberService;
	
	public MemberController(MemberService memberService) {
		this.memberService = memberService;
	}
	
	
	// 회원가입
	// member_profile 파일을 전달받는다. 프로필을 필수로 안받아도 되기 때문에 required를 false
	@PostMapping("/join_member")
	public int insertMember(MemberDTO memberDTO, @RequestParam(value="member_profile", required = false) MultipartFile member_profile) throws Exception {
		int res = memberService.insertMember(memberDTO, member_profile);
		return res;
	}
	
	// 로그인
	@PostMapping("/login")
	public int login(@RequestBody MemberVO member) throws Exception {
		int res = memberService.login(member);
		return res;
	}
	
	// 아이디 찾기 (이름, 이메일)
	@PostMapping("/find_id")
	public String findId(@RequestBody MemberVO member) throws Exception {
		String res = memberService.findId(member);
		return res;
	}
	
	// 비밀번호 찾기 (아이디, 이메일)
	@PostMapping("/find_pw")
	public String findPw(@RequestBody MemberVO member) throws Exception {
		String res = memberService.findPw(member);
		return res;
	}
	
	// 회원 정보 조회
	@GetMapping("/get_member")
	public MemberVO getMember(@RequestParam("member_id") String member_id) throws Exception {
		MemberVO res = memberService.getMember(member_id);
		return res;
	}
	
	// 회원 정보 수정
	@PostMapping("/update_member")
	public int updateMember(MemberVO memberVO, @RequestParam(value="update_profile", required = false) MultipartFile update_profile) throws Exception {
		int res = memberService.updateMember(memberVO, update_profile);
		return res;
	}
	
//	// 회원 리스트 조회 (관리자)
//	@RequestMapping("/member_list")
//	public ArrayList<MemberVO> member_list() {
//		ArrayList<MemberVO> memberList = memberService.getMemberList();
//		return memberList;
//	}
	
	// 회원 탈퇴
	@GetMapping("/delete_member")
	public int deleteMember(@RequestParam("member_id") String member_id) throws Exception {
		int res = memberService.deleteMember(member_id);
		return res;
	}
	
}
