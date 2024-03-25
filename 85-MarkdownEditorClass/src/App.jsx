import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownEditor from '../components/MarkdownEditor.jsx';

class App extends React.Component {
  handleContentChange(content) {
    console.log(content);
  }

  render() {
    return (
      <div>
        <h1>Markdown Editor</h1>
        <MarkdownEditor onContentChange={this.handleContentChange} />
      </div>
    );
  }
}

export default App;

const root = document.getElementById('container');
ReactDOM.createRoot(root).render(<App />);