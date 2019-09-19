import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Typography, Paper, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

import { DELETE_EXERCISE, SET_SELECTED_EXERCISE, REMOVE_SELECTED_EXERCISE, SET_EDIT_MODE } from '../../store/actions';

const LeftPane = props => {
    const { style, exercises, category } = props;

    const selectedExerciseHandler = id => {
        const selectedExercise = props.exercisesData.find(exercise => exercise.id === id);
        props.onSetSelectedExercise(selectedExercise);
    };

    const triggerUpdateExercise = id => {
        const selectedExercise = props.exercisesData.find(exercise => exercise.id === id);
        props.onSetEditMode(selectedExercise, true);
    }

    const deleteExerciseHandler = id => {
        props.onDeleteExercise(id);
        props.onRemoveSelectedExercise();
    }

    return (
        <Paper style={style}>
            {exercises.map(([group, exercisesList], index) => (
                !category || category === group
                    ? < Fragment key={index} >
                        <Typography
                            variant='subtitle1'
                            style={{ textTransform: 'capitalize' }}>
                            {group}
                        </Typography>

                        <List component="ul">
                            {exercisesList.map((exercise, index) => (
                                <ListItem
                                    key={index}
                                    button
                                    onClick={() => selectedExerciseHandler(exercise.id)}>
                                    <ListItemText primary={exercise.title} />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="Edit" onClick={() => triggerUpdateExercise(exercise.id)}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="Delete" onClick={() => deleteExerciseHandler(exercise.id)}>
                                            <Delete />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))}
                        </List>
                    </Fragment>
                    : null
            ))}
        </Paper>
    );
};

const mapStateToProps = state => {
    return {
        exercisesData: state.exercises.exercisesData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDeleteExercise: (id) => dispatch({ type: DELETE_EXERCISE, id }),
        onSetSelectedExercise: (payload) => dispatch({ type: SET_SELECTED_EXERCISE, payload }),
        onSetEditMode: (payload, activate) => dispatch({ type: SET_EDIT_MODE, payload, activate }),
        onRemoveSelectedExercise: () => dispatch({ type: REMOVE_SELECTED_EXERCISE })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftPane);
