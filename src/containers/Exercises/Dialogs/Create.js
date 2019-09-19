import React, { useState, Fragment } from 'react';
import AddIcon from '@material-ui/icons/Add';
import {
    Fab,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText
} from '@material-ui/core';

import ExerciseForm from '../../../components/Forms';

const Create = props => {
    const [open, setOpen] = useState(false);

    const onToggleDialog = () => {
        setOpen(!open);
    };

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
                    <ExerciseForm formAction='create' closeDialog={() => setOpen(false)} />
                </DialogContent>
            </Dialog>
        </Fragment>
    );
}

export default Create;
