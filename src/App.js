import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Exercises from './containers/Exercises/Exercises';

const App = props => {
    const [selectedExercises, setSelectedExercises] = useState({});
    const [category, setCategory] = useState('');

    const getExercisesByMuscles = () => {
        return Object.entries(
            props.exercisesData.reduce((exercises, exercise) => {
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
        const updatedValue = props.exercisesData.find(exercise => exercise.id === exerciseId);
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
                muscles={props.musclesData}
                onSelect={handleCategorySelected}
                category={category} />
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        exercisesData: state.exercises.exercisesData,
        musclesData: state.muscles.musclesData
    };
};

export default connect(mapStateToProps)(App);
