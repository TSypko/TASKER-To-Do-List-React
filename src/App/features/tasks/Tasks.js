import React from "react";
import Main from '../../common/Main';
import Section from '../../common/Section';
import Form from './Form';
import TasksList from './TasksList';
import Footer from './Footer';

function Tasks() {

    return (
        <>
            <Main>
                <Section
                    title="add new task"
                    body={<Form />}
                />
                <Section
                    title="task list"
                    body={<TasksList />}
                />
            </Main>
            <Footer

            />
        </>
    );
};

export default Tasks;
