import React from 'react';
import { createRoot } from 'react-dom/client';
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
createRoot(root).render(<App />);
