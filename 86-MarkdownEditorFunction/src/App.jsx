import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownEditor from '../components/MarkdownEditor.jsx';

const App = () => {
  const handleContentChange = (content) => {
    console.log(content);
  };

  return (
    <div>
      <h1>Markdown Editor</h1>
      <MarkdownEditor onContentChange={handleContentChange} />
    </div>
  );
};

export default App;

const root = document.getElementById('container');
ReactDOM.createRoot(root).render(<App />);
