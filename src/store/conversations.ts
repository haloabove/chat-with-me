import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { messagesApiClient } from '../api/index.ts';
import { ConversationState } from '../models/index.ts';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';


const client = messagesApiClient();

const initialState: ConversationState = {
    count: 0,
    messages: [{
        message: 'Hello, do you have any questions for me?',
        id: 0,
        client: ''
    }],
    userMessage: '',
    loading: false,
};

export const conversations = createSlice({
    name: 'conversations',
    initialState,
    reducers: {
        addUserInput: (state, action: PayloadAction<string>) => {
            state.userMessage = action.payload
        },
        addMessage: (state, action: PayloadAction<{ message: string; client: string }>) => {
            state.messages.push({
                message: action.payload.message,
                id: state.count,
                client: action.payload.client
            });
            state.count += 1;
        },
        setLoading: (state, action: PayloadAction<{ loading: boolean }>) => {
            state.loading = action.payload.loading;
        }
    },
});

export const fetchMessageFromOpenAI = (): ThunkAction<void, ConversationState, unknown, Action<string>> => async (dispatch, getState) => {
    const userMessage = getState().userMessage;

    dispatch(setLoading({ loading: true }));

    try {
        const response = await client.sendMessage(userMessage);
        
        dispatch(addMessage({ client: "chatbot", message: response }));
    } catch (error) {
        console.error(error);
    } finally {
        dispatch(setLoading({ loading: false }));
    }
};

export const { addUserInput, addMessage, setLoading } = conversations.actions;

export default conversations.reducer;