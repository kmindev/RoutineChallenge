package com.mysite.challengeproject.challenge;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

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
	
	@Override // 진행상태별 챌린지 조회(진행예정)
	public List<ChallengeDTO> StateChallengelist1() {
		return mapper.StateChallengelist1();
	}
	
	@Override // 진행상태별 챌린지 조회(진행중)
	public List<ChallengeDTO> StateChallengelist2() {
		return mapper.StateChallengelist2();
	}
	
	@Override // 진행상태별 챌린지 조회(진행종료)
	public List<ChallengeDTO> StateChallengelist3() {
		return mapper.StateChallengelist3();
	}
	
	@Override // 챌린지 조회수 업데이트
	public void setReadCountUpdate(int challenge_num) {
		mapper.setReadCountUpdate(challenge_num);
	}
	
//	@Override // 챌린지 생성
//	public int insertChallenge(ChallengeVO challenge) {
//		return mapper.insertChallenge(challenge);
//	}
	
//	@Override // 챌린지 생성
//	public int insertChallenge(ChallengeDTO2 challengeDTO2, MultipartFile mul1, MultipartFile mul2) throws IOException {
//		String thumbnailSaveName = null;
//		String challengeImageSaveName = null;
//		
//		if(mul1 != null) {thumbnailSaveName = saveImage(mul1);}
//		
//		if(mul2 != null) { challengeImageSaveName = saveImage(mul1);}
//		
//		return mapper.insertChallenge(challengeDTO2, thumbnailSaveName, challengeImageSaveName);
//		
//	}
	
	@Override // 챌린지 생성
	public int insertChallenge(ChallengeDTO2 challengeDTO2, MultipartFile mul1) throws IOException {
		String thumbnailSaveName = null;
	
		if(mul1 != null) {thumbnailSaveName = saveImage(mul1);}
		
		return mapper.insertChallenge(challengeDTO2, thumbnailSaveName);
		
	}
	
	private String saveImage(MultipartFile mul) throws IOException {
		String imgName = UUID.randomUUID() + "." +StringUtils.getFilename(mul.getOriginalFilename());
		File file = new File("C:\\Project\\React_Source\\mini-project\\public\\image\\upload\\challengeimg\\" + imgName); 
		mul.transferTo(file);
		return imgName;
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
