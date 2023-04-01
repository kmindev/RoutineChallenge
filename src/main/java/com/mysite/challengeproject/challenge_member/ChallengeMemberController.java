package com.mysite.challengeproject.challenge_member;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ChallengeMemberController {
	
	ChallengeMemberService mChallengeMemberService;
	
	public ChallengeMemberController(ChallengeMemberService mChallengeMemberService) {
		this.mChallengeMemberService = mChallengeMemberService;
	}
	
	@RequestMapping(value="/membercheck_challenge", produces="application/json; charset=UTF-8")
	private int mChallengeMemberCheck(@RequestParam(value="member_id") String id, @RequestParam(value="challenge_num") int c_num ) throws Exception{
		return mChallengeMemberService.membercheck_challenge(id, c_num);
	}
	
	@RequestMapping(value="/count_challengemember", produces="application/json; charset=UTF-8")
	public int mChallengeMemberCount(@RequestParam(value="challenge_num") int id) throws Exception{
		return mChallengeMemberService.count_challengemember(id);
		
	}
	
	@RequestMapping(value="/join_challenge", produces="application/json; charset=UTF-8")
	public int mChallengeMemberCheck(ChallengeMemberVO challenge) throws Exception{
		return mChallengeMemberService.join_challenge(challenge);
	}
	
}
