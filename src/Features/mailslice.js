import { createSlice } from '@reduxjs/toolkit'

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMessage: null
  },
  reducers: {
    mailMessage: (state, action) => {
      state.selectedMessage = action.payload
    }
  }
})

export const { mailMessage} = mailSlice.actions;

export const selectedMsg = (state) =>  state.mail.selectedMessage;

export default mailSlice.reducer