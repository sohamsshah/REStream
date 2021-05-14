export function searchLikes(state, video) {
    if (state.likedVideos.filter((item) => item.id === video.id).length === 0) {
        return false
    } else {
        return true
    }
}

export function searchPlaylist(playlists, videoID){
    
    if (playlists.filter((item) => item === videoID).length === 0){
        return false
    } else{
        return true
    }
}

export function searchFollowings(state, creatorID) {
    if (state.following.filter((item) => item.creator_id === creatorID).length === 0) {
        return false
    } else {
        return true
    }
}