import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Footer = props => {
    const { muscles, onSelect, category } = props;

    const index = category
        //Index + 1 because of the default Tab with 'All' label taking the first index
        ? muscles.findIndex(group => group === category) + 1
        : 0;

    const onIndexSelect = (e, index) => {
        onSelect(index === 0 ? '' : muscles[index - 1]);
    };

    return (
        <Paper>
            <Tabs
                value={index}
                onChange={onIndexSelect}
                indicatorColor="primary"
                textColor="primary"
                centered>
                <Tab label='All' />
                {muscles.map((muscle, index) => (
                    <Tab key={index} label={muscle} />
                ))}
            </Tabs>
        </Paper>
    );
};

export default Footer;
