package com.mysite.challengeproject.challenge;

import java.io.IOException;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class ChallengeController {
	
	private ChallengeServiceImpl challengeServiceImpl;
	
	public ChallengeController(ChallengeServiceImpl challengeServiceImpl) {
		this.challengeServiceImpl = challengeServiceImpl;
	}
	
	// 챌린지 조회
	@GetMapping("/challengelist")
	public List<ChallengeDTO> StateChallengelist(@RequestParam("state") int state) {
		List<ChallengeDTO> list;
		if (state == 1) { // 진행예정(1)
			list = challengeServiceImpl.StateChallengelist1();
		} else if (state == 2) { // 진행중(2)
			list = challengeServiceImpl.StateChallengelist2();
		} else if (state == 3) { // 진행종료(3)
			list = challengeServiceImpl.StateChallengelist3();
		} else { // 전체(0)
			list = challengeServiceImpl.challengelist();
		}
		return list;
	}
	
	// 챌린지 생성
	// 챌린지 대표사진, 챌린지 사진 서버에 저장하고, 서버 저장 path를 db에 저장하는 부분이 추가되야함(react에서 먼저 작업하고 하는게 좋을거 같음) 
//	@PostMapping("/create_challenge")
//	public int insertChallenge(@RequestBody ChallengeVO challenge) {
//		return challengeServiceImpl.insertChallenge(challenge);
//	}
	
//	@PostMapping("/create_challenge")
//	public int insertChallenge(ChallengeDTO2 challengeDTO2, 
//			@RequestParam(value="challenge_thumbnail", required = false) MultipartFile mul1,
//			@RequestParam(value="challenge_image", required = false) MultipartFile mul2) throws IOException {
//		System.out.println(challengeDTO2.getChallenge_creater());
//		return challengeServiceImpl.insertChallenge(challengeDTO2, mul1, mul2);
//	}
	
	@PostMapping("/create_challenge")
	public int insertChallenge(ChallengeDTO2 challengeDTO2, 
			@RequestParam(value="challenge_thumbnail", required = false) MultipartFile mul) throws IOException {
		return challengeServiceImpl.insertChallenge(challengeDTO2, mul);
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
