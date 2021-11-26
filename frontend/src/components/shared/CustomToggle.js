import React from "react";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

export function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
        <span onClick={decoratedOnClick}>{children}</span>
    );
}
