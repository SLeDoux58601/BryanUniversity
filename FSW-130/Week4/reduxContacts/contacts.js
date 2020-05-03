const redux = require('redux')

function peopleListAdd(people) {
    return {
        type: "PEOPLE_LIST_ADD",
        payload: people
    }
}
function peopleListRemove(remove) {
    return {
        type: "PEOPLE_LIST_REMOVE",
        payload: remove
    }
}
function callPeopleList() {
    return {
        type: "CALL_PEOPLE_LIST"
    }
}

const initialState = {
    people: [
        {
            name: "Judy",
            address: "Tennessee",
            pets: "yes"
        }]
}


function reducer(state = initialState, action) {
    switch (action.type) {
        case "PEOPLE_LIST_ADD":
            return {
                ...state,
                people: [...state.people, action.payload]
            }
        case "PEOPLE_LIST_REMOVE":
            const updatedArr = "idk"
            return {
                ...state,
                people: updatedArr
            }

        case "CALL_PEOPLE_LIST":
            return {
                ...state,
                people: [...state.people]
            }
        default:
            return state
    }




}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(peopleListAdd({ name: "Tim" }))
store.dispatch(callPeopleList())
store.dispatch(peopleListRemove())
store.dispatch(callPeopleList())