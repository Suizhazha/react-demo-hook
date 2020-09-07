import React from "react"


const App = () => {
  const [n, setN] = React.useState(0)

  React.useEffect(
    () => {
      const id = setInterval(
        () => {
          console.log(1)
        }
        , 2000)
      return () => {
        window.clearInterval(id)
      }
    }, [])


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

