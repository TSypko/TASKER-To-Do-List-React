import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Main from '../../../common/Main';
import Section from '../../../common/Section';
import { getTaskById } from "../tasksSlice";
import { DateParagraph, Date } from "./styled";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Main>
            {task !== undefined
                ?
                <Section
                    title={task.content}
                    body={
                        <>
                            <p>
                                Done: {task.done ? "Yes" : "No"}
                            </p>
                            <DateParagraph  >
                                <Date>{task.date}</Date>
                                <Date edited> {task.editDate}</Date>
                            </DateParagraph>
                        </>
                    }
                />
                :
                <Section
                    title="Sorry, task not found :("
                />
            }
        </Main>
    );
};

export default TaskPage;
