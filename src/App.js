import React from "react"
import useList from "./component/useList"


const App = () => {
  const {list, deleteIndex} = useList()

  return (
    <>
      <h1>List</h1>
      {
        list ? (
            <ol>
              {list.map((item, index) => (
                  <li>
                    {item.name}
                    <button onClick={() => {
                      deleteIndex(index)
                    }}>
                      x
                    </button>
                  </li>
                )
              )}
            </ol>
          ) :
          "加载中..."
      }
    </>
  )
}


export default App

