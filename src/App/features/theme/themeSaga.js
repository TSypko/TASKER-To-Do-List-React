import { takeEvery, call, select } from "redux-saga/effects";
import { selectTheme } from "../theme/themeSlice";
import { saveItemToLocalStorage } from "../itemLocalStorage";

function* saveThemeToLocalStorageHandler() {
    const theme = yield select(selectTheme);
    yield call(saveItemToLocalStorage, "currentTheme", theme.theme)
};

export function* themeSaga() {
    yield takeEvery("*", saveThemeToLocalStorageHandler);
};