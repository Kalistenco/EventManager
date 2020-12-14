import React, { useState, useEffect } from 'react';
import './EventCreation.css';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import TextInput from '../ui/TextInput';
import Select from '../ui/Select';
import Date from '../ui/DateInput';
import Button from '../ui/Button';

const EventCreation = () => {

    const [inputs, setInputs] = useState({
        eventName: "",
        description: "",
        category: 0,
        location: "",
        date: ""
    });
    const [categories, setCategories] = useState([]);
    const [redirectHome, setRedirectHome] = useState(false);

    useEffect(() => {
        fetch(process.env.REACT_APP_CATEGORIES_API_URL, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => setCategories(json))
            .catch(error => console.log(error))
    }, []);


    const handleChange = (event) => {
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    };

    const validateInputs = () => {
        if (inputs.name === "" || inputs.description === "" || inputs.date === "" || inputs.location === "") {
            return true;
        }
        else {
            return false;
        }
    };

    const handleSubmit = (event) => {

        if (validateInputs()) {
            alert("Fill all the required fields");
            event.preventDefault();
            return;
        };

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var newEvent = {
            "label": inputs.eventName,
            "description": inputs.description,
            "location": inputs.location,
            "date": inputs.date,
            "categoryId": parseInt(inputs.category, 10)
        }

        var bodyRaw = JSON.stringify(newEvent);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: bodyRaw,
            redirect: 'manual'
        };

        fetch(process.env.REACT_APP_EVENTS_API_URL, requestOptions)
            .then(setRedirectHome(true))
            .then(alert("Event created successfuly!"))
            .catch(error => console.log('error', error));
    };


    if (redirectHome) {
        return <Redirect to='/' />;
    };

    return (
        <div className="container">

            <h2 id="title">Create Event</h2>

            <form onSubmit={handleSubmit}>

                <TextInput
                    label="Name"
                    name="eventName"
                    value={inputs.eventName}
                    required={true}
                    handleChange={handleChange}
                />

                <TextInput
                    label="Description"
                    name="description"
                    value={inputs.description}
                    required={true}
                    handleChange={handleChange}
                />

                <Select
                    label="Categories"
                    value={inputs.category}
                    data={categories}
                    required={true}
                    handleChange={handleChange}
                />

                <Date
                    label="Date"
                    value={inputs.date}
                    required={true}
                    handleChange={handleChange}
                />

                <TextInput
                    label={"Location"}
                    value={inputs.location}
                    name="location"
                    required={true}
                    handleChange={handleChange}
                />

                <div className="buttonContainerForm">
                    <Link to="/">
                        <Button label="cancel" type="" />
                    </Link>
                    <Button label="ok" type="submit" />
                </div>

            </form>

        </div>
    );
};

export default EventCreation;