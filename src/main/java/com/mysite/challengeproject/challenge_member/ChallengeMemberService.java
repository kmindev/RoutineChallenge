package com.mysite.challengeproject.challenge_member;

public interface ChallengeMemberService {
	
	// 챌린지 참여 여부 조회
	public int membercheck_challenge(ChallengeMemberVO challemgeMemberVO) throws Exception;
	
	// 챌린지 참여 인원 조회
	public int count_challengemember(int challenge_num) throws Exception;
	
	// 챌린지 참여 멤버 등록
	public int join_challenge(ChallengeMemberVO challengemember) throws Exception;
	
}
