import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Typography, Paper, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { DELETE_EXERCISE } from '../../store/actions';

const LeftPane = props => {
    const { style, exercises, category, onSelect } = props;

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
                                    onClick={() => onSelect(exercise.id)}>
                                    <ListItemText primary={exercise.title} />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="Delete" onClick={() => props.onDeleteExercise(exercise.id)}>
                                            <DeleteIcon />
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

const mapDispatchToProps = dispatch => {
    return {
        onDeleteExercise: (id) => dispatch({ type: DELETE_EXERCISE, id })
    };
};

export default connect(null, mapDispatchToProps)(LeftPane);
