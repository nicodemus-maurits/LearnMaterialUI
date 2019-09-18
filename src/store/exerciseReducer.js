import { ADD_EXERCISE, DELETE_EXERCISE } from './actions';

const initialState = {
    exercisesData: [
        {
            id: 'overhead-press',
            title: 'Overhead Press',
            description: 'Delts exercise...',
            muscles: 'shoulders'
        },
        {
            id: 'dips',
            title: 'Dips',
            description: 'Triceps exercise...',
            muscles: 'arms'
        },
        {
            id: 'barbell-curls',
            title: 'Barbell Curls',
            description: 'Biceps exercise...',
            muscles: 'arms'
        },
        {
            'id': 'bench-press',
            title: 'Bench Press',
            description: 'Chest exercise...',
            muscles: 'chest'
        },
        {
            id: 'pull-ups',
            title: 'Pull Ups',
            description: 'Back and biceps exercise...',
            muscles: 'back'
        },
        {
            id: 'deadlifts',
            title: 'Deadlifts',
            description: 'Back and leg exercise...',
            muscles: 'back'
        },
        {
            id: 'squats',
            title: 'Squats',
            description: 'Legs exercise...',
            muscles: 'legs'
        }
    ]
}

const generateId = str => str.toLocaleLowerCase().replace(/ /g, '-');

const exerciseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXERCISE:
            const { title, description, muscles } = action.payload;
            const id = generateId(title);
            return {
                ...state,
                exercisesData: state.exercisesData.concat({
                    id,
                    title,
                    description,
                    muscles
                })
            };

        case DELETE_EXERCISE:
            const updatedData = state.exercisesData.filter(exercise => exercise.id !== action.id);
            return {
                ...state,
                exercisesData: updatedData
            };

        default:
            return state;
    }
};

export default exerciseReducer;
