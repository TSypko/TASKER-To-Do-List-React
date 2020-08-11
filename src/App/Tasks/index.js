import React from "react";
import { Paragraph, List, Item, Statement, Button } from "./styled"

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => {
    if (!tasks.length) {
        return (
            <Paragraph centered>
                There are currently no tasks to display
            </Paragraph>
        )
    }
    else return (
        <List className="tasks__list">
            <Statement
                content={hideDone ? hideDone : ""}
            >
            </Statement>
            {tasks.map((task) =>
                <Item key={task.id} hidden={task.done && hideDone}>
                    <Button
                        onClick={() => toggleTaskDone(task.id)}
                        done
                        doneToggled={task.done}>
                    </Button>
                    <Paragraph done={task.done}>
                        {task.content}
                    </Paragraph>
                    <Button
                        onClick={() => removeTask(task.id)}
                        remove>
                    </Button>
                </Item >
            )}
        </List >
    )
};

export default Tasks;