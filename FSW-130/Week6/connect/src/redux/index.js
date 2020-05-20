import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"

export function peopleListAdd(people) {
    
    return {
        type: "PEOPLE_LIST_ADD",
        payload: people
    }
}


export function deletePeopleList(id) {
    return {
        type: "DELETE_PEOPLE_LIST",
        payload: id
    }
}

const initialState = [
    {
        name: "william",
        address: "Texas",
        pets: "yes"
    },
    {
        name: "George",
        address: "Kentuckey",
        pets: "no"
    }]




function reducer(people = initialState, action) {
    switch (action.type) {
        case "PEOPLE_LIST_ADD":
            return [...people, action.payload]

       
        case "DELETE_PEOPLE_LIST":
                people.splice(action.payload, 1)        
        return [...people]
        default:
            return people
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
export default store