import axios from "axios";

export const followCreator = async (currentUserId, creator, dispatch) => {
  console.log("clicked");
    try {
    
        const response = await axios.post(
          `https://apirestream.sohamsshah.repl.co/userDetails/${currentUserId}/follow/${creator._id}`,
        );
        console.log({response});
        if (response.status === 201) {
            const {followedCreator} = response.data;
        
            dispatch({type : "FOLLOW", payload:{creator:followedCreator}})
        }
      } catch (error) {
        console.log(error);
      } finally {
        
      }
}

export const unfollowCreator = async (currentUserId, creator, dispatch) => {
    try {
        const response = await axios.delete(
          `https://apirestream.sohamsshah.repl.co/userDetails/${currentUserId}/follow/${creator._id}`,
        );
        console.log({response});
        if (response.status === 201) {
            const {unfollowedCreator} = response.data;
            
            dispatch({type:"UNFOLLOW", payload:{creator:unfollowedCreator}});

        }
      } catch (error) {
       
      } finally {
        
      }
}
