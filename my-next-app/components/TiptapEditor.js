// components/TiptapEditor.js
import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import '../styles/TiptapEditor.css';

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World!</p>',
  });

  // Kiểm tra xem editor có giá trị null không
  if (!editor) {
    return null; // Nếu editor là null, trả về null để render không có gì
  }

  return (
    <div className="editor-container">
      <div className="editor-toolbar">
        <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''}>
          Bold
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''}>
          Italic
        </button>
        {/* Add more toolbar buttons as needed */}
      </div>
      <EditorContent className="editor-content" editor={editor} />
    </div>
  );
};

export default TiptapEditor;
