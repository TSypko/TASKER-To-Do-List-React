import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskEdit, removeTask, toggleTaskDone, toggleSavedTasks } from "../tasksSlice";
import { selectHideDone } from "../hideDoneSlice";
import {
    Paragraph,
    List,
    Item,
    Statement,
    Button,
    DateParagraph,
    Date
} from "./styled";
import EditForm from "./EditForm";

const TasksList = () => {

    const dispatch = useDispatch();
    const { tasks } = useSelector(selectTasks);
    const { hideDone } = useSelector(selectHideDone);

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
                        <Paragraph done={task.done}>
                            {task.edit
                                ? <EditForm
                                    task={task}
                                />
                                : task.content}
                        </Paragraph>
                        <Button
                            edit
                            onClick={() => dispatch(toggleTaskEdit(task.id))}
                        />
                        <Button
                            onClick={() => dispatch(removeTask(task.id))}
                            remove
                        />
                    </Item >
                    <DateParagraph hidden={task.done && hideDone}>
                        <Date>{task.date}</Date>
                        <Date edited>{task.editDate}</Date>
                    </DateParagraph>
                </React.Fragment>
            )}
        </List >
    )
};

export default TasksList;