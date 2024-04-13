import React from 'react';
import ReactDOM from 'react-dom';
import PostCatalog from '../components/PostCatalog.jsx';

const App = () => {
  return (
    <div>
      <h1>Post Catalog</h1>
      <PostCatalog />
    </div>
  );
};

export default App;

const root = document.getElementById('container');
ReactDOM.createRoot(root).render(<App />);

