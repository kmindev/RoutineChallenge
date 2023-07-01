package com.mysite.challengeproject.board;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class BoardServiceImpl implements BoardService{

	private BoardMapper mapper;
	
	public BoardServiceImpl(BoardMapper mapper) {
		this.mapper = mapper;
	}
	
	@Override // 댓글 등록
	public int insertBoard(BoardVO board) {
		return mapper.insertBoard(board);
	}
	
	@Override // 댓글 조회
	public List<BoardVO> getBoard(int challenge_num) {
		return mapper.getBoard(challenge_num);
	}
	
	@Override // 회원 댓글 조회 (로그인 중인 회원 댓글 고유 번호 조회)
	public List<BoardVO> getMyboard(BoardVO board) {
		return mapper.getMyboard(board);
	}
	
	@Override // 댓글 수정
	public int updateBoard(BoardVO board) {
		return mapper.updateBoard(board);
	}
	
}
