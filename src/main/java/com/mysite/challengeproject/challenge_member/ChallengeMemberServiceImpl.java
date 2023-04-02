package com.mysite.challengeproject.challenge_member;

import org.springframework.stereotype.Service;

@Service("mChallengeMemberService")
public class ChallengeMemberServiceImpl implements ChallengeMemberService{
	
	private ChallengeMemberMapper mapper;
	
	public ChallengeMemberServiceImpl(ChallengeMemberMapper mapper) {
		this.mapper = mapper;
	}
	
	@Override // 챌린지 참여 여부 조회 (1:참여 중, 0: 미참여)
	public int membercheck_challenge(ChallengeMemberVO challemgeMemberVO) throws Exception {
		return mapper.membercheck_challenge(challemgeMemberVO);
	}
	
	@Override // 챌린지 참여 인원 조회
	public int count_challengemember(int challenge_num) throws Exception {
		return mapper.count_challengemember(challenge_num);
	}
	
	@Override // 챌린지 참여 멤버 등록
	public int join_challenge(ChallengeMemberVO challengemember) throws Exception {
		int member_check = mapper.membercheck_challenge(challengemember);
		
		if(member_check == 0)  // 회원이 해당 챌린지에 참여하고 있지 않은 경우
			return mapper.join_challenge(challengemember); 
		
		return 0; // 회원이 이미 해당 챌린지에 참고하고 있을 경우
	}
	
}
