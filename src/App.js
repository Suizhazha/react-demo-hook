import React from "react"


const initial = {
  n:0
}

const reducer =(state,action) =>{
  if (action.type=== 'add'){
    return {
      n:state.n+action.number
    }
  }else if (action.type==='multiply'){
    return {
      n:state.n*action.number
    }
  }
  else {
    throw new Error('unknown type')
  }
}

const App=()=>{
const [state,dispatch]=  React.useReducer(reducer,initial)


const onClick = ()=>{
  dispatch({type:'add',number:1})
}
const onClick2 = ()=>{
  dispatch({type:'add',number:2})
}
  const onClick3 = ()=>{
    dispatch({type:'multiply',number:2})
  }
  return(
    <div>
      <p>n:{state.n}</p>
      <button onClick={onClick}>+1</button>
      <button onClick={onClick2}>+2</button>

      <button onClick={onClick3}>*2</button>

    </div>
  )
}




export default App

