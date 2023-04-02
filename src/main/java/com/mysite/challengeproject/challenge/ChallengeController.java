package com.mysite.challengeproject.challenge;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChallengeController {
	
	private ChallengeServiceImpl challengeServiceImpl;
	
	public ChallengeController(ChallengeServiceImpl challengeServiceImpl) {
		this.challengeServiceImpl = challengeServiceImpl;
	}

	// 챌린지 전체 조회
	@GetMapping("/challengelist")
	public List<ChallengeDTO> challengelist() {
		return challengeServiceImpl.challengelist();
	}
		
	// 주제별 챌린지 조회
	@GetMapping("/theme_challengelist")
	public List<ChallengeDTO> ThemeChallengelist(@RequestParam("challenge_theme") String challenge_theme) {
		return challengeServiceImpl.ThemeChallengelist(challenge_theme);
	}
	
	// 진행상태별 챌린지 조회(1:진행예정 2:진행중 3:진행종료)
	@GetMapping("/state_challengelist")
	public List<ChallengeDTO> StateChallengelist(@RequestParam("state") int state) {
		List<ChallengeDTO> list;
		if (state == 0) {
			list = challengeServiceImpl.StateChallengelist1();
		} else if (state == 1) {
			list = challengeServiceImpl.StateChallengelist2();
		} else {
			list = challengeServiceImpl.StateChallengelist3();
		}
		return list;
	}
	
	// 챌린지 생성
	// 챌린지 대표사진, 챌린지 사진 서버에 저장하고, 서버 저장 path를 db에 저장하는 부분이 추가되야함(react에서 먼저 작업하고 하는게 좋을거 같음) 
	@PostMapping("/create_challenge")
	public int insertChallenge(@RequestBody ChallengeVO challenge) {
		return challengeServiceImpl.insertChallenge(challenge);
	}

	// 챌린지 상세정보 조회
	@GetMapping("/detail_challenge")
	public ChallengeVO getDetailChallenge(@RequestParam("challenge_num") int challenge_num) {
		challengeServiceImpl.setReadCountUpdate(challenge_num);
		return challengeServiceImpl.getDetailChallenge(challenge_num);
	}

	// 참여중인 챌린지 조회
	@GetMapping("/my_challengelist")
   	public List<ChallengeDTO>getMyChallengeList(@RequestParam("member_id") String member_id) {
		return challengeServiceImpl.getMyChallengeList(member_id);
	}
}
