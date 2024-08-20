import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

export interface Message {
    message: string;
    id: number;
    client: string;
}
  
export interface ConversationState {
    count: number;
    messages: Message[];
    userMessage: string;
    loading: boolean;
}

export interface RootState {
    conversations: ConversationState;
}

export type AppDispatch = ThunkDispatch<ConversationState, unknown, Action<string>>;