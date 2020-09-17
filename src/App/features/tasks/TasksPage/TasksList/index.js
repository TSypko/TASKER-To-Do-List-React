import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, removeTask, toggleTaskDone } from "../../tasksSlice";
import {
    Paragraph,
    List,
    Item,
    Statement,
    Button,
    LinkItem
} from "./styled";
import EditForm from "./EditForm";

const TasksList = () => {

    const dispatch = useDispatch();
    const { tasks, hideDone } = useSelector(selectTasks);
    const [editTaskId, setTaskEditId] = useState(null);

    const toggleTaskEdit = (task) => {
        editTaskId !== task
            ? setTaskEditId(task)
            : setTaskEditId(null)
    };

    if (!tasks.length) {
        return (
            <Paragraph centered>
                There are currently no tasks to display
            </Paragraph>
        )
    }
    else return (
        <List>
            <Statement
                content={hideDone || ""}
            >
            </Statement>
            {tasks.map((task) =>
                <React.Fragment key={task.id}>
                    <Item hidden={task.done && hideDone}>
                        <Button
                            onClick={() => dispatch(toggleTaskDone(task.id))}
                            active
                            done={task.done}
                        />
                        <Paragraph
                            as="div"
                            done={task.done}
                            edit={editTaskId}
                        >

                            {editTaskId === task.id
                                ? <EditForm
                                    task={task}
                                    toggleTaskEdit={toggleTaskEdit}
                                />
                                : <LinkItem to={`/tasks/${task.id}`}>
                                    {task.content}
                                </LinkItem>}

                        </Paragraph>
                        <Button
                            edit
                            onClick={() => toggleTaskEdit(task.id)}
                        />
                        <Button
                            onClick={() => dispatch(removeTask(task.id))}
                            remove
                        />
                    </Item >
                </React.Fragment>
            )}
        </List >
    );
};

export default TasksList;