export function searchLikes(state, video) {
    console.log(state, video);
    if (state.likedVideos.filter((item) => item._id === video._id).length === 0) {
        return false
    } else {
        return true
    }
}

export function searchPlaylist(playlists, videoID){
    console.log(playlists, videoID);
    if (playlists.filter((item) => item._id === videoID).length === 0){
        return false
    } else{
        return true
    }
}

export function searchFollowings(state, creatorID) {
    if (state.following.filter((item) => item._id === creatorID).length === 0) {
        return false
    } else {
        return true
    }
}