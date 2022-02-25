import { configureStore } from '@reduxjs/toolkit'
import mailReducer from '../Features/mailslice'
import userSlice from '../Features/userSlice'

export default configureStore({
  reducer: {
    mail: mailReducer,
    user: userSlice
  }
})