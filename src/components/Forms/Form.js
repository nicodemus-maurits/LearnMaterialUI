import React from 'react';
import { connect } from 'react-redux';
import {
    makeStyles,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button
} from '@material-ui/core';

const Form = props => {
    const { values: { title, muscles, description },
        formAction,
        errors,
        touched,
        handleSubmit,
        handleChange,
        setFieldTouched
    } = props;

    const change = (name, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
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
        <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
                label="Title"
                name='title'
                value={title}
                className={classes.formControl}
                onChange={change.bind(null, 'title')}
                error={touched.title && Boolean(errors.title)}
                helperText={touched.title ? errors.title : ''}
                margin="normal" />
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="muscle-simple">Muscle</InputLabel>
                <Select
                    className={classes.capitalize}
                    value={muscles}
                    onChange={change.bind(null, 'muscles')}
                    name='muscles'
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
                label="Description"
                name='description'
                value={description}
                className={classes.formControl}
                onChange={change.bind(null, 'description')}
                error={touched.description && Boolean(errors.description)}
                helperText={touched.description ? errors.description : ''}
                multiline
                rows="4"
                margin="normal"
            />

            <Button type='submit' color="primary">
                {formAction}
            </Button>
        </form>
    );
}

const mapStateToProps = state => {
    return {
        musclesData: state.muscles.musclesData
    };
}

export default connect(mapStateToProps)(Form);
