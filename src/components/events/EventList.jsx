import React from 'react';
import Event from './Event';
import './EventList.css';

const EventList = (props) => {

    return (
        <div className="titleListContainer">
            <h2 className="listTitle">{props.title}</h2>
            <div className="eventListContainer">
                {
                    props.events.map(event =>
                        <Event
                            key={event.id}
                            event={event} />
                    )
                }
            </div>
        </div>
    );
};

export default EventList;