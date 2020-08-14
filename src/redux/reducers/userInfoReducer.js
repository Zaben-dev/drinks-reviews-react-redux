import {SET_USER_INFO} from "../actionTypes"

const initialState = {
  userInfo: {}
}

function userInfoReducer(state=initialState, action){
    switch(action.type){
      case SET_USER_INFO:{
        return{...state, userInfo: action.userInfo}
      }
      default:{
        return state;
      }
    }
}

export default userInfoReducer;

