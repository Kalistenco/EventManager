import React from 'react';
import Button from '@material-ui/core/Button';

const InputButton = (props) => {
    return (
        <Button variant="contained" color="primary" type={props.type} style={{
            backgroundColor: props.backgroundColor ? props.backgroundColor : '#3f51b5',
            textDecoration: 'underline'
        }}>
            {props.label}
        </Button>
    );
};

export default InputButton;