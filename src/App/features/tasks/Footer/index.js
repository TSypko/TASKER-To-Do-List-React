import React from 'react';
import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";
import Buttons from './Buttons';
import Section from '../../../common/Section';
import { FooterContainer } from "./styled"

const Footer = () => {

    const { tasks } = useSelector(selectTasks);

    return (
        <FooterContainer>
            {tasks.length > 0 && (
                <Section
                    body={<Buttons
                        tasks={tasks}
                    />}
                />
            )}
        </FooterContainer>
    );
};

export default Footer;