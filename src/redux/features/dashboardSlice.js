import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  punchDetailByDate: [],
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    getPunchDetailByDate() { },
    setPunchDetail(state, action) {
      const punchDetail = action.payload;
      return { ...state, punchDetail: punchDetail, isError: false };
    }
  },
})

// Action creators are generated for each case reducer function
export const { getPunchDetailByDate, setPunchDetail } = dashboardSlice.actions

export default dashboardSlice.reducer