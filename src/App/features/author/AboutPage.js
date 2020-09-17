import React from "react";
import Main from '../../common/Main';
import Section from '../../common/Section';

function Author() {

    return (
        <>
            <Main>
                <Section
                    title="About"
                    body={
                        <main>
                            <h3>DESCRIPTION</h3>
                            <p>
                                To Do List app created during <strong>"Become A Front End Developer"</strong> bootcamp provided by <em>Youcode Academy</em>.
                                It helps in scheduling tasks, allowing you to add, check, edit and delete them.
                                Tasks will be saved in local storage memory of your browser.
                            </p>
                            <h4>TECHNOLOGIES USED:</h4>
                            <ul>
                                <li>React</li>
                                <li>creat-react-app</li>
                                <li>Redux with react-redux</li>
                                <li>Redux-Saga,</li>
                                <li>React-Router,</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript ES6+</li>
                                <li>Styled Components</li>
                                <li>npm</li>
                                <li>localstorage</li>
                            </ul>
                            <h4> METHODOLOGIES USED:</h4>
                            <ul>
                                <li>Hooks</li>
                                <li>Custom Hooks</li>
                                <li>JSX</li>
                            </ul>
                        </main>
                    }
                />
            </Main>
        </>
    );
};

export default Author;
