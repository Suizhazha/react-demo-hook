import React from "react"


const App = () => {
  const [n, setN] = React.useState(0)

  React.useEffect(
    () => {
      console.log(`第一次渲染之后`)
    }
    , [])  // [] 内变量变化时再次执行，即空数组不会再次执行

  React.useEffect(
    () => {
      console.log(`n变化后渲染`)
    }
    , [n]) // n变化时执行

  React.useEffect(
    () => {
      console.log(`任何state变化执行！`)
    })


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

