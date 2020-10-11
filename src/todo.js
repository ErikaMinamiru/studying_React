import React, { Component } from 'react';
class Todo extends Component {

    // todos state を定義
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            mame: ''
        };
    }

    // textフィールドに入力されたToDo項目を追加するメソッド
    onInput = (e) => {
        this.setState({
            name: e.target.value //textフィールドに入力された値は`e.target.value`で取り出せる
        });
    }

    render(){
        const { todos } = this.state;

        return (
            <div>
                <input type="text" onInput={this.onInput} />
                <button>登録</button>
                <ul>
                    {todos.map((todo, index) => <li key={index}>{todo}</li>)}
                </ul>
            </div>
        );

    }
}
