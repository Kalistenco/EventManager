import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const SelectInput = (props) => {
    return (
        <div className="field">
            <InputLabel className="field-label field-dropdown" required={props.required}>
                {props.label}
        </InputLabel>
            <Select
                value={props.value}
                fullWidth={true}
                displayEmpty={false}
                style={{ textAlign: 'left' }}
                onChange={props.handleChange}
                name="category">
                {
                    props.data.map((data, index) => {
                        return (<MenuItem key={index} value={data.id}>{data.label}</MenuItem>)
                    })
                }
            </Select>
        </div>

    );
};

export default SelectInput;