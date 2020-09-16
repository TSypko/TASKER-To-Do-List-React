export const getExampleTasks = async () => {
    const response = await fetch("/TASKER-To-Do-List-React/exampleTasks.js");

    if (!response.ok) {
        new Error(response.statusText);
    }
    
    return await response.json();

};