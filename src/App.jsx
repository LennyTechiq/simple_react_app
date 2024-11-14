import { useEffect, useState } from 'react'
import { MainApp } from "./styled";

function App() {
  const storageKeyName = "count"
  
  const retrieveCountValue = () => Number(localStorage.getItem(storageKeyName))
  const [count, setCount] = useState(retrieveCountValue)

  useEffect(() => {
    localStorage.setItem(storageKeyName, count);
  }, [count])

  return (
    <MainApp>
      Count Me
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </MainApp>
  )
}

export default App
