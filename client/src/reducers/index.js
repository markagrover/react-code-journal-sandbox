import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import test  from './testReducer';
import todos  from './todosReducer';


export default combineReducers({
    todos: todos,
    test: test,
    form: reduxForm
});
