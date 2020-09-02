import React from "react";
import {
    Paragraph,
    List,
    Item,
    Statement,
    Button,
    DateParagraph,
    Date
} from "./styled"
import EditForm from "./EditForm"

const TasksList = ({ tasks, hideDone, removeTask, toggleTaskDone, toggleEditTask, editTask }) => {
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
                            onClick={() => toggleTaskDone(task.id)}
                            active
                            done={task.done}
                        />
                        <Paragraph done={task.done}>
                            {task.edit
                                ? <EditForm
                                    edit={task.edit}
                                    value={task.content}
                                    editTask={editTask}
                                    taskID={task.id}
                                />
                                : task.content}
                        </Paragraph>
                        <Button
                            edit
                            onClick={() => toggleEditTask(task.id)}
                        />
                        <Button
                            onClick={() => removeTask(task.id)}
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