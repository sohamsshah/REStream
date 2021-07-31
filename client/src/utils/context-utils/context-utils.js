export function searchLikes(state, videoID) {
    if (state.likedVideos.filter((item) => item.videoId._id === videoID).length === 0) {
        return false
    } else {
        return true
    }
}

export function searchPlaylist(playlists, videoID){
    if (playlists.filter((item) => item.videoId._id === videoID).length === 0){
        return false
    } else{
        return true
    }
}

export function searchFollowings(state, creatorID) {
    console.log(state, creatorID);
    if (state.following.filter((item) => item.creatorId._id === creatorID).length === 0) {
        return false
    } else {
        return true
    }
}