import { configureStore } from '@reduxjs/toolkit'
import { markDownReducer } from './markdownReducer'

export const store =  configureStore({
    reducer: {
      counter: markDownReducer,
    },
  })