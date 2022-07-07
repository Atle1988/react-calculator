
function counterReducer(state = 0, action){
    switch (action.type){
        case "INCREMENT":
            return state + action.payload
        case "DECREMENT":
            return state - action.payload
        case "MULTIPLY":
            return state * action.payload
        case "DIVIDE":
            return Math.floor(state / action.payload)
        case "RESET":
            return state = ""
        case "SUM":
            return state = 100
        case "NEW_COUNT":
            return state = ""
        default:
            return state
    }
}

export default counterReducer

/* switch (action.type){
    case "INCREMENT":
        return {
            ...state,
            state: state + action.payload
        }
    case "DECREMENT":
        return {
            ...state,
            state: state - action.payload
        }
    case "MULTIPLY":
        return {
            ...state,
            state: state * action.payload
        }
    case "DIVIDE":
        return {
            ...state,
            state: Math.floor( state / action.payload )
        }
    default:
        return {...state}
}

 */

/* ************************************************************* */

/* switch (action.type){
    case "INCREMENT":
        return {count: state.count + action.payload}
    case "DECREMENT":
        return {count: state.count - action.payload}
    case "MULTIPLY":
        return {count: state.count * action.payload}
    case "DIVIDE":
        return {count: Math.floor(state.count / action.payload)}
    default:
        return {...state}
} */