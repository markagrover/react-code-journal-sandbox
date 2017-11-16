import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import test  from './testReducer';


export default combineReducers({
    test: test,
    form: reduxForm
});
