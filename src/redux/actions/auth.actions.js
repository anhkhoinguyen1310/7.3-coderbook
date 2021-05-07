import { toast } from "react-toastify";

import * as types from "../constants/auth.constants";

import api from "../../apiService";


const register = (email, password) => async (dispatch) => {
    try {
        dispatch({type: types.REGISTER_REQUEST})
    }
    catch(error){console.log({error});}
 
}; 
const authActions = {
    register,
};

export {authActions};
   