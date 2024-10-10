import React from "react"; 
import { useState, useEffect } from "react"; 
import EventsAPI from "../../services/EventsAPI";
import Event from "../components/Event";
const Events = () => {

    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        try {
            const response = await EventsAPI.getAllEvents();
            setEvents(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <>
            <h1>Events</h1>
            <div className="events">
                {events.map((event) => {
                    // console.log("event", event);
                    return (
                        <Event 
                            id={event.id}
                        />
                    )
                })}
            </div>
        </>
    );
};

export default Events;