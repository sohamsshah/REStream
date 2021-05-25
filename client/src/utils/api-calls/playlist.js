import axios from "axios";

export const addNewPlaylist = async (currentUserId,playlistName, dispatch) => {

    try {
    
        const response = await axios.post(
          `https://apirestream.sohamsshah.repl.co/userDetails/${currentUserId}/playlists`,
          {
            name: playlistName
          }
        );
        console.log({response});
        if (response.status === 201) {
            
            dispatch({ type: "ADD_NEW_PLAYLIST", payload: {playlist: response.data.savedPlaylist } });

        }
      } catch (error) {
       
      } finally {
        
      }
}

export const addToPlaylist = async (currentUserId, playlistId, video, dispatch) => {

    try {
    
        const response = await axios.post(
          `https://apirestream.sohamsshah.repl.co/userDetails/${currentUserId}/playlists/${playlistId}/${video._id}`,
          
        );
        console.log({response});
        
        if (response.status === 201) {
            console.log("jhere");
            const {video} = response.data;
            console.log(video);
            
            dispatch({type:"ADD_TO_PLAYLIST", payload:{playlistId: playlistId, video:video.videoId}});

        }
      } catch (error) {
       
      } finally {
        
      }
}

export const removeFromPlaylist = async (currentUserId, playlistId, video, dispatch) => {

    try {
    
        const response = await axios.delete(
          `https://apirestream.sohamsshah.repl.co/userDetails/${currentUserId}/playlists/${playlistId}/${video._id}`,
          
        );
        console.log({response});
        
        if (response.status === 201) {
            
            dispatch({type:"REMOVE_FROM_PLAYLIST", payload:{video: video, playlistId: playlistId}});

        }
      } catch (error) {
       
      } finally {
        
      }
}
