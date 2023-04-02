package com.mysite.challengeproject.board;

import java.util.List;

public interface BoardService {

	// 댓글 등록
	public int insertBoard(BoardVO board);
	
	// 댓글 조회
	public List<BoardVO> getBoard(int challenge_num);
	
	// 회원 댓글 조회
	public List<BoardVO> getMyboard(BoardVO board);
	
	// 댓글 수정
	public int updateBoard(BoardVO board);
	
}
