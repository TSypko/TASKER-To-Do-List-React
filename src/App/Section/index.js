import React from 'react';
import "./style.css";

const Section = ({ title, body, sectionType }) => (
    <section className={`section${sectionType ? ` ${sectionType}` : ""}`}>
        <h2 className="section__header">{title}</h2>
        {body}
    </section>
)

export default Section;