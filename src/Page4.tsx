import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BoardList2 from './BoardList2'; // Updated import for BoardList2
import Write2 from "./Write2"; // Updated import for Write2
import './Page4.css';

class App extends Component {
    state = {
        isModifyMode: false,
        isComplete: true,
        boardId: 0,
    };

    /**
     * @param {any} checkList
     */
    handleModify = (checkList: any) => {
        if (checkList.length === 0) {
            alert("수정할 게시글을 선택하세요.");
        } else if (checkList.length > 1) {
            alert("하나의 게시글만 선택하세요.");
        }

        this.setState({
            isModifyMode: checkList.length === 1,
        });

        this.setState({
            boardId: checkList[0] || 0,
        });
    };

    handleCancel = () => {
        this.setState({
          isModifyMode: false,
          isComplete: true, // "글쓰기" 버튼을 눌렀을 때 게시판을 새로고침하도록 상태를 true로 변경
          boardId: 0,
        });
    };

    renderComplete = () => {
        this.setState({
            isComplete: true,
        });
    };

    /**
     * @return {Component} Component
     */
    render() {
        return (
            <div className="App">
                <BoardList2 // Updated component name BoardList2
                    isComplete={this.state.isComplete}
                    handleModify={this.handleModify}
                    renderComplete={this.renderComplete}
                />
            </div>
        );
    }
}

function Page4() {
    return (
        <div className="page4">
            <section className="notice">
                <div className="page-title">
                    <div className="acontainer4">
                        <h3>자료실</h3>
                    </div>
                </div>
                <App />
            </section>
        </div>
    );
}

export default Page4;
