import React, { useState } from 'react';
import './Event.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import Checkbox from '../ui/Checkbox';

const Event = (props) => {

    const [subscribed, setSubscribed] = useState(props.event ? props.event.subscribed : false);

    const event = props.event;

    const handleChange = () => {

        //put operation to update the subscribed atribute of the event

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var updatedEvent = {
            "label": event.label,
            "description": event.description,
            "location": event.location,
            "date": event.date,
            "categoryId": event.categoryId,
            "subscribed": !subscribed
        };

        var raw = JSON.stringify(updatedEvent);

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(process.env.REACT_APP_EVENTS_API_URL + '/' + event.id, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        setSubscribed(!subscribed);
    }

    return (
        <div className="eventContainer">
            <div className="event">
                <h2 className="title">{event.label}</h2>
                <div className="bar"></div>
                <p>{event.description}</p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {event.location}</p>
                <div id="lastRow">
                    <p><FontAwesomeIcon icon={faCalendarDay} /> {event.date}</p>
                    <Checkbox checked={subscribed} onClick={handleChange} name="checkedG" />
                </div>
            </div>
        </div >
    );
};

export default Event;