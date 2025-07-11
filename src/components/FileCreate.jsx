import { useState  , useEffect} from "react";
import axios from 'axios';
import { Button } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


async function addFile(filedataa) {
    const res = await axios.post('/api/createfile', filedataa);
    return res;
  }


const FileCreate = (name , language , content )=> {
    const file = {
            /*email : {email},*/
            filename: {name},
            language: {language},
            content: {content}
        };
        const [status , setStatus] = useState(false);

       const handleSaving = async() =>{ 
        try{
            const response = await addFile(file);
            if( response.status == 201) setStatus(true);
        }catch(error){
            console.error("Error creating file:", error);
        }}

  return (
    <Button onClick={handleSaving} startIcon={<SaveIcon/>}>
      {status ? <FiberManualRecordIcon fontSize="small" color="secondary" /> : <FiberManualRecordIcon fontSize="small" color="error" />}
    </Button>
  );
}

export default FileCreate;