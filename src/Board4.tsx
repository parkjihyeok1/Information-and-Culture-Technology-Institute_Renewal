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
  pdfFile: string | null; // PDF 파일의 경로를 문자열로 저장합니다.
}

const Board4: React.FC<IProps> = ({ boardId }) => {
  const [post, setPost] = useState<IState>({
    title: "",
    content: "",
    imageFile: null,
    pdfFile : null
  });

  useEffect(() => {
    Axios.post("https://220.149.236.48:3306/detail4", {
      id: boardId,
    })
      .then((res) => {
        if (res.data) {
          setPost({
            title: res.data.BOARD_TITLE4,
            content: res.data.BOARD_CONTENT4,
            // 이미지 파일 경로를 서버에서 그대로 받아옵니다.
            imageFile: res.data.IMAGE_FILE,
            pdfFile: res.data.PDF_FILE // PDF 파일의 경로를 저장합니다.
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
         {post.pdfFile && (
      <a href={`${post.pdfFile}`} target="_blank" rel="noopener noreferrer">
        원문 PDF 보기 및 다운로드
      </a>
       )}
      </div>
    </div>
  );
};

export default Board4;
