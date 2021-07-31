import React, {useState} from 'react'
import {useVideo} from "./../../../context/video-context"
import "./PlaylistModal.css"
import {searchPlaylist} from "./../../../utils/context-utils/context-utils"
import {useAuth} from "./../../../context/auth-context"
import {addNewPlaylist as addNewPlaylistToDB, addToPlaylist, removeFromPlaylist} from "./../../../utils/api-calls/playlist"
import Button from "./../../atoms/Button/Button"

function PlaylistModal({video, showModal, setShowModal}) {
    const {authState} = useAuth();
    const {currentUser} = authState;
    const { videoState, dispatch } = useVideo();
    const [modalInput, setModalInput] = useState("")
    
    async function checkBoxHandler(e, item) {
        if(currentUser !== null){
            if (searchPlaylist(item.videos, video._id) === true) {
                await removeFromPlaylist(currentUser._id, item._id, video, dispatch);
                
            } else {
                await addToPlaylist(currentUser._id, item._id, video, dispatch);
            }
        }

    }

    async function addNewPlaylist(e){
        e.preventDefault();
        if (modalInput.trim().length === 0)
            return
        addNewPlaylistToDB(currentUser._id, modalInput, dispatch);        
        
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
                    Add to Playlist
                </div>
                <div className="modal__options">
                    {
                        (currentUser)?(videoState.playlists.map((item, index) => {
                            

                            return (
                                <div
                                    key = {index}
                                    className="modal__checkbox">
                                    <label htmlFor={`checkBox${index}`}>
                                        <input
                                            onChange={(e) => checkBoxHandler(e, item)} type="checkbox"
                                            name="checkbox"
                                            id={`checkBox${index}`}
                                            checked = {(currentUser._id)?(searchPlaylist(item.videos, video._id)):false}
                                        />
                                        {item.name}
                                    </label>
                                </div>
                            )
                        })
                        ):""
                    }
                </div>
                <form onSubmit={(e) => addNewPlaylist(e)} className="modal__add">
                    <input
                        value={modalInput}
                        onChange={(e) => setModalInput(e.target.value)}
                        type="text"
                        placeholder="New PlayList.."
                    />
                    <Button type="submit">ADD</Button>
                    
                </form>
                

            </div>
            
        </div>
    )
}

export default PlaylistModal
