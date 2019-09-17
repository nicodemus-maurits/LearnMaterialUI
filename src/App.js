import React, { useState, Fragment } from 'react';
import './App.css';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Exercises from './containers/Exercises/Exercises';
import { musclesData, exercisesData } from './store/store';

const App = () => {
    const [exercisesList, setExercisesList] = useState(exercisesData);
    const [selectedExercises, setSelectedExercises] = useState({});
    const [category, setCategory] = useState('');

    const getExercisesByMuscles = () => {
        return Object.entries(
            exercisesList.reduce((exercises, exercise) => {
                const { muscles } = exercise;

                exercises[muscles] = exercises[muscles]
                    ? [...exercises[muscles], exercise]
                    : [exercise]

                return exercises;
            }, {})
        );
    };

    const handleCategorySelected = category => {
        setCategory(category);
    };

    const handleExerciseSelected = exerciseId => {
        const updatedValue = exercisesList.find(exercise => exercise.id === exerciseId);
        setSelectedExercises(updatedValue);
    };

    const exercises = getExercisesByMuscles();

    return (
        <Fragment>
            <Header />
            <Exercises
                selectedExercise={selectedExercises}
                exercises={exercises}
                category={category}
                onSelect={handleExerciseSelected} />
            <Footer
                muscles={musclesData}
                onSelect={handleCategorySelected}
                category={category} />
        </Fragment>
    );
};

export default App;
