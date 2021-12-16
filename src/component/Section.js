import React from 'react';
import "./Section.style.css"

export const Section = (props) => (
    <div className="Section">
        <h2>City Name: {props.weather.city_name}</h2>
        <h2>Country Code: {props.weather.country_code}</h2>
        <h2>State Code: {props.weather.state_code}</h2>
        <h2>Timezone: {props.weather.timezone}</h2>
    </div>
);

export default Section;