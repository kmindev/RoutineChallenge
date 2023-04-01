package com.mysite.challengeproject.board;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardController {
	
	private BoardServiceImpl boardServiceImpl;
	
	public BoardController(BoardServiceImpl boardServiceImpl) {
		this.boardServiceImpl = boardServiceImpl;
	}
	
	@RequestMapping("/insert_board") // 댓글 등록
	public int insertBoard(BoardVO board) {
		return boardServiceImpl.insertBoard(board);
	}
	
	@RequestMapping("/get_board") // 댓글 조회
	public List<BoardVO> getBoard(int challenge_num) {
		return boardServiceImpl.getBoard(challenge_num);
	}
	
	@RequestMapping("/get_myboard") // 회원 댓글 조회 (로그인 중인 회원 댓글 고유 번호 조회)
	public List<BoardVO> getMyboard(BoardVO board) {
		return boardServiceImpl.getMyboard(board);
	}
	
	@RequestMapping("/update_board") // 댓글 수정
	public int updateBoard(BoardVO board) {
		return boardServiceImpl.updateBoard(board);
	}
	
}
