import React, { Component, ChangeEvent } from "react";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Write.css";

interface IProps {
  isModifyMode: boolean;
  boardId: number;
  handleCancel: () => void;
  renderComplete: () => void;
}

interface IState {
  title: string;
  content: string;
  isRendered: boolean;
  selectedImageFile: File | null;
  selectedPdfFile: File | null;
}

class Write extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      title: "",
      content: "",
      isRendered: false,
      selectedImageFile: null,
      selectedPdfFile: null,
    };
  }

  write = () => {
    const { title, content, selectedImageFile, selectedPdfFile } = this.state;
    if (!title || !content) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (selectedImageFile) {
      formData.append("imageFile", selectedImageFile);
    }
    if (selectedPdfFile) {
      formData.append("pdfFile", selectedPdfFile);
    }
    
    Axios.post("https://220.149.236.48:3306/insert", formData)
      .then((res) => {
        console.log("파일 업로드 및 작성완료:", res.data);
        this.setState({
          title: "",
          content: "",
          selectedImageFile: null,
          selectedPdfFile: null,
        });
        this.props.handleCancel();
        this.props.renderComplete();
      })
      .catch((err) => {
        console.error("파일 업로드 및 작성완료 실패:", err);
      });
  };
  
  // update 함수
  update = () => {
    const { title, content, selectedImageFile, selectedPdfFile } = this.state;
    if (!title || !content) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("id", this.props.boardId.toString());
  
    if (selectedImageFile) {
      formData.append("imageFile", selectedImageFile);
    }
  
    if (selectedPdfFile) {
      formData.append("pdfFile", selectedPdfFile);
    }
  
    Axios.post("https://220.149.236.48:3306/update", formData)
      .then((res) => {
        console.log("파일 업로드 및 수정완료:", res.data);
        this.props.handleCancel();
        this.props.renderComplete();
      })
      .catch((err) => {
        console.error("파일 업로드 및 수정완료 실패:", err);
      });
  };

  detail = () => {
    Axios.post("https://220.149.236.48:3306/detail", {
      id: this.props.boardId,
    })
      .then((res) => {
        if (res.data) {
          this.setState({
            title: res.data.BOARD_TITLE,
            content: res.data.BOARD_CONTENT,
            isRendered: true,
          });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleImageFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      this.setState({ selectedImageFile: file });
    }
  };

  handlePdfFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      this.setState({ selectedPdfFile: file });
    }
  };

  componentDidMount() {
    if (this.props.isModifyMode) {
      this.detail();
    } else {
      this.setState({
        title: "",
        content: "",
        isRendered: false,
      });
    }
  }

  componentDidUpdate(prevProps: IProps) {
    if (this.props.isModifyMode && this.props.boardId !== prevProps.boardId) {
      this.detail();
    } else if (
      !this.props.isModifyMode &&
      this.props.isModifyMode !== prevProps.isModifyMode
    ) {
      this.setState({
        title: "",
        content: "",
        isRendered: false,
      });
    }
  }

  render() {
    const { selectedImageFile, selectedPdfFile } = this.state;
    return (
      <div>
        <Form.Group className="mb-4">
          <Form.Label className="Write-label">제목</Form.Label>
          <Form.Control
            className="Write-control"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="제목을 입력하세요"
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className="Write-label">내용</Form.Label>
          <Form.Control
            className="Write-control"
            as="textarea"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
            placeholder="내용을 입력하세요"
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className="Write-label">이미지 파일 선택</Form.Label>
          <Form.Control
            type="file"
            onChange={this.handleImageFileChange}
            accept=".jpg, .jpeg, .png"
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className="Write-label">PDF 파일 선택</Form.Label>
          <Form.Control
            type="file"
            onChange={this.handlePdfFileChange}
            accept=".pdf"
          />
        </Form.Group>
        {this.props.isModifyMode ? (
          <Button variant="right" onClick={this.update}>
            수정하기
          </Button>
        ) : (
          <Button variant="right" onClick={this.write}>
            작성완료
          </Button>
        )}
        <Button variant="right" onClick={this.props.handleCancel}>
          취소
        </Button>
      </div>
    );
  }
}

export default Write;
