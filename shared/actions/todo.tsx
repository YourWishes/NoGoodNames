import { AnyAction } from "redux";

export const ADD_TODO:string = "ADD_TODO";

export function addTodo(text:string):AnyAction {
    return {
        type: ADD_TODO,
        text
    }
}