import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Exercises from './containers/Exercises/Exercises';

const App = props => {
    const [category, setCategory] = useState('');

    const getExercisesByMuscles = () => {
        const initialExercises = props.musclesData.reduce((exercises, category) => ({
            ...exercises,
            [category]: []
        }), {});

        return Object.entries(
            props.exercisesData.reduce((exercises, exercise) => {
                const { muscles } = exercise;

                exercises[muscles] = [...exercises[muscles], exercise];

                return exercises;
            }, initialExercises)
        );
    };

    const handleCategorySelected = category => {
        setCategory(category);
    };

    const exercises = getExercisesByMuscles();

    return (
        <Fragment>
            <Header />
            <Exercises
                exercises={exercises}
                category={category} />
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
