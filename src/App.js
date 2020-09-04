import React from "react"
import './index.css'

const themeContext = React.createContext(null)

const App = () => {
const [theme,setTheme] = React.useState('red')
  return (
    <themeContext.Provider value={{theme,setTheme}}>
      <div className={`App ${theme}`}>
        <p>{theme}</p>
        <div>
          <Child1/>
        </div>
        <div>
          <Child2/>
        </div>
      </div>
    </themeContext.Provider>
  )
}

const Child1 = () =>{
  const {setTheme}  = React.useContext(themeContext)
return(
  <div>
    <button onClick={()=>{setTheme('red')}}>red</button>
  </div>
)
}
const Child2 = () =>{
  const {setTheme}  = React.useContext(themeContext)
  return (
  <div>
    <button onClick={()=>{setTheme('blue')}}>blue</button>
  </div>
)
}




export default App

