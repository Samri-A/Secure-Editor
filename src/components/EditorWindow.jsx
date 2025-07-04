import { Editor } from "@monaco-editor/react";
import {Box } from "@mui/material";
import LangSwitch from "./LangSwitch";
import VulnerDetect from "./VulnerDetect";
import React , {useState , useRef} from "react";
import Output from "./Output";  
const default_value = "//Write your code"
const default_language = "javascript";
function EditorWindow() {

  const editorRef = useRef(null);
  const [value, setValue] = useState(default_value);

  const [language, setLanguage] = useState(default_language);

  const handleEditorMount = (editor) =>{
    editorRef.current = editor;
    editor.focus();
  }
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleLanguageChange = (newlanguage) => {
    setLanguage(newlanguage);
  }
  return (
    <Box >
      <Box>
      <LangSwitch language={language} onSelect={handleLanguageChange} />
      <Editor
        height="50vh"
        defaultLanguage={language}
        defaultValue={default_value}
        onChange={handleChange}
        onMount={handleEditorMount }
        value={value}
        theme="vs-dark"
      />
      </Box>
      {<VulnerDetect editorRef={editorRef} />}
      {<Output editorRef={editorRef} language={language} />}
    </Box>
  );
}

export default EditorWindow;
