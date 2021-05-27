export const dispatchFunc = (videoState, {type, payload}) => {
    switch(type){
        case "ADD_USER_DATA":
            return payload;
        case "ADD_TO_LIKES":
            
            return {...videoState, likedVideos: [...videoState.likedVideos, payload.video]}

        case "REMOVE_FROM_LIKES":
            console.log({payload});
            return {...videoState, likedVideos: [...videoState.likedVideos.filter((item) => item.videoId._id !== payload.video._id)]}
            
        case "REMOVE_FROM_PLAYLIST":
            return {...videoState, playlists: videoState.playlists.map(currPlaylist => {
                if (currPlaylist._id=== payload.playlistId) {
                    return {...currPlaylist, videos: currPlaylist.videos.filter(item => item.videoId._id !== payload.video._id)}
                } else {
                    return currPlaylist
                } 
            })}
        
        case "ADD_TO_PLAYLIST":
            return {...videoState, playlists: videoState.playlists.map(currPlaylist => {
            
            if(currPlaylist._id === payload.playlistId){
    
                return {...currPlaylist, videos:[...currPlaylist.videos, payload.video]}
            }else{
                return {...currPlaylist}
            }})
        }
            
        case "ADD_NEW_PLAYLIST":
            return {...videoState, playlists: [...videoState.playlists, payload.playlist]}

        case "DELETE_PLAYLIST":
            return {...videoState, playlists:[...videoState.playlists.filter(item => item._id !== payload.playlist._id)]}
        
        case "FOLLOW":
            return {...videoState, following: [...videoState.following, payload.creator]}
            
        case "UNFOLLOW":
            return {...videoState, following: [...videoState.following.filter((item) => item._id !== payload.creator._id)]}
        
        case "ADD_TO_HISTORY":
            return {...videoState, history: [...videoState.history, payload.video]}
        
        case "REMOVE_FROM_HISTORY":
            return {...videoState, history: [...videoState.history.filter(item => item._id !== payload.video._id)]};
        
        case "CLEAR_HISTORY":
            return {...videoState, history: []}
        


        default:
            return {...videoState}


    }
}
export const initialState = {
        _id: "60a13ddc7e25f80154b8ec80",
        likedVideos: [],
        following: [],
        playlists: [
            {
                name: "Favourites",
                videos: []
            }
        ],
        history: []
}
