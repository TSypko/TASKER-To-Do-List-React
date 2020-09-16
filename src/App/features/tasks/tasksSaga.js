import { takeLatest, call, put, delay } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setExampleTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setExampleTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Something went wrong! Please refresh page")
    }
}

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}