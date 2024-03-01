import './App.css'
import React from 'react';
import Progress from './components/Loader';
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import BtnGroup from './components/BtnGroup';

function App() {
  return (
    <div className="App">
      {/* ----------------------------- */}
      <div className="Loading">
        <h1>Task 75</h1>
        <h2>Loading in progress...</h2>
        <Progress percentage={40} />
      </div>
      {/* ----------------------------- */}
      <div className="Alert">
        <h1>Task 76</h1>
        <Alert type='success' text='what is love?' />
      </div>
      {/* ----------------------------- */}
      <div className='ListGroup'>
        <h1>Task 77</h1>
        <ListGroup>
          <div>child one</div>
          <div>child two</div>
          <div>child three</div>
        </ListGroup>
      </div>
      {/* ----------------------------- */}
      <div className='BtnGroup'>
        <h1>Task 78</h1>
        <BtnGroup />
      </div>
      {/* ----------------------------- */}
    </div>

  );
}

export default App;

