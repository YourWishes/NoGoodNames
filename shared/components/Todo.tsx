import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';


class Todo extends React.Component<TodoProps> {
    constructor(props:any) {
        super(props);
    }

    render() {
        let text:string = this.props.text;

        return (
            <li>
                {text}
            </li>
        )
    }
};

export interface TodoProps {
    text:string
}

export default Todo;