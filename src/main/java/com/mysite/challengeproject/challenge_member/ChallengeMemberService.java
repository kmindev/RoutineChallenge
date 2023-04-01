package com.mysite.challengeproject.challenge_member;

public interface ChallengeMemberService {
	public int membercheck_challenge(String member_id, int challenge_num) throws Exception;
	public int count_challengemember(int challenge_num) throws Exception;
	public int join_challenge(ChallengeMemberVO challengemember) throws Exception;
}
