import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

const TextInput = (props) => {
    return (
        <div className="field">
            <InputLabel className="field-label field-text" required={props.required}>
                {props.label}
        </InputLabel>
            <TextField
                aria-label="minimum height"
                rows={1}
                fullWidth={true}
                value={props.value}
                name={props.name}
                className='textArea-field'
                onChange={props.handleChange} />
        </div>
    );
};

export default TextInput;