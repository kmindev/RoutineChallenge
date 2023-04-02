package com.mysite.challengeproject.board;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface BoardMapper {

	// 댓글 등록
	@Insert("INSERT INTO board VALUES(null, #{member_id}, #{challenge_num}, #{board_content}, now())")
	public int insertBoard(BoardVO board);
	
	// 댓글 조회
	@Select("SELECT member_id, board_content, board_date FROM board WHERE challenge_num=#{challenge_num} ORDER BY board_num DESC")
	public List<BoardVO> getBoard(int challenge_num);
	
	// 회원 댓글 조회 (로그인 중인 회원 댓글 고유 번호 조회)
	@Select("SELECT board_num FROM board WHERE challenge_num=#{challenge_num} and member_id=#{member_id}")
	public List<BoardVO> getMyboard(BoardVO board);
	
	// 댓글 수정
	@Update("UPDATE board SET board_content=#{board_content}, board_date=NOW() WHERE board_num=#{board_num} and member_id=#{member_id}")
	public int updateBoard(BoardVO board);
	
}
