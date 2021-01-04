import { TEST_ADD } from "../actions";

const initialState = {
    counter : 0
};

export default (state = initialState,action) => {
    switch (action.type){
        case TEST_ADD :
            return {
                ...state,
                counter: state.counter + action.payload
            }
        default: return state
    }
}