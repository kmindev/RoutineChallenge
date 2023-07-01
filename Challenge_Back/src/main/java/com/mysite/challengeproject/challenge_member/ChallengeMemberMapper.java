package com.mysite.challengeproject.challenge_member;

import org.apache.ibatis.annotations.Insert;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface ChallengeMemberMapper {
	
	// 챌린지 참여 여부 조회 (1:참여 중, 0: 미참여)
	@Select("SELECT COUNT(*) FROM challenge_member where member_id=#{member_id} and challenge_num=#{challenge_num} ")
	public int membercheck_challenge(ChallengeMemberVO challemgeMemberVO) throws Exception;
	
	// 챌린지 참여 인원 조회
	@Select("SELECT COUNT(*) FROM challenge_member where challenge_num=#{challenge_num}")
	public int count_challengemember(int challenge_num) throws Exception;
	
	// 챌린지 참여 멤버 등록
	@Insert("INSERT INTO challenge_member (entry_num, challenge_num, member_id, attend_date) values(null, #{challenge_num}, #{member_id}, now())")
	public int join_challenge(ChallengeMemberVO challengemember) throws Exception;

}
