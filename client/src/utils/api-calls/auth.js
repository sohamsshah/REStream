import axios from "axios";

export const loginUser = async (username, password, dispatch) => {

    try {
        const response = await axios.post(
          `https://apirestream.sohamsshah.repl.co/auth/login`,
          {
            username: username,
            password: password
          }
        );
        if (response.status === 200) {
            
            dispatch({type:"LOGIN", payload:{user:response.data.user}});     
        }
        return {success:true}
        
      } catch (error) {
        return {success:false}
          
      } finally {
          
      }
}

export const signUpUser = async (email, username, password, dispatch) => {

    try {
    
        const response = await axios.post(
          `https://apirestream.sohamsshah.repl.co/auth/signup`,
          {
            email: email,
            username: username,
            password: password
          }
        );
        if (response.status === 201) {
            dispatch({type:"LOGIN", payload:{userId:response.data.user._id}})
        }
        return {success:true}
      } catch (error) {
        return {success:false}
      } finally {
        
      }
}