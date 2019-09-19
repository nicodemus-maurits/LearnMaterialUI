import { SET_SELECTED_EXERCISE, REMOVE_SELECTED_EXERCISE, SET_EDIT_MODE } from './actions';

const initialState = {
    selectedExercise: {
        id: '',
        title: 'Welcome',
        description: 'Please select Exercise from the left pane',
        muscles: ''
    },
    editMode: false
};

const selExerciseReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_EXERCISE:
            return {
                ...state,
                selectedExercise: action.payload
            };

        case REMOVE_SELECTED_EXERCISE:
            return initialState;

        case SET_EDIT_MODE:
            return {
                selectedExercise: action.payload,
                editMode: action.activate
            }

        default:
            return state;
    }
};

export default selExerciseReducer;
