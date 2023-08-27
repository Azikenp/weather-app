import React from 'react';
import {Accordion, 
    AccordionItem, 
    AccordionItemButton, 
    AccordionItemHeading, 
    AccordionItemPanel} 
from 'react-accessible-accordion';
import './Forecast.css';

function Forecast({data}) {
  return (
    <>
        <label className='title'>Daily</label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0, 7).map((item, idx) => {
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Hello
                        </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>Hii</AccordionItemPanel>
                </AccordionItem>
            })}
        </Accordion>
    </>
  )
}

export default Forecast