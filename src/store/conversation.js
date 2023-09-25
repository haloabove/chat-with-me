import { createSlice } from '@reduxjs/toolkit'
import { messagesApiClient } from '../api/index';

const client = messagesApiClient();

export const conversations = createSlice({
    name: 'conversations',
    initialState: {
        count: 0,
        conversations: [{
            message: 'Hello, do you have any questions for me?',
            id: 0,
            client: ''
        }],
        userMessage: '',
        loading: false,
    },
    reducers: {
        addUserInput: (state, action) => {
            state.userMessage = action.payload
        },
        addMessage: (state, action) => {
            state.conversations.push({
                message: action.payload.message,
                id: state.count,
                client: action.payload.client
            });
            state.count += 1;
        },
        setLoading: (state, action) => {
            state.loading = action.payload.loading;
        }
    },
});

export const fetchMessageFromOpenAI = () => async (dispatch, getState) => {
    const userMessage = getState().conversation.userMessage;

    dispatch(setLoading({ loading: true }));

    client.sendMessage(userMessage)
        .then(response => {
            dispatch(addMessage({ client: "chatbot", message: response }));
            dispatch(setLoading({ loading: false }));
        })
        .catch(error => {
            dispatch(setLoading({ loading: false }));
            console.error(error);
        });
};

export const { addUserInput, addMessage, setLoading } = conversations.actions;

export default conversations.reducer;