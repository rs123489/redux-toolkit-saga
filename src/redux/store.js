import {
    configureStore,
  } from "@reduxjs/toolkit";
import dashboardSlice from './features/dashboardSlice'
import Saga from '../sagas/rootSaga'
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    dashboard:dashboardSlice,
},
middleware:()=> [ sagaMiddleware]
})

sagaMiddleware.run(Saga);
