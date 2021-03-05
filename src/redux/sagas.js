import { call, put, takeEvery } from "redux-saga/effects";
import {
    GET_CHARACTERS,
    GET_CHARACTER,
    REQUEST_GET_CHARACTER,
    REQUEST_GET_CHARACTERS,
    RESPONSE_GET_CHARACTERS,
    RESPONSE_GET_CHARACTERS_ERROR,
    RESPONSE_GET_CHARACTER,
    RESPONSE_GET_CHARACTER_ERROR,

} from "./types";

function requestCharacters() {
    return { type: REQUEST_GET_CHARACTERS };
}

function requestCharactersSuccess(data, page) {
    return {
        type: RESPONSE_GET_CHARACTERS,
        payload: { data: data.results, pages: data.info.pages, page },
    };
}

function requestCharactersError() {
    return { type: RESPONSE_GET_CHARACTERS_ERROR };
}

function* getCharactersAsync(action) {
    try {
        yield put(requestCharacters());

        const data = yield call(() => {
            return fetch(
                `https://rickandmortyapi.com/api/character?page=${action.payload}`
            ).then((response) => response.json());
        });
        yield put(requestCharactersSuccess(data, action.payload));
    } catch (err) {
        yield put(requestCharactersError());
    }
}

export function* watchGetCharacters() {
    yield takeEvery(GET_CHARACTERS, getCharactersAsync);
}

export function getCharacters(page) {
    return { type: GET_CHARACTERS, payload: page };
}

function requestCharacter() {
    return { type: REQUEST_GET_CHARACTER };
}

function requestCharacterSuccess(data) {
    return { type: RESPONSE_GET_CHARACTER, payload: data };
}

function requestCharacterError() {
    return { type: RESPONSE_GET_CHARACTER_ERROR };
}

function* getCharacterAsync(action) {
    try {
        yield put(requestCharacter());

        const data = yield call(() => {
            return fetch(
                `https://rickandmortyapi.com/api/character/${action.payload}`
            ).then((response) => response.json());
        });
        yield put(requestCharacterSuccess(data));
    } catch (err) {
        yield put(requestCharacterError());
    }
}

export function* watchGetCharacter() {
    yield takeEvery(GET_CHARACTER, getCharacterAsync);
}

export function getCharacter(id) {
    return { type: GET_CHARACTER, payload: id };
}


