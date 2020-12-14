import React, { useState, useEffect } from 'react';
import EventList from '../events/EventList';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import shuffleArray from '../../utils/ArrayMethods';

const Dashboard = () => {

    const [events, setEvents] = useState([]);
    const [highlightedEvents, setHighlightedEvents] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        //when the component is mounted, the events and categories are fetched from the database

        fetch(process.env.REACT_APP_EVENTS_API_URL, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {

                //the idea here to generete randomly the highlighted events is to shuffle the array of events that  
                //comes from the data base, asign the first five elements of that array to the array of highlighted
                //events, and the rest of the elements are asigned to another array of non highlighted events

                shuffleArray(json);
                setHighlightedEvents(json.splice(0, 5))
                setEvents(json)
            })
            .catch(error => console.log(error))

        fetch(process.env.REACT_APP_CATEGORIES_API_URL, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => setCategories(json))
            .catch(error => console.log(error))
    }, []);

    useEffect(() => {

        //sort the array of events by date 

        events.sort(function (a, b) {
            var x = new Date(a.date);
            var y = new Date(b.date);
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        })
    }, [events]);

    useEffect(() => {

        //sort the highlighted events by date

        highlightedEvents.sort(function (a, b) {
            var x = new Date(a.date);
            var y = new Date(b.date);
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        })
    }, [highlightedEvents]);

    return (
        <div>
            <div className="buttonContainer">
                <Link to="/createEvent">
                    <Button id="button" label="Create Event +" type="" backgroundColor="#ff595e" />
                </Link>
            </div>

            {
                highlightedEvents.length > 0 ?
                    <div>
                        <EventList events={highlightedEvents} title="Highligted Events" />
                        <div className="barDashboard"></div>
                    </div> : null
            }

            {
                categories.map((category, i) => {

                    //the idea here is to split the events in different arrays according to their category
                    
                    let eventsArray = [];
                    events.forEach(event => {
                        if (event.categoryId === category.id)
                            eventsArray.push(event);
                    })
                    return eventsArray.length > 0 ?
                        <div key={category.id}>
                            <EventList
                                events={eventsArray} title={category.label} />
                            <div className="barDashboard">
                            </div>
                        </div> : null
                })
            }
        </div>
    );
};

export default Dashboard;