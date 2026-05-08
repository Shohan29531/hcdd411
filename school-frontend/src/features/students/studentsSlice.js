import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [
    { id: 1, name: 'Ava', major: 'IST' },
    { id: 2, name: 'Noah', major: 'CS' },
    { id: 3, name: 'Liam', major: 'Data Science' },
  ],
  selected: null,
}

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    selectStudent(state, action) {
      state.selected = action.payload
    },
    clearSelection(state) {
      state.selected = null
    },
  },
})

export const { selectStudent, clearSelection } = studentsSlice.actions
export default studentsSlice.reducer