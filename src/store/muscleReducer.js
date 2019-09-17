import { } from './actions';

const initialState = {
    musclesData: ['shoulders', 'arms', 'chest', 'back', 'legs']
};

const muscleReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default muscleReducer;
