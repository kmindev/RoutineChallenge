package com.mysite.challengeproject.challenge_member;

import org.springframework.stereotype.Service;

@Service("mChallengeMemberService")
public class ChallengeMemberServiceImpl implements ChallengeMemberService{
	
	private ChallengeMemberMapper mapper;
	
	public ChallengeMemberServiceImpl(ChallengeMemberMapper mapper) {
		this.mapper = mapper;
	}
	
	@Override // 챌린지 참여 여부 조회 (1:참여 중, 0: 미참여)
	public int membercheck_challenge(String member_id, int challenge_num) throws Exception {
		return mapper.membercheck_challenge(member_id, challenge_num);
	}
	
	@Override // 챌린지 참여 인원 조회
	public int count_challengemember(int challenge_num) throws Exception {
		return mapper.count_challengemember(challenge_num);
	}
	
	@Override // 챌린지 참여 멤버 등록
	public int join_challenge(ChallengeMemberVO challengemember) throws Exception {
		return mapper.join_challenge(challengemember);
	}
	
}
