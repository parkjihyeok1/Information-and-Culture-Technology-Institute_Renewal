import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Board.css";

interface IProps {
  boardId: number;
}

interface IState {
  title: string;
  content: string;
  imageFile: string | null; // 이미지 파일의 경로를 문자열로 저장합니다.
}

const Board2: React.FC<IProps> = ({ boardId }) => {
  const [post, setPost] = useState<IState>({
    title: "",
    content: "",
    imageFile: null,
  });

  useEffect(() => {
    Axios.post("http://localhost:8000/detail2", {
      id: boardId,
    })
      .then((res) => {
        if (res.data) {
          setPost({
            title: res.data.BOARD_TITLE2,
            content: res.data.BOARD_CONTENT2,
            // 이미지 파일 경로를 서버에서 그대로 받아옵니다.
            imageFile: res.data.IMAGE_FILE,
          });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, [boardId]);

  return (
    <div className="board-parent">
      <div className="board-container">
        <h3 className="board-title0">제목: {post.title}</h3>
        <div className="divider"></div>
        <p className="board-content">내용: {post.content}</p>
        {post.imageFile && (
          <img src={`${post.imageFile}`} alt="이미지" className="board-image" />
        )}
      </div>
    </div>
  );
};

export default Board2;