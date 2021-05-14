export const dispatchFunc = (videoState, {type, payload}) => {
    const {currentUserId, video} = payload;
    const currVideoStateIndex = videoState.findIndex(item => item.id === currentUserId);
    switch(type){
        case "ADD_TO_LIKES":
            videoState[currVideoStateIndex] = {...videoState[currVideoStateIndex], likedVideos:[...videoState[currVideoStateIndex].likedVideos, video]}
            return [...videoState]
        case "REMOVE_FROM_LIKES":
            videoState[currVideoStateIndex] = {...videoState[currVideoStateIndex], likedVideos: [...videoState[currVideoStateIndex].likedVideos.filter((item) => item.id !== video.id)]}
            return [...videoState]
        case "REMOVE_FROM_PLAYLIST":
            videoState[currVideoStateIndex] = {...videoState[currVideoStateIndex], playlists: videoState[currVideoStateIndex].playlists.map(currPlaylist => {
                if (currPlaylist.name === payload.name) {
                    return {...currPlaylist, videos: currPlaylist.videos.filter(item => item !== payload.id)}
                } else {
                    return currPlaylist
                } 
            })}
            return [...videoState];
        case "ADD_TO_PLAYLIST":
            
            videoState[currVideoStateIndex] = {...videoState[currVideoStateIndex], playlists: videoState[currVideoStateIndex].playlists.map(currPlaylist => {
                console.log("start", videoState);
                if(currPlaylist.name === payload.name){
                    console.log({...currPlaylist, videos:[...currPlaylist.videos, payload.id]});
                    return {...currPlaylist, videos:[...currPlaylist.videos, payload.id]}
                }else{
                    return {...currPlaylist}
                }})
            }
            return [...videoState]

        case "ADD_NEW_PLAYLIST":
            videoState[currVideoStateIndex] = {...videoState[currVideoStateIndex],  playlists: [...videoState[currVideoStateIndex].playlists, {name: payload.name, videos:[]}]}
            return [...videoState]
        case "FOLLOW":
            videoState[currVideoStateIndex] = {...videoState[currVideoStateIndex], following:[...videoState[currVideoStateIndex].following, payload.creator]}
            return [...videoState]
        case "UNFOLLOW":
            videoState[currVideoStateIndex] = {...videoState[currVideoStateIndex], following: [...videoState[currVideoStateIndex].following.filter((item) => item.creator_id !== payload.creator.creator_id)]}
            return [...videoState]

        default:
            return [...videoState]


    }
}
export const initialState = [
    {
        id: "123",
        likedVideos: [],
        following: [],
        playlists: [
            {
                name: "Favourites",
                videos: []
            }
        ]
    },
]