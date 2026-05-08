import { configureStore } from '@reduxjs/toolkit'
import studentsReducer from '../features/students/studentsSlice.js'

const store = configureStore({
  reducer: {
    students: studentsReducer,
  },
})

export default store