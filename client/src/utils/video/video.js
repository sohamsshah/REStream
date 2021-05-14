export const fetchVideoDetails = (data, video_id) => {
    return data.videos.find((item => item.id === video_id))
}