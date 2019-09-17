import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Footer = props => {
    return (
        <Paper>
            <Tabs
                value={0}
                indicatorColor="primary"
                textColor="primary"
                centered>
                <Tab label='All' />
                {props.muscles.map(muscle => (
                    <Tab key={muscle.id} label={muscle.value} />
                ))}
            </Tabs>
        </Paper>
    );
};

export default Footer;
