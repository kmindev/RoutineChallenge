package com.mysite.challengeproject.member;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface MemberMapper {
	
	@Insert("insert into member values (#{member_name}, #{member_id}, #{member_password}, #{member_email}, #{member_nickname}, "
			                         + "#{member_profile}, #{member_birth}, #{member_theme})")
	public int insertMember(MemberVO member);

	@Select("select count(*) as 'cnt' from member where member_id=#{member_id} and member_password=#{member_password}")
	public int login(MemberVO member);
	
	@Select("select member_id from member where member_name=#{member_name} and member_email=#{member_email}")
	public String findId(MemberVO member);
	
	@Select("select member_password from member where member_id=#{member_id} and member_email=#{member_email}")
	public int findPw(MemberVO member);
	
	@Update("update member set member_password=#{member_password}, member_email=#{member_email}, member_nickname=#{member_nickname}, "
							+ "member_profile=#{member_profile}, member_theme=#{member_theme} where member_id=#{member_id}")
	public int updateMember(MemberVO member);
	
	@Select("select * from member where member_id=#{member_id}")
	public int getMember(MemberVO member);
	
	@Select("select * from member order by member_id")
	public ArrayList<MemberVO> getMemberList();	
	
	@Delete("delete from member where member_id=#{member_id}")
	public int deleteMember(MemberVO member);
}
