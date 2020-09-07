import React from "react"


const App = () => {
  const [n, setN] = React.useState(0)
  const count = React.useRef(0)

  React.useEffect(
    () => {
      count.current += 1
      console.log(count.current)
      console.log(count)
    }
  )


  return (
    <>
      <div>{n}</div>
      <button onClick={() => {
        setN(n + 1)
      }}>+1
      </button>
    </>
  )
}


export default App

