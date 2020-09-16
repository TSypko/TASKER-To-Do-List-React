import { takeEvery, takeLatest, call, put, delay, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveItemToLocalStorage } from "../itemLocalStorage";
import { fetchExampleTasks, selectTasks, setExampleTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setExampleTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Something went wrong! Please refresh page")
    }
};

function* saveTasksToLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveItemToLocalStorage, "tasks", tasks.tasks)
    yield call(saveItemToLocalStorage, "hideDone", tasks.hideDone)
};

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksToLocalStorageHandler);
};