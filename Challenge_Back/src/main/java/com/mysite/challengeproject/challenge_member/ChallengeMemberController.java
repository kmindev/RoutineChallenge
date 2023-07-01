package com.mysite.challengeproject.challenge_member;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChallengeMemberController {
	
	ChallengeMemberService mChallengeMemberService;
	
	public ChallengeMemberController(ChallengeMemberService mChallengeMemberService) {
		this.mChallengeMemberService = mChallengeMemberService;
	}
	
	// 챌린지 참여 여부 조회 (1:참여 중, 0: 미참여)
	@PostMapping("membercheck_challenge")
	private int mChallengeMemberCheck(@RequestBody ChallengeMemberVO challemgeMemberVO) throws Exception{
		return mChallengeMemberService.membercheck_challenge(challemgeMemberVO);
	}
	
	// 챌린지 참여 인원 조회
	@GetMapping("count_challengemember")
	public int mChallengeMemberCount(@RequestParam("challenge_num") int challenge_num) throws Exception{
		return mChallengeMemberService.count_challengemember(challenge_num);
	}
	
	// 챌린지 참여 멤버 등록
	@PostMapping("join_challenge")
	public int mInsertChallengeMember(@RequestBody ChallengeMemberVO challenge) throws Exception{
		return mChallengeMemberService.join_challenge(challenge);
	}
	
}
