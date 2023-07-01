package com.mysite.challengeproject.member;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface MemberMapper {
	
	// 회원가입
	// memverDTO: member_profile을 제외한 정보
	// profileSaveName: member_profile => 포로필 사진 데이터베이스 저장명
	@Insert("insert into member values (#{memberDTO.member_name}, #{memberDTO.member_id},"
			+ " #{memberDTO.member_password},"+ " #{memberDTO.member_email},"
			+ " #{memberDTO.member_nickname}, #{profileSaveName}, #{memberDTO.member_birth},"
			+ " #{memberDTO.member_theme})")
	public int insertMember(MemberDTO memberDTO, String profileSaveName);

	// 로그인
	@Select("select count(*) as 'cnt' from member where member_id=#{member_id} and member_password=#{member_password}")
	public int login(MemberVO member);
	
	// 아이디 찾기 (이름, 이메일)
	@Select("select member_id from member where member_name=#{member_name} and member_email=#{member_email}")
	public String findId(MemberVO member);
	
	// 비밀번호 찾기 (아이디, 이메일)
	@Select("select member_password from member where member_id=#{member_id} and member_email=#{member_email}")
	public String findPw(MemberVO member);

	// 회원 정보 조회
	@Select("select * from member where member_id=#{member_id}")
	public MemberVO getMember(String member_id);
	
	// 회원 정보 수정
	@Update("update member set member_password=#{memberVO.member_password}, "
			+ "member_email=#{memberVO.member_email}, member_nickname=#{memberVO.member_nickname}, member_profile=#{saveName}, "
			+ "member_birth=#{memberVO.member_birth}, member_theme=#{memberVO.member_theme} where member_id=#{memberVO.member_id}")
	public int updateMember(MemberVO memberVO, String saveName);
	
	// 회원 탈퇴
	@Delete("delete from member where member_id=#{member_id}")
	public int deleteMember(String member_id);
	@Update("update challenge set challenge_creater='no_info' where challenge_creater=#{member_id}")
	public void updateChallengeForMemberDel(String member_id);
	@Update("update board set member_id='no_info' where member_id=#{member_id}")
	public void updateBoardForMemberDel(String member_id);
	
//	// 회원 리스트 조회 (관리자)
//	@Select("select * from member order by member_id")
//	public ArrayList<MemberVO> getMemberList();
	
	@Delete("delete from challenge_member where member_id=#{member_id}")
	public void updateChallengeMemberForMemberDel(String member_id);
	
}
