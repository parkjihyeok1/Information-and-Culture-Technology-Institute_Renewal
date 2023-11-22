import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BoardList3 from './BoardList3'; // Updated import for BoardList3
import './Page5.css';

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
                <BoardList3 // Updated component name BoardList2
                    isComplete={this.state.isComplete}
                    handleModify={this.handleModify}
                    renderComplete={this.renderComplete}
                />
            </div>
        );
    }
}

function Page5() {
    return (
        <div className="page5">
            <section className="notice">
                <div className="page-title">
                    <div className="acontainer4">
                        <h3>게시판</h3>
                    </div>
                </div>
                <App />
            </section>
        </div>
    );
}

export default Page5;
