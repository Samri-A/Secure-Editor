import { Button , Typography , Box} from "@mui/material";
import { useState } from "react";
import { executeCode } from "./api";
import { outputStore } from "./outputStore";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const RunCode = ({ editorRef, language }) => {
  const  setOutput = outputStore((state)=> state.setOutput);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const runCode = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const sourceCode = editorRef.current.getValue();
      if (!sourceCode) return;
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output);
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
       <Box>
       <Button
        isLoading={isLoading}
        onClick={runCode}
        startIcon={<PlayArrowIcon />} 
        color="primary"
      >

      </Button>
       </Box>
       
  );
};
export default RunCode;