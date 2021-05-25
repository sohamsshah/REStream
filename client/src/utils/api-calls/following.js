import axios from "axios";

export const followCreator = async (currentUserId, creator, dispatch) => {

    try {
    
        const response = await axios.post(
          `https://apirestream.sohamsshah.repl.co/userDetails/${currentUserId}/follow/${creator._id}`,
        );
        console.log({response});
        if (response.status === 201) {
            const {followedCreator} = response.data;
            const {creatorId} = followedCreator;
        
            dispatch({type : "FOLLOW", payload:{creator:creatorId}})
        }
      } catch (error) {
       
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
            const {creatorId} = unfollowedCreator
            dispatch({type:"UNFOLLOW", payload:{creator:creatorId}});

        }
      } catch (error) {
       
      } finally {
        
      }
}
