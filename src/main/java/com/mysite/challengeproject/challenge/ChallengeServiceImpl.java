package com.mysite.challengeproject.challenge;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ChallengeServiceImpl implements ChallengeService{
	
	private ChallengeMapper mapper;
	
	public ChallengeServiceImpl(ChallengeMapper mapper) {
		this.mapper = mapper;
	}

	@Override // 챌린지 전체 조회
	public List<ChallengeDTO> challengelist() {
		return mapper.challengelist();
	}
		
	@Override // 주제별 챌린지 조회
	public List<ChallengeDTO> ThemeChallengelist(String theme) {
		return mapper.ThemeChallengelist(theme);
	}
	
	@Override // 진행상태별 챌린지 조회(진행예정)
	public List<ChallengeDTO> StateChallengelist0(int state) {
		return mapper.StateChallengelist0(state);
	}
	
	@Override // 진행상태별 챌린지 조회(진행중)
	public List<ChallengeDTO> StateChallengelist1(int state) {
		return mapper.StateChallengelist1(state);
	}
	
	@Override // 진행상태별 챌린지 조회(진행종료)
	public List<ChallengeDTO> StateChallengelist2(int state) {
		return mapper.StateChallengelist2(state);
	}
	
	@Override // 챌린지 조회수 업데이트
	public void setReadCountUpdate(int challenge_num) {
		mapper.setReadCountUpdate(challenge_num);
	}
	
	@Override // 챌린지 생성
	public int insertChallenge(ChallengeVO challenge) {
		return mapper.insertChallenge(challenge);
	}
   
	@Override // 챌린지 상세정보 조회
	public ChallengeVO getDetailChallenge(int challenge_num) {
		return mapper.getDetailChallenge(challenge_num);
	}

	@Override // 참여중인 챌린지 조회
	public List<ChallengeDTO> getMyChallengeList(String member_id) {
		return mapper.getMyChallengeList(member_id);
	}
	
}
