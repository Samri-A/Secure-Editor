import {useState} from 'react';
import axios from 'axios';
import AttachFileIcon from "@mui/icons-material/AttachFile";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import {Box} from "@mui/material";
const AttachFile = ()=>{
    const [file , setFile] = useState(null);
    return(
        <Box>
            <form action="post">
               <input type="file" name="" id="" />
                 {/*<AttachFileIcon/>*/}
               
            </form>
            
        </Box>
        
    );
}

export default AttachFile;