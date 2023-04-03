package com.mysite.challengeproject.challenge;

import java.util.List;

import org.apache.ibatis.annotations.Select;

public interface ChallengeService {

	// 챌린지 전체 조회
	public List<ChallengeDTO> challengelist();
	
	// 진행상태별 챌린지 조회(진행예정)
	public List<ChallengeDTO> StateChallengelist1();
	
	// 진행상태별 챌린지 조회(진행중)
	public List<ChallengeDTO> StateChallengelist2();
	
	// 진행상태별 챌린지 조회(진행종료)
	public List<ChallengeDTO> StateChallengelist3();
	
	// 챌린지 조회수 업데이트
	public void setReadCountUpdate(int challenge_num);
	
	// 챌린지 생성(챌린지 테이블에 insert)
	public int insertChallenge(ChallengeVO challenge);
   
   	// 챌린지 상세정보 조회
	public ChallengeVO getDetailChallenge(int challenge_num);
   
	// 참여중인 챌린지 조회
	public List<ChallengeDTO> getMyChallengeList(String member_id);
	
}
