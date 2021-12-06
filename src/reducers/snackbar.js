import { LOGINERROR } from "../constants/actionTypes";
export default (snackObj = {}, action) => {
    switch (action.type) {
        case LOGINERROR:
        return action.payload;
        break;
    
        default:
            return snackObj;
            break;
    }
}