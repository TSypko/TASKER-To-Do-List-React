import React from 'react';
import Buttons from './Buttons';
import Section from '../Section';
import "./style.css";

const Footer = ({ tasks, hideDone, toggleHide, setAllDone, removeAllTasks }) => (
    <footer className="footer">
        {tasks.length > 0 && (
            <Section
                sectionType={"section--footer"}
                body={<Buttons
                    tasks={tasks}
                    hideDone={hideDone}
                    toggleHide={toggleHide}
                    setAllDone={setAllDone}
                    removeAllTasks={removeAllTasks}
                />}
            />
        )}
    </footer>
)

export default Footer;