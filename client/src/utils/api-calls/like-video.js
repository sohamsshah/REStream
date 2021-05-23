import axios from "axios";

export const likeVideo = async (currentUserId, video, dispatch) => {

    try {
    
        const response = await axios.post(
          `https://apirestream.sohamsshah.repl.co/userDetails/${currentUserId}/likedVideos`,
          {
            videoId: video._id
          }
        );
        console.log({response});
        if (response.status === 201) {
            const {addedVideo} = response.data;
            const {_id, videoId} = addedVideo;
            
            dispatch({type:"ADD_TO_LIKES", payload:{video:{_id, ...videoId}}});

        }
      } catch (error) {
       
      } finally {
        
      }
}

export const dislikeVideo = async (currentUserId, video, dispatch) => {
    try {
        const response = await axios.delete(
          `https://apirestream.sohamsshah.repl.co/userDetails/${currentUserId}/likedVideos/${video._id}`,
        );
        if (response.status === 201) {
            dispatch({type:"REMOVE_FROM_LIKES", payload:{video:video}});

        }
      } catch (error) {
       
      } finally {
        
      }
}
