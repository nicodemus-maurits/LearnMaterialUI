import React from 'react';
import Grid from '@material-ui/core/Grid';

import LeftPane from './LeftPane';
import RightPane from './RightPane';

const style = {
    Paper: { padding: 10, marginTop: 10, marginBottom: 10, height: 500, overflowY: 'auto' }
};

const Exercises = props => {
    const { exercises, category } = props;

    return (
        <Grid container>
            <Grid item sm>
                <LeftPane
                    style={style.Paper}
                    exercises={exercises}
                    category={category} />
            </Grid>
            <Grid item sm>
                <RightPane
                    style={style.Paper} />
            </Grid>
        </Grid>
    );
};

export default Exercises;
