import React, { Component } from 'react';
export default class Todo extends Component {

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

    // 登録ボタンをクリックした際の処理
    // スプレッド演算子を用いて配列を新しい配列に展開し、その末尾にtextフィールドで入力した値をセット
    addTodo = () => {
        const { todos, name } = this.state;
        this.setState({
            todos: [...todos, name]
        });
    }

    // 削除ボタンをクリックした際の処理
    // todoのindex番号を受け取り、その位置にあるtodoを除いた配列を作り、stateのtodosに際セット
    removeTodo = (index) => {
        const { todos, name } = this.state;
        this.setState({
            todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
        });
    }


    render(){
        const { todos } = this.state;

        return (
            <div>
                <input type="text" onInput={this.onInput} />
                <button onClick={this.addTodo} >登録</button>
                <ul>
                    {todos.map((todo, index) => <li key={index}>
                        {todo}
                        <button onClick={() => { this.removeTodo(index) }}>削除</button>
                        </li>)}
                </ul>
            </div>
        );

    }
}
