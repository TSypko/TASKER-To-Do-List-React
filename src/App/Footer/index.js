import React from 'react';
import Buttons from './Buttons';
import Section from '../Section';
import { FooterContainer } from "./styled"

const Footer = ({ tasks, hideDone, toggleHideDone, setAllDone, removeAllTasks }) => (
    <FooterContainer>
        {tasks.length > 0 && (
            <Section
                body={<Buttons
                    tasks={tasks}
                    hideDone={hideDone}
                    toggleHideDone={toggleHideDone}
                    setAllDone={setAllDone}
                    removeAllTasks={removeAllTasks}
                />}
            />
        )}
    </FooterContainer>
)

export default Footer;