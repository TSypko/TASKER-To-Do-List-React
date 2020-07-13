import React from 'react';
import Buttons from '../Buttons';
import Section from '../Section';
import "./style.css";

const Footer = ({ tasks, hideDoneTasks }) => (
    <footer className="footer">
        {tasks.length > 0 && (
            <Section
                classModificator={"section--footer"}
                body={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
            />
        )}
    </footer>
)

export default Footer;