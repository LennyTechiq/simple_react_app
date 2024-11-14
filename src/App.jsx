import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const storageKeyName = "count"
  
  const retrieveCountValue = () => Number(localStorage.getItem(storageKeyName))
  const [count, setCount] = useState(retrieveCountValue)
  
  useEffect(() => {
    localStorage.setItem(storageKeyName, count);
  }, [count])

  return (
    <div className='App'>
      Hello World
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default App
