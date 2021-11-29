import * as api from '../api'
import { AUTH } from '../constants/actionTypes';

export const signin = (FormData, navigate) => async (dispatch) =>{
    try {
        const {data} = await api.signIn(FormData);
        dispatch({type: AUTH, data})
        navigate('/')
    } catch (error) {
        console.log(`Sign In error: ${error}`)        
    }
}

export const signup = (FormData, navigate) => async (dispatch) =>{
    try {
        const {data} = await api.signUp(FormData);
        console.log("signUp data:"+JSON.stringify(data))
        dispatch({type:AUTH, data})
        navigate('/')        
    } catch (error) {
        console.log(`Sign Up error: ${error}`)        
    }

}