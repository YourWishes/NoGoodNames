'use strict';

import { combineReducers } from 'redux';
import todoApp from './todoApp';

const reducer = combineReducers({
    todoApp
});

export default reducer;