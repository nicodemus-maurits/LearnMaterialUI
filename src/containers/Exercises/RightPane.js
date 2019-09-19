import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Paper, Typography } from '@material-ui/core';
import ExerciseForm from '../../components/Forms';

const RightPane = props => {
    const { style } = props;
    const { title, description } = props.selectedExercise;

    let content = <Fragment>
        <Typography variant='subtitle1'>
            {title}
        </Typography>
        <Typography
            variant='subtitle2'
            style={{ marginTop: 20 }}>
            {description}
        </Typography>
    </Fragment>;

    if (props.editMode) {
        content = <ExerciseForm formAction='update' />
    }

    return (
        <Paper style={style}>
            {content}
        </Paper>
    );
};

const mapStateToProps = state => {
    return {
        selectedExercise: state.selExercise.selectedExercise,
        editMode: state.selExercise.editMode
    }
}

export default connect(mapStateToProps)(RightPane);
