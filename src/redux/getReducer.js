import {
    REQUEST_GET_CHARACTERS,
    RESPONSE_GET_CHARACTERS,
    RESPONSE_GET_CHARACTERS_ERROR,
    REQUEST_GET_CHARACTER,
    RESPONSE_GET_CHARACTER,
    RESPONSE_GET_CHARACTER_ERROR,

} from "./types";

import {
    DATA_STATE_NOT_REQUESTED,
    DATA_STATE_REQUESTING,
    DATA_STATE_RECEIVED,
    DATA_STATE_ERROR,
} from "../constants/request";

const initialState = {
    page: 0,
    pages: null,
    results: [],
    character: {},
    characters: [],
    loading: false,
    location: {},
    charactersDataState: DATA_STATE_NOT_REQUESTED,
    characterDataState: DATA_STATE_NOT_REQUESTED,
};

export const getReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_GET_CHARACTERS:
            return { ...state, charactersDataState: DATA_STATE_REQUESTING };
        case RESPONSE_GET_CHARACTERS_ERROR:
            return { ...state, charactersDataState: DATA_STATE_ERROR };
        case RESPONSE_GET_CHARACTERS:
            return {
                ...state,
                charactersDataState: DATA_STATE_RECEIVED,
                characters: [...state.characters, ...action.payload.data],
                pages: action.payload.pages,
                page: action.payload.page,
            };
        case REQUEST_GET_CHARACTER:
            return { ...state, characterDataState: DATA_STATE_REQUESTING };
        case RESPONSE_GET_CHARACTER_ERROR:
            return { ...state, characterDataState: DATA_STATE_ERROR };
        case RESPONSE_GET_CHARACTER:
            return {
                ...state,
                characterDataState: DATA_STATE_RECEIVED,
                character: action.payload,
            };
            default:
            return state;
    }
};
