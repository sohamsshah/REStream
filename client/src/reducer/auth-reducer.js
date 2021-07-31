export const dispatchFunc = (authState, {type, payload}) => {
    switch(type){
        case "LOGIN":
            return {...authState, isUserLoggedIn: true, currentUser: payload.user}
        case "LOGOUT":
            return {...authState, isUserLoggedIn: false, currentUser: null}
        default:
            return {...authState}
    }
}

export const initialState = {
    isUserLoggedIn: false,
    currentUser: null
}