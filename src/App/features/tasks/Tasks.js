import React from "react";
import { useLocalStorageState } from "../../useLocalStorageState";
import { useTasks } from "./useTasks";
import Header from '../../common/Header';
import Main from '../../common/Main';
import Section from '../../common/Section';
import Form from './Form';
import Tasks from './TasksList';
import Footer from './Footer';

function TasksList() {

    const [hideDone, setHideDone] = useLocalStorageState("hideDone", false);

    const { tasks,
        addTask,
        editTask,
        removeTask,
        toggleTaskDone,
        setAllDone,
        removeAllTasks,
        toggleEditTask,
    } = useTasks();

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    return (
        <>
            <Header title="TASKER" />
            <Main>
                <Section
                    title="add new task"
                    body={
                        <Form addTask={addTask} />
                    }
                />
                <Section
                    title="task list"
                    body={
                        <Tasks
                            tasks={tasks}
                            hideDone={hideDone}
                            removeTask={removeTask}
                            toggleTaskDone={toggleTaskDone}
                            toggleEditTask={toggleEditTask}
                            editTask={editTask}
                        />
                    }
                />
            </Main>
            <Footer
                tasks={tasks}
                hideDone={hideDone}
                toggleHideDone={toggleHideDone}
                setAllDone={setAllDone}
                removeAllTasks={removeAllTasks}
            />
        </>
    );
}

export default TasksList;
