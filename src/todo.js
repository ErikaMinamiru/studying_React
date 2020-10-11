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

    render(){
        const { todos } = this.state;

        return (
            <div>
                <input type="text" />
                <button>登録</button>
                <ul>
                    {todos.map((todo, index) => <li key={index}>{todo}</li>)}
                </ul>
            </div>
        );

    }
}