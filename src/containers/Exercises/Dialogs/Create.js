import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core';
import {
    Fab,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@material-ui/core';

import { ADD_EXERCISE } from '../../../store/actions';

const Create = props => {
    const initialExerciseState = {
        title: '',
        description: '',
        muscles: ''
    };

    const [open, setOpen] = useState(false);
    const [exercise, setExercise] = useState(initialExerciseState);

    const handleChange = value => event => {
        const updatedValue = { ...exercise, [value]: event.target.value };
        setExercise(updatedValue);
    };

    const onToggleDialog = () => {
        setOpen(!open);
    };

    const handleSubmit = event => {
        event.preventDefault();
        //@todo: validate

        //Add Exercise to Redux
        props.onAddExercise(exercise);

        //Reset Exercise state
        setExercise(initialExerciseState);

        //Close Dialog
        setOpen(false);
    };

    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column'
        },
        formControl: {
            width: 500,
            margin: theme.spacing(1),
            minWidth: 120
        },
        capitalize: {
            textTransform: 'capitalize'
        }
    }));

    const classes = useStyles();

    return (
        <Fragment>
            <Fab aria-label="add" size="small" onClick={onToggleDialog}>
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={onToggleDialog} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create a new exercise</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the form below
                    </DialogContentText>
                    <form className={classes.root}>
                        <TextField
                            className={classes.formControl}
                            label="Title"
                            value={exercise.title}
                            onChange={handleChange('title')}
                            margin="normal" />
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="muscle-simple">Muscle</InputLabel>
                            <Select
                                className={classes.capitalize}
                                value={exercise.muscles}
                                onChange={handleChange('muscles')}
                                inputProps={{
                                    name: 'muscles',
                                    id: 'muscle-simple'
                                }}>
                                {props.musclesData.map((muscle, index) => (
                                    <MenuItem key={index} value={muscle} className={classes.capitalize}>{muscle}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            className={classes.formControl}
                            label="Description"
                            value={exercise.description}
                            onChange={handleChange('description')}
                            multiline
                            rows="4"
                            margin="normal"
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleSubmit}>
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

const mapStateToProps = state => {
    return {
        musclesData: state.muscles.musclesData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddExercise: (payload) => dispatch({ type: ADD_EXERCISE, payload })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
