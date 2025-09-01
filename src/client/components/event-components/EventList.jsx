// React and Bootstrap
import React from 'react'

// Components
import Event from './Event.jsx'


export default function EventList({events}) {

  // event data passed down from eventpage gets mapped/ put into event

  return (
    <>
      <h5> TODAY&apos;S EVENTS </h5>
    {
      events.map((event, index) => 
        <Event key={index} event={event}/>
      )
    }
    </>
  );
}


