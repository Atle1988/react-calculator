function toogleBtn(state=false,action){
   switch(action.type){
    case "ON":
        return !state
    case "OFF":
        return !state
    default:
        return state
   }
}

export default toogleBtn