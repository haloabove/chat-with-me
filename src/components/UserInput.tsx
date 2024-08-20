import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ConversationState, AppDispatch } from '../models/index.ts';

import { fetchMessageFromOpenAI, addUserInput, addMessage } from "../store/conversations.ts";
import Loading from "./Loading.tsx";


function UserInput() {
    const dispatch = useDispatch<AppDispatch>();
    
    const [input, setInput] = useState('');
    
    const loadingState = useSelector((state:ConversationState ) => state.loading);
    
    const inputRef = useRef<HTMLInputElement | null>(null);
    
    const handleUserInput = (e) => {
        e.preventDefault();
        
        dispatch(addUserInput(input));
        
        dispatch(addMessage({ client: 'Me', message: input }));
        
        dispatch(fetchMessageFromOpenAI());
        
        setInput('');

        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    const isButtonDisabled = input.trim() === '' && loadingState;

    return (
        <div className="row user-input min-vh-20">
            <form method="post" onSubmit={ handleUserInput }>
                <div className="row">
                    <div className="col col-11">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            name="userInput"
                            onInput={(e) => setInput((e.target as HTMLInputElement).value)}
                            ref={inputRef}
                            disabled={isButtonDisabled}
                        />
                    </div>
                    <div className="col col-1">
                        {loadingState ? (
                            <Loading />
                        ) : (
                            <button type="submit" className="btn btn-link" disabled={isButtonDisabled}>
                                <svg height="30px" viewBox="0 0 24 24" width="30px">
                                    <path fill="blue" d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"></path>
                                </svg>
                            </button>
                        )}
                    </div>
                </div >
            </form >
        </div >
    );
}

export default UserInput;