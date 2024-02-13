import {all} from 'redux-saga/effects'
import dashboard from './saga/dashboard'

export default function* rootSaga(){
    yield all([dashboard()])
}