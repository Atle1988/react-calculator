export function increment(amount){
    return{
        type: "INCREMENT",
        payload: amount
    }
}
export function decrement(amount){
    return{
        type: "DECREMENT",
        payload: amount
    }
}
export function multiply(amount){
    return{
        type: "MULTIPLY",
        payload: amount
    }
}
export function divide(amount){
    return{
        type: "DIVIDE",
        payload: amount
    }
}
export function reset(){
    return{
        type: "RESET",
    }
}
export function sum(){
    return{
        type: "SUM",
    }
}
export function newCount(){
    return{
        type: "NEW_COUNT",
    }
}