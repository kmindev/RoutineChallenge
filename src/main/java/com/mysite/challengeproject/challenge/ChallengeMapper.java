package com.mysite.challengeproject.challenge;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface ChallengeMapper {
	
	// 챌린지 전체 조회
	@Select("SELECT challenge_num, challenge_title, challenge_theme, challenge_intro, challenge_start, challenge_end, challenge_thumbnail FROM challenge")
	public List<ChallengeDTO> challengelist();
	
	// 진행상태별 챌린지 조회(진행예정)
	@Select("SELECT challenge_num, challenge_title, challenge_theme, challenge_intro, challenge_start, challenge_end, challenge_thumbnail FROM challenge WHERE challenge_start>=NOW()")
	public List<ChallengeDTO> StateChallengelist1();
	
	// 진행상태별 챌린지 조회(진행중)
	@Select("SELECT challenge_num, challenge_title, challenge_theme, challenge_intro, challenge_start, challenge_end, challenge_thumbnail FROM challenge WHERE challenge_start<=NOW() AND challenge_end>=NOW()")
	public List<ChallengeDTO> StateChallengelist2();
	
	// 진행상태별 챌린지 조회(진행종료)
	@Select("SELECT challenge_num, challenge_title, challenge_theme, challenge_intro, challenge_start, challenge_end, challenge_thumbnail FROM challenge WHERE challenge_end<=NOW()")
	public List<ChallengeDTO> StateChallengelist3();
	
	// 챌린지 조회수 업데이트
	@Update("UPDATE challenge SET challenge_readcount=challenge_readcount+1 WHERE challenge_num=#{challenge_num}")
	public void setReadCountUpdate(int challenge_num);
	
	// 챌린지 생성(챌린지 테이블에 insert)
	@Insert("insert into challenge "
         + " values(null, #{DTO2.challenge_creater}, #{DTO2.challenge_title}, #{DTO2.challenge_theme}, #{DTO2.challenge_start}, "
         + " #{DTO2.challenge_end}, #{DTO2.challenge_cycle}, #{DTO2.challenge_intro}, #{DTO2.challenge_content}, "
         + "#{challenge_thumbnail}, null, #{DTO2.challenge_readcount})")
	public int insertChallenge(ChallengeDTO2 DTO2, String challenge_thumbnail);
   
	// 챌린지 상세정보 조회
	// 챌린지 상세페이지 들어가면 진행여부, 제목, 시작날짜, 종료날짜, 운동설명이 필요함(진행여부는 back에서 별도의 url로 처리하도록 하는게 괜찮아보임)
	@Select("select * from challenge where challenge_num = #{challenge_num}")
	public ChallengeVO getDetailChallenge(int challenge_num);
   
	// 회원이 참여하고 있는 챌린지의 제목, 내용, 시작날짜, 종료날짜를 조회
	// (challengeVO에 있는 정보를 모두 불러올지? 아니면 제목, 내용, 시작날짜, 종료날짜 DTO를 따로 만들지 논의) 챌린지 페이지에서 챌린지를 불러올 때 재사용되기 때문에 DTO를 따로 만드는게 좋아보인다. 
	@Select("select challenge.challenge_num, challenge_title, challenge_intro, challenge_start, challenge_end, challenge_thumbnail "
         + "from challenge "
         + "inner join "
         + "challenge_member on challenge.challenge_num = challenge_member.challenge_num "
         + "where challenge_member.member_id = #{member_id}")
	public List<ChallengeDTO> getMyChallengeList(String member_id);
	
}
