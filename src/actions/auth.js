import * as api from '../api'
import { AUTH, LOGINERROR } from '../constants/actionTypes';

export const signin = (FormData, navigate) => async (dispatch) =>{
    try {
        const {data} = await api.signIn(FormData);
        dispatch({type: AUTH, data})
        navigate('/?sign=true&message=You are logged In!!')
    } catch (error) {
        console.log(`Sign In error: ${error}`)
        const errorInfo = {
            open:true,
            title:"Login failed...",
            message: error
        }
        console.log("Action auth: ",errorInfo)
        dispatch({type: LOGINERROR, payload:errorInfo})
    }
}

export const signup = (FormData, navigate) => async (dispatch) =>{
    try {
        const {data} = await api.signUp(FormData);
        console.log("signUp data:"+JSON.stringify(data))
        dispatch({type:AUTH, data})
        navigate('/?sign=true&message=Congrats you are Signed up!!')
    } catch (error) {
        console.log(`Sign Up error: ${error}`)        
    }

}