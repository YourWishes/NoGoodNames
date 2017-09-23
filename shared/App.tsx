import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

const styles = require('./styles/index.scss');

//Doing me a test
import { addTodo } from './actions/todo';
import TodoList from './components/TodoList';

class App extends React.Component<AppProps> {
    input: HTMLInputElement|null;

    constructor(props: AppProps) {
        super(props);
    }

    doThing() {
        if (!this.input) return;
        let val: string = this.input.value;
        this.input.value = "";
        this.props.addTodo(val);
    }

    render() {
        return (
            <div>
                <input type="text" ref={node => { this.input = node }} placeholder="Todo Name" />
                <button onClick={this.doThing.bind(this)}>Add Todo</button>
                <TodoList />
            </div>
        )
    }
}

export interface AppProps {
    addTodo:any
}

const mapStateToProps = function (state: any) {
    return {
    }
}

const mapDispatchToProps = function(dispatch:any) {
    return {
        addTodo:function(test:string) {
            dispatch(addTodo(test));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
