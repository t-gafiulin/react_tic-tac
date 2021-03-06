import { CHANGE_GAMEFIELD_SIZE } from "../constants";

const initialState = {
    gameFieldSize: 3,
}

export default function game(state = initialState, action){
    switch(action.type){
        case CHANGE_GAMEFIELD_SIZE:
                return {
                    ...state,
                    gameFieldSize: action.size
                }
        default: 
            return state;
    }
}