import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

const Date = (props) => {
    return (
        <div className="field">
            <InputLabel className='field-label field-datePicker' required={props.required}>
                {props.label}
            </InputLabel>
            <TextField
                name="date"
                type="date"
                className='textArea-field'
                value={props.value}
                fullWidth={true}
                onChange={props.handleChange}
            />
        </div>
    );
};

export default Date;