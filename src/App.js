import React, { Fragment } from 'react';
import './App.css';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Exercises from './containers/Exercises/Exercises';
import { muscles, exercises } from './store/store';

const App = () => {
    //const [exercisesList, setExercisesList] = useState(exercises);

    const getExercisesByMuscles = () => {
        return Object.entries(
            exercises.reduce((exercises, exercise) => {
                const { muscles } = exercise;

                exercises[muscles] = exercises[muscles]
                    ? [...exercises[muscles], exercise]
                    : [exercise]

                return exercises;
            }, {})
        );
    };

    return (
        < Fragment >
            <Header />
            <Exercises exercises={getExercisesByMuscles()} />
            <Footer muscles={muscles} />
        </Fragment >
    );
};

export default App;
