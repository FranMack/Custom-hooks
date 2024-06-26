export const todoReducer=(initialState=[],action)=>{

    switch(action.type){
        case "[ADD TODO]":
            return [...initialState,action.payload];
            break

            case "[REMOVE TODO]":
            return initialState.filter((item)=>{if(item.id !==action.payload){return item}})
             break

            case "[DONE TODO]":
                return initialState.map((item)=>{if(item.id ==action.payload){return {...item,done:!item.done}}else{return item}})
                 break
            default:
               return initialState
    }
   
}