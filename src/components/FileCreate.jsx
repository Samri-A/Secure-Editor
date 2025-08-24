import { useState  , useEffect} from "react";
import axios from 'axios';
import { Button } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {email_store} from './auth_store';

async function addFile(filedataa) {
    const res = await axios.post('/api/createfile', filedataa);
    return res;
  }


const FileCreate = ({name , language , content })=> {
    const email = email_store((e)=> e.email)
    const file = {
            email,
            filename: name,
            content,
            language
           
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
    <Button sx={
            {
              
              color:"gray"
            }
          } onClick={handleSaving} startIcon={<SaveIcon sx={
            {
              fontSize: '35px !important'
            }
          }/>}>
      {/*status ? <FiberManualRecordIcon fontSize="small" color="secondary" /> : <FiberManualRecordIcon fontSize="small" color="error" />*/}
    </Button >
  );
}

export default FileCreate;