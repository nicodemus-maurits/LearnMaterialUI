import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ADD_EXERCISE, UPDATE_EXERCISE, SET_EDIT_MODE } from '../../store/actions';

import Form from './Form';

const validationSchema = Yup.object({
    title: Yup.string('Enter a title')
        .required('Title is required'),
    description: Yup.string('Enter a description')
        .required('Description is required')
});

const ExerciseForm = props => {
    const { formAction, closeDialog } = props;
    let initValues = { title: '', muscles: 'shoulders', description: '' };
    if (formAction === 'update')
        initValues = props.selectedExercise

    const submitValues = obj => {
        if (formAction === 'update') {
            props.onUpdateExercise(obj);
            props.onSetEditMode(obj, false);
        } else {
            props.onAddExercise(obj);
            //Execute function to close dialog box on creating exercise
            closeDialog();
        }
    }

    return <Formik
        render={props => <Form {...props} formAction={formAction} />}
        initialValues={initValues}
        validationSchema={validationSchema}
        onSubmit={submitValues}
    />
}

const mapStateToProps = state => {
    return {
        selectedExercise: state.selExercise.selectedExercise,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddExercise: (payload) => dispatch({ type: ADD_EXERCISE, payload }),
        onUpdateExercise: (payload) => dispatch({ type: UPDATE_EXERCISE, payload }),
        onSetEditMode: (payload, activate) => dispatch({ type: SET_EDIT_MODE, payload, activate })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseForm);
