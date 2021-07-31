export const dispatchFunc = (authState, {type, payload}) => {
    console.log(payload.userId);
    switch(type){
        case "LOGIN":
            return {...authState, isUserLoggedIn: true, currentUserId: payload.userId}
        case "LOGOUT":
            return {...authState, isUserLoggedIn: false, currentUserId: null}
        default:
            return {...authState}
    }
}

export const initialState = {
    isUserLoggedIn: false,
    currentUserId: null
}