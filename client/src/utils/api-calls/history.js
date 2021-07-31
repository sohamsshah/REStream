import axios from "axios";

export const addToHistory = async (currentUserId, video, dispatch) => {

    try {
        console.log("TRYINGG>...");
        const response = await axios.post(
          `https://apirestream.sohamsshah.repl.co/userDetails/${currentUserId}/history/${video._id}`,
        );
        console.log({response});
        if (response.status === 201) {
            console.log("SUCCESS");
            const {addedVideo} = response.data;
            
            
            dispatch({type:"ADD_TO_HISTORY", payload: {video: addedVideo}});

        }
      } catch (error) {
       
      } finally {
        
      }
}
export const removeFromHistory = async (currentUserId, video, dispatch) => {

    try {
        console.log("TRYINGG>...");
        const response = await axios.delete(
          `https://apirestream.sohamsshah.repl.co/userDetails/${currentUserId}/history/${video._id}`,
        );
        console.log({response});
        if (response.status === 201) {
            console.log("SUCCESSFULLY REMOVED");
            dispatch({type:"REMOVE_FROM_HISTORY", payload: {video}});

        }
      } catch (error) {
       
      } finally {
        
      }
}
