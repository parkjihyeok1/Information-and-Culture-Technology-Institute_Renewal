import React, { Component } from "react";
import Axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./BoardList.css";
import Write from "./Write4";
import Board from "./Board4"; // Add import for Board component

interface IProps {
  isComplete: boolean;
  handleModify: any;
  renderComplete: any;
}

interface IState {
  boardList: any[];
  checkList: any[];
  showWriteForm: boolean;
  isModifyMode: boolean;
  selectedBoardId: number;
  isComplete: boolean; // Add this property
}

class BoardList4 extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      boardList: [],
      checkList: [],
      showWriteForm: false,
      isModifyMode: false,
      selectedBoardId: 0,
      isComplete: true, // Add this line to initialize isComplete in the state
    };
  }

  handleModify = (checkList: Array<string>) => {
    if (checkList.length === 0) {
      alert("수정할 게시글을 선택하세요.");
      return;
    } else if (checkList.length > 1) {
      alert("하나의 게시글만 선택하세요.");
      return;
    }

    const selectedBoard = this.state.boardList.find(
      (board: any) => board.BOARD_ID4 === parseInt(checkList[0])
    );

    if (!selectedBoard) {
      alert("선택된 게시글을 찾을 수 없습니다.");
      return;
    }

    const boardId = parseInt(checkList[0]);
    this.setState({
      isModifyMode: true,
      selectedBoardId: boardId,
      showWriteForm: false,
    });
  };

  getList = () => {
    Axios.get("http://220.149.236.48:3306/list4", {})
      .then((res) => {
        const { data } = res;
        this.setState({
          boardList: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  componentDidMount() {
    this.getList();
  }

  componentDidUpdate() {
    if (!this.props.isComplete) {
      this.getList();
    }
  }

  handleDelete = () => {
    if (this.state.checkList.length === 0) {
      alert("삭제할 게시글을 선택하세요.");
      return;
    }

    let boardIdList = "";

    this.state.checkList.forEach((v: any) => {
      boardIdList += `'${v}',`;
    });

    Axios.post("http://220.149.236.48:3306/delete4", {
      boardIdList: boardIdList.substring(0, boardIdList.length - 1),
    })
      .then(() => {
        this.getList();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  onCheckboxChange = (checked: boolean, id: any) => {
    const list: Array<string> = this.state.checkList.filter((v) => {
      return v !== id;
    });

    if (checked) {
      list.push(id);
    }

    this.setState({
      checkList: list,
    });
  };

  handleCancel = () => {
    this.setState({
      showWriteForm: false,
      isModifyMode: false,
      selectedBoardId: 0,
    });

    // Fetch the latest data from the server and update the boardList
    this.getList();
  };

  renderComplete = () => {
    this.setState({
      isComplete: true,
    });
  };

  render() {
    const { boardList }: { boardList: any } = this.state;
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>선택</th>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
          {boardList.map((v: any, index: number) => {
              return (
                <tr key={v.BOARD_ID}>
                  <td>
                    <input
                      type="checkbox"
                      value={v.BOARD_ID4}
                      onChange={(e) => {
                        this.onCheckboxChange(
                          e.currentTarget.checked,
                          e.currentTarget.value
                        );
                      }}
                    />
                  </td>
                  <td>{index + 1}</td>
                  <td>
                    <a
                      href={`220.149.236.48:3306/page5/${v.BOARD_ID4}`}
                      onClick={() => {
                        this.setState({
                          selectedBoardId: v.BOARD_ID4,
                          showWriteForm: false,
                          isModifyMode: false,
                        });
                      }}
                    >
                      {v.BOARD_TITLE4}
                    </a>
                  </td>
                  <td>{v.REGISTER_ID4}</td>
                  <td>{v.REGISTER_DATE4}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div className="page3-button">
          <Button
            variant="right"
            className="custom-button btn-lg"
            onClick={() => {
              this.setState({
                showWriteForm: !this.state.showWriteForm,
                isModifyMode: false,
                selectedBoardId: 0,
              });
            }}
          >
            글쓰기
          </Button>
          <Button
            variant="right"
            className="custom-button"
            onClick={() => {
              this.handleModify(this.state.checkList);
            }}
          >
            수정하기
          </Button>
          <Button
            variant="right"
            className="custom-button"
            onClick={this.handleDelete}
          >
            삭제하기
          </Button>
        </div>
        {this.state.showWriteForm && !this.state.isModifyMode && (
          <Write
            isModifyMode={this.state.isModifyMode}
            boardId={this.state.selectedBoardId}
            handleCancel={this.handleCancel}
            renderComplete={this.renderComplete}
          />
        )}
        {this.state.isModifyMode && (
          <Write
            isModifyMode={this.state.isModifyMode}
            boardId={this.state.selectedBoardId}
            handleCancel={this.handleCancel}
            renderComplete={this.renderComplete}
          />
        )}
        {this.state.selectedBoardId !== 0 && !this.state.isModifyMode && (
          <Board boardId={this.state.selectedBoardId} />
        )}
      </div>
    );
  }
}

export default BoardList4;