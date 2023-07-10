package com.mysite.challengeproject.member;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class MemberServiceImpl implements MemberService {
    @Value("${spring.servlet.multipart.location}")
    String uploadDir;
    private MemberMapper mapper;
    public MemberServiceImpl(MemberMapper mapper) {
        this.mapper = mapper;
    }

    @Override // 회원가입
    public int insertMember(MemberDTO memberDTO, MultipartFile member_profile) throws IOException {
        String profileSaveName = null;

        // 첨부된 파일이 있을 경우
        if (member_profile != null && !member_profile.isEmpty()) {
            profileSaveName = saveImage(member_profile);
        } else  // 이미지가 없을 때 기본 이미지
            profileSaveName = "profile_icon.png";
        return mapper.insertMember(memberDTO, profileSaveName); // memberDTO와 이미지 저장명을 전달
    }

    private String saveImage(MultipartFile mul) throws IOException {
        File storedFileName = new File(UUID.randomUUID().toString() + "_" + mul.getOriginalFilename());
        mul.transferTo(storedFileName);

        return storedFileName.toString();
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
    public int updateMember(MemberVO memberVO, MultipartFile update_profile) throws IOException {
        String profileSaveName = null;

        // 첨부된 파일이 있을 경우
        if (update_profile != null && !update_profile.isEmpty()) {
            profileSaveName = saveImage(update_profile);
        } else {
            profileSaveName = memberVO.getMember_profile();
        }

        int res = mapper.updateMember(memberVO, profileSaveName);
        return res; // memberDTO와 이미지 저장명을 전달
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
