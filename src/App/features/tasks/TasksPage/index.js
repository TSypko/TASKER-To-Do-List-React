import React from "react";
import Main from '../../../common/Main';
import Section from '../../../common/Section';
import Form from './Form';
import TasksList from './TasksList';
import Footer from './Footer';
import Search from "./Search";

function TasksPage() {

    return (
        <>
            <Main>
                <Section
                    title="add new task"
                    body={<Form />}
                />
                <Section
                    title="search for task"
                    body={<Search />}
                />
                <Section
                    title="task list"
                    body={<TasksList />}
                />
            </Main>
            <Footer />
        </>
    );
};

export default TasksPage;
