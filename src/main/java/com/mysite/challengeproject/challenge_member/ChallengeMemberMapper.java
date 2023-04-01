package com.mysite.challengeproject.challenge_member;

import org.apache.ibatis.annotations.Insert;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;


@Mapper 
public interface ChallengeMemberMapper {
	// 해당 챌린지의 참여 여부를 확인합니다. 리턴 값이 1이면 해당 챌린지에 참여 중이고, 0이면 참여 중이 아닙니다.
	@Select("SELECT COUNT(*) FROM challenge_member where member_id=#{member_id} and challenge_num=#{challenge_num} ")
	public int membercheck_challenge(String member_id, int challenge_num) throws Exception;
	
	// 해당 챌린지의 참여인원을 return 해줍니다.
	@Select("SELECT COUNT(*) FROM challenge_member where challenge_num=#{challenge_num}")
	public int count_challengemember(int challenge_num) throws Exception;
	
	// 현재 시간을 기준으로 참여한 챌린지에 해당 멤버 아이디를 추가합니다.ㅏ
	@Insert("INSERT INTO challenge_member (entry_num, challenge_num, member_id, attend_date) values(null, #{challenge_num}, #{member_id}, now())")
	public int join_challenge(ChallengeMemberVO challengemember) throws Exception;

}
