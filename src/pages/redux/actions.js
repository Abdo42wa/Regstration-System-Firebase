export const login = (email, id) => async (dispatch) => {

    try {
        dispatch({
            type: 'LOGGED_IN_USER',
            payload: {email, id}

        })
    } catch (error) {
        
        console.log(error)
    }
}

export const logout = () => (dispatch) => {

    try {
        dispatch({
            type: 'LOGOUT_USER',
        })
    } catch (error) {
        
        console.log(error)
    }
}