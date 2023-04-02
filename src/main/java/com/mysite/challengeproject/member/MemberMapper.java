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
	@Insert("insert into member values (#{member_name}, #{member_id}, #{member_password}, #{member_email}, #{member_nickname}, "
			                         + "#{member_profile}, #{member_birth}, #{member_theme})")
	public int insertMember(MemberVO member);

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
	public MemberVO getMember(MemberVO member);
	
	// 회원 정보 수정
	@Update("update member set member_name=#{member_name}, member_password=#{member_password}, "
			+ "member_email=#{member_email}, member_nickname=#{member_nickname}, member_profile=#{member_profile}, "
			+ "member_birth=#{member_birth}, member_theme=#{member_theme} where member_id=#{member_id}")
	public int updateMember(MemberVO member);
	
//	// 회원 리스트 조회 (관리자)
//	@Select("select * from member order by member_id")
//	public ArrayList<MemberVO> getMemberList();
	
	// 회원 탈퇴
	@Delete("delete from member where member_id=#{member_id}")
	public int deleteMember(MemberVO member);
	
}
