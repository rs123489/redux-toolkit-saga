import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getPunchDetailByDate } from '../../redux/features/dashboardSlice'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getPunchDetail(action) {
    console.log(action)
  try {
    const user = yield call(Api.fetchUser, action.payload.userId)
    yield put({ type: action.setPunchDetail, user: user })
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(getPunchDetailByDate, getPunchDetail)
}

export default mySaga