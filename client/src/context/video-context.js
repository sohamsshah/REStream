import React, { createContext, useContext, useReducer } from 'react';
import { dispatchFunc, initialState } from '../reducer/video-reducer';

const VideoContext = createContext();

export function VideoProvider({ children }) {
    
    const [videoState, dispatch] = useReducer(dispatchFunc,initialState)

    return (
        <VideoContext.Provider value={{ videoState, dispatch }}>
            {children}
        </VideoContext.Provider>
    )
}

export function useVideo() {
    return useContext(VideoContext);
}