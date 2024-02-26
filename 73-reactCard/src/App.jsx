import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Card2 from './components/Card2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <hr />
      <h2>Task-73</h2>
      <Card />
      <hr />
      <h2>Task-74</h2>
      <Card2 title="hi" />
      <Card2 text="how are you?" />
      <Card2 title="hi" text="how are you?" />
    </>
  )
}

export default App
