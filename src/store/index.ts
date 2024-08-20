import { configureStore } from '@reduxjs/toolkit'
import conversations from './conversations.ts'

export const store = configureStore({
    reducer: {
        conversations
    },
})
