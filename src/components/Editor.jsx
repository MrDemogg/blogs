import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

export default function EditorContainer({setText, setEditorState, editorState}) {
  const setConvertedText = (editorState) => {
    setEditorState(editorState)
    console.log(editorState)
    setText(editorState)
  }
  return (
    <div>
      <ReactQuill
        theme='snow'
        value={editorState}
        onChange={setConvertedText}
      />
    </div>
  );
}