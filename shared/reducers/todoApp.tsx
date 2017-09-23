import { ADD_TODO } from './../actions/todo';
import { Reducer, AnyAction } from "redux";
import { combineReducers } from "redux";

function todos(state=[], action: AnyAction) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        default:
            return state;
    }
}

const todoApp = combineReducers({
    todos
});
export default todoApp;