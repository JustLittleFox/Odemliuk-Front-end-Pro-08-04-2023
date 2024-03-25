import React from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.editorRef = React.createRef();
    }

    componentDidMount() {
        this.editorRef.current.getInstance().on('change', () => {
            const content = this.editorRef.current.getInstance().getMarkdown();
            this.props.onContentChange(content);
        });
    }

    render() {
        return <Editor previewStyle="vertical" height="600px" initialEditType="markdown" useCommandShortcut={true} ref={this.editorRef} />;
    }
}

export default MarkdownEditor;
