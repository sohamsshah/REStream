export const dispatchFunc = (videoState, {type, payload}) => {
    switch(type){
        case "ADD_USER_DATA":
            return payload;
        case "ADD_TO_LIKES":
            return {...videoState, likedVideos: [...videoState.likedVideos, payload.video]}

        case "REMOVE_FROM_LIKES":
            return {...videoState, likedVideos: [...videoState.likedVideos.filter((item) => item.id !== payload.video._id)]}
            
        case "REMOVE_FROM_PLAYLIST":
            return {...videoState, playlists: videoState.playlists.map(currPlaylist => {
                if (currPlaylist.name === payload.name) {
                    return {...currPlaylist, videos: currPlaylist.videos.filter(item => item._id !== payload.video._id)}
                } else {
                    return currPlaylist
                } 
            })}
        
        case "ADD_TO_PLAYLIST":

        return {...videoState, playlists: videoState.playlists.map(currPlaylist => {
            
            if(currPlaylist.name === payload.name){
    
                return {...currPlaylist, videos:[...currPlaylist.videos, payload.video]}
            }else{
                return {...currPlaylist}
            }})
        }
            
        case "ADD_NEW_PLAYLIST":
            return {...videoState, playlists: [...videoState.playlists, {name: payload.name, videos:[]}]}

        case "FOLLOW":
            return {...videoState, following: [...videoState.following, payload.creator]}
            
        case "UNFOLLOW":
            return {...videoState, following: [...videoState.following.filter((item) => item._id !== payload.creator._id)]}
            

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
        ]
}
