package com.mysite.challengeproject.board;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardController {
	
	private BoardServiceImpl boardServiceImpl;
	
	public BoardController(BoardServiceImpl boardServiceImpl) {
		this.boardServiceImpl = boardServiceImpl;
	}
	
	@PostMapping("/insert_board") // 댓글 등록
	public int insertBoard(@RequestBody BoardVO board) {
		return boardServiceImpl.insertBoard(board);
	}
	
	@GetMapping("/get_board") // 댓글 조회
	public List<BoardVO> getBoard(@RequestParam int challenge_num) {
		return boardServiceImpl.getBoard(challenge_num);
	}
	
	@PostMapping("/get_myboard") // 회원 댓글 조회 (로그인 중인 회원 댓글 고유 번호 조회)
	public List<BoardVO> getMyboard(@RequestBody BoardVO board) {
		return boardServiceImpl.getMyboard(board);
	}
	
	@PostMapping("/update_board") // 댓글 수정
	public int updateBoard(@RequestBody BoardVO board) {
		return boardServiceImpl.updateBoard(board);
	}
	
}
