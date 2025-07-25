import BugReportIcon from '@mui/icons-material/BugReport';
import {getResult} from "./getResult";
import { VulnerStore } from "./VulnerStore";
import {Box  , Button , Typography} from "@mui/material";
import  axios from 'axios';

async function detect(code){
  const response = await axios.post("api/classify" ,{ code: code } );
    return response;
}

const VulnerDetect = ({ editorRef }) => {

  const setOutput = VulnerStore((state)=> state.setResult);
  const runDetect= async () => {
    try {
      const sourceCode = editorRef.current.getValue();
      if (!sourceCode) return;
      const result  = await detect(sourceCode);
      setOutput(result.data.content);
    } catch (error) {
      console.error(error);
    }
  };


  return (
       <Box>
       <Button

        onClick={runDetect}
        startIcon={<BugReportIcon />} 
        color="primary"
      >
        <Typography variant="body2">Detect</Typography>

      </Button>
       </Box>
       
  );
};
export default VulnerDetect;

