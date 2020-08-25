import React from "react";
import { Paragraph, List, Item, Statement, Button } from "./styled"
import EditForm from "./EditForm"

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone, toggleEditTask, editTask }) => {
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
                <Item key={task.id} hidden={task.done && hideDone}>
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
            )}
        </List >
    )
};

export default Tasks;