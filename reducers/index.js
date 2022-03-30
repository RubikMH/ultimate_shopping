import { combineReducers } from 'redux'
import loadPostReduser from './loadPostReduser'

export default combineReducers({
    post: loadPostReduser,
})