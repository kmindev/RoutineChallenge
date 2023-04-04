package com.mysite.challengeproject.member;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service("memberService")
public class MemberServiceImpl implements MemberService {
	
	private MemberMapper mapper;
	
	public MemberServiceImpl(MemberMapper mapper) {
		this.mapper = mapper;
	}

	
	@Override // 회원가입
	public int insertMember(MemberDTO memberDTO, MultipartFile member_profile) throws IOException {   
		String profileSaveName = null;
		
		if(member_profile != null) {  // 첨부된 파일이 있을 경우
			profileSaveName = UUID.randomUUID().toString() +"." +StringUtils.getFilename(member_profile.getOriginalFilename());
			File file = new File("C:\\Project\\React_Source\\mini-project\\public\\image\\upload\\profile\\" + profileSaveName);
			member_profile.transferTo(file);
		}
		return mapper.insertMember(memberDTO, profileSaveName); // memberDTO와 이미지 저장명을 전달
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
	public MemberVO getMember(String member_id) {
		MemberVO res = mapper.getMember(member_id);
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
	public int deleteMember(String meber_id) {
		mapper.updateChallengeForMemberDel(meber_id);
		mapper.updateBoardForMemberDel(meber_id);
		mapper.updateChallengeMemberForMemberDel(meber_id);
		
		return mapper.deleteMember(meber_id);
	}

}
