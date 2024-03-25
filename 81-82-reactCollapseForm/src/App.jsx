import { useState } from 'react'
import Collapse from '../components/Collapse'
import './App.css'
import MyForm from '../components/MyForm'

function App() {

  return (
    <div className='App'>
      <h1>81-Collapse</h1>
      <Collapse text={123123123123} opened={true} />
      <h1>82-Form</h1>
      <MyForm />
    </div>
  )
}

export default App
