import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { dispatchFunc, initialState } from '../reducer/video-reducer';
import { useAuth } from './auth-context';

const VideoContext = createContext();

export function VideoProvider({ children }) {
    const [videoState, dispatch] = useReducer(dispatchFunc,initialState)
    const {authState} = useAuth();
    useEffect(() => {
        if (authState.isUserLoggedIn) {
          (async () => {
            try {
              const response = await axios.get(
                `https://apirestream.sohamsshah.repl.co/userDetails/${authState.currentUserId}`
              );
              console.log({ response });
              const data = response.data.user;
              dispatch({ type: "ADD_USER_DATA", payload: data });
            } catch (error) {
              // dispatch({ type: "STATUS", payload: "Sorry, try again later.." });
            } finally {
              // dispatch({ type: "STATUS", payload: "" });
            }
          })();
        }
      }, [authState.isUserLoggedIn, authState.currentUserId]);

    

    return (
        <VideoContext.Provider value={{ videoState, dispatch }}>
            {children}
        </VideoContext.Provider>
    )
}

export function useVideo() {
    return useContext(VideoContext);
}