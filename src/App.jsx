import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {  useDispatch } from 'react-redux'
import * as action from './redux/features/dashboardSlice'

function App() {

  const dispatch =useDispatch()

  return (
    <>
     <button onClick={()=>dispatch(action.getPunchDetailByDate())}>fghbcvvc</button>
    </>
  )
}

export default App
