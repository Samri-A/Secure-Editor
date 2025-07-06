import { Editor } from "@monaco-editor/react";
import AddIcon from '@mui/icons-material/Add';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import {Box , Button } from "@mui/material";
import LangSwitch from "./LangSwitch";
import VulnerDetect from "./VulnerDetect";
import React , {useState , useRef} from "react";
import FileTreeView from "./FileTreeView";
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
      
      <LangSwitch language={language} onSelect={handleLanguageChange} />
      
      <Box display="flex"
      justifyContent="space-between" // or 'flex-start' or 'center'
      alignItems="center"           // vertical alignment
      >
        <Box display="flex"
      justifyContent="space-between" // or 'flex-start' or 'center'
      alignItems="center"           // vertical alignment
      width="30%"
      >
        <Button>
       <AttachFileIcon fontSize="small" />
       </Button>
        <Button>
       <AddIcon fontSize="small" />
       </Button>
       <Box>
        <FileTreeView />
       </Box>

      </Box>
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
