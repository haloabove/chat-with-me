import { configureStore } from '@reduxjs/toolkit'
import conversation from './conversation'

export const store = configureStore({
    reducer: {
        conversation
    },
})
