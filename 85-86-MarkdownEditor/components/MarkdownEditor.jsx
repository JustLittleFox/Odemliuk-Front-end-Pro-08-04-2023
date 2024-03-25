import React, { useRef, useEffect } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const MarkdownEditor = ({ onContentChange }) => {
    const editorRef = useRef();

    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.getInstance().on('change', () => {
                const content = editorRef.current.getInstance().getMarkdown();
                onContentChange(content);
            });
        }
    }, []);

    return <Editor previewStyle="vertical" height="600px" initialEditType="markdown" useCommandShortcut={true} ref={editorRef} />;
};

export default MarkdownEditor;
