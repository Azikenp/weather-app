import React from 'react';
import {Accordion, 
    AccordionItem, 
    AccordionItemButton, 
    AccordionItemHeading, 
    AccordionItemPanel} 
from 'react-accessible-accordion';
import './Forecast.css';


const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]   

function Forecast({data}) {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

  return (
    <>
        <label className='title'>Daily</label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0, 7).map((item, idx) => (
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <img 
                                    className='icon-small' 
                                    src={`icons/${item.weather[0].icon}.png`} 
                                    alt="weather" 
                                />
                                <label className="day">{forecastDays[idx]}</label>
                                <label className="description">{item.weather[0].description}</label>
                                <label className="min-max">{Math.floor(item.main.temp_min)}°C / {Math.ceil(item.main.temp_max)}°C </label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>Hii</AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    </>
  );
};

export default Forecast