import React, { useState, useEffect } from 'react'
import '../css/Event.css'
import EventsAPI from '../../services/EventsAPI';

const Event = (props) => {

    const [event, setEvent] = useState([])
    const [time, setTime] = useState([])
    const [remaining, setRemaining] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const eventData = await EventsAPI.getEventsById(props.id)
                console.log("LOOK HERE:", eventData); 
                setEvent(eventData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    if (event != [] && event.length > 0) {
        return (
            <article className='event-information'>
                <img src={event[0].image} />
    
                <div className='event-information-overlay'>
                    <div className='text'>
                        <h3>{event[0].name}</h3>
                        <p><i className="fa-regular fa-calendar fa-bounce"></i> {event[0].date} <br /> {time}</p>
                        <p id={`remaining-${event.id}`}>{remaining}</p>
                    </div>
                </div>
            </article>
        )
    };

    return (
        <>
        </>
    );
}

export default Event