import React from 'react';
import * as Todo from './Todo';
import { connect } from 'react-redux';


class TodoList extends React.Component<TodoListProps> {
    constructor(props: any) {
        super(props);
    }

    render() {
        let todos = this.props.todos;

        let test = [];
        for (var i = 0; i < todos.length; i++) {
            test.push(<Todo.default key={i} {...todos[i]} />);
        }

        return (
            <ul>
                {test}
            </ul>
        )
    }
};

export interface TodoListProps {
    todos: Array<Todo.TodoProps>
}

const mapStateToProps = function (state: any) {
    return {
        todos: state.todoApp.todos
    }
}

const mapDispatchToProps = function(dispatch:any) {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);