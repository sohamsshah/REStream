export const dispatchFunc = (videoState, {type, payload}) => {
    const {currentUserId, video} = payload;
    console.log(video);
    switch(type){
        case "ADD_USER_DATA":
            return payload;
        case "ADD_TO_LIKES":
            return {...videoState, likedVideos: [...videoState.likedVideos, video]}

        case "REMOVE_FROM_LIKES":
            return {...videoState, likedVideos: [...videoState.likedVideos.filter((item) => item.id !== video.id)]}
            
        case "REMOVE_FROM_PLAYLIST":
            videoState[currVideoStateIndex] = {...videoState[currVideoStateIndex], playlists: videoState[currVideoStateIndex].playlists.map(currPlaylist => {
                if (currPlaylist.name === payload.name) {
                    return {...currPlaylist, videos: currPlaylist.videos.filter(item => item !== payload.id)}
                } else {
                    return currPlaylist
                } 
            })}
            return [...videoState];
        // case "ADD_TO_PLAYLIST":
            
        //     videoState[currVideoStateIndex] = {...videoState[currVideoStateIndex], playlists: videoState[currVideoStateIndex].playlists.map(currPlaylist => {
        //         console.log("start", videoState);
        //         if(currPlaylist.name === payload.name){
        //             console.log({...currPlaylist, videos:[...currPlaylist.videos, payload.id]});
        //             return {...currPlaylist, videos:[...currPlaylist.videos, payload.id]}
        //         }else{
        //             return {...currPlaylist}
        //         }})
        //     }
        //     return [...videoState]

        // case "ADD_NEW_PLAYLIST":
        //     videoState[currVideoStateIndex] = {...videoState[currVideoStateIndex],  playlists: [...videoState[currVideoStateIndex].playlists, {name: payload.name, videos:[]}]}
        //     return [...videoState]
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
