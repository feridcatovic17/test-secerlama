import {
    ADD_CARD
} from '../actions/types';

const initState = {
    name: "",
    text: "",
    listId: "5c88f2e9f05d944ef2e9d871"

}

export default function addCard(state = initState, action) {
    console.log("add card reducer", state)
    switch (action.type) {
        case ADD_CARD:
            return {
                ...state,
                name: action.name,
                text: action.text,
                location: initState.listId,

            };
        default:
            return state
    }
}