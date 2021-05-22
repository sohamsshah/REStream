import React, {useState} from 'react'
import {useVideo} from "./../../../context/video-context"
import "./PlaylistModal.css"
import {searchPlaylist} from "./../../../utils/context-utils/context-utils"
import {useAuth} from "./../../../context/auth-context"


function PlaylistModal({video, showModal, setShowModal}) {
    const {authState} = useAuth();
    const {currentUserId} = authState;
    const { videoState, dispatch } = useVideo();
    const [modalInput, setModalInput] = useState("")
    
    function checkBoxHandler(e, item) {
        
        if(currentUserId !== null){
            if (searchPlaylist(item.videos, video._id) === true) {
                dispatch({ type: "REMOVE_FROM_PLAYLIST", payload: { name: item.name, video: video, currentUserId:currentUserId } })
            
            } else {
             
                dispatch({ type: "ADD_TO_PLAYLIST", payload: { name: item.name, video: video} })
            }
        }

    }

    function addNewPlaylist(e){
        e.preventDefault();
        if (modalInput.trim().length === 0)
            return
        dispatch({ type: "ADD_NEW_PLAYLIST", payload: {name:modalInput } })
        setModalInput("");
    }
    return (
        <div 
            onClick={() => setShowModal(false)}
            className={showModal ? 'modal-wrapper' : 'modal-wrapper modal-hide'}
        >
            <div
                onClick={(e) => { e.stopPropagation();}}
                className="modal"
            >
                <div className="modal__heading">
                    ADD TO PLAYLIST
                </div>
                <div className="modal__options">
                    {
                        (currentUserId)?(videoState.playlists.map((item, index) => {
                            

                            return (
                                <div
                                    key = {index}
                                    className="checkbox">
                                    <label htmlFor={`checkBox${index}`}>
                                        <input
                                            onChange={(e) => checkBoxHandler(e, item)} type="checkbox"
                                            name="checkbox"
                                            id={`checkBox${index}`}
                                            checked = {(currentUserId)?(searchPlaylist(item.videos, video._id)):false}
                                        />
                                        {item.name}
                                    </label>
                                </div>
                            )
                        })
                        ):""
                    }
                </div>
                <form onSubmit={(e) => addNewPlaylist(e)} className="modal-add">
                    <input
                        value={modalInput}
                        onChange={(e) => setModalInput(e.target.value)}
                        type="text"
                        placeholder="New PlayList.."
                    />
                    <button type="submit" >ADD</button>
                </form>
                

            </div>
            
        </div>
    )
}

export default PlaylistModal
