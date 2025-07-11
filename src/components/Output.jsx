import { Box, Button ,Typography } from "@mui/material";
import { outputStore } from "./outputStore";
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState , useEffect } from "react";
import { VulnerStore } from "./VulnerStore";
 

const Output = ({ setAgent }) => {
  const output = outputStore((state) => state.output);
  const VulnerResult = VulnerStore((state) => state.result);
  const [view, setView] = useState("output");
  const [fix , setFix] = useState(false);
  const handleChange = (event, newValue) => {
    if (newValue !== null) {
      setView(newValue);
    }
  };
  useEffect(()=>{
    setFix(VulnerResult != "Secure code");
    
  },[VulnerResult]);

  const handleFix =()=>{
      setAgent(true);
  }
  return (
    <Box
      sx={{
        bgcolor: '#1e1e2f',
        color: '#fff',
        fontFamily: 'monospace',
        fontSize: '0.9rem',
        px: 2,
        py: 1,
        height: '25vh',
        overflowY: 'auto',
        borderTop: '1px solid #333',
      }}
    >
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={handleChange}
        sx={{ mb: 1 }}
      >
        <ToggleButton
          value="output"
          sx={{
            color: "#fff",
            '&.Mui-selected': {
              color: "#fff",
              backgroundColor: "#333",
            },
          }}
        >
          Output
        </ToggleButton>
        <ToggleButton
          value="vulnerability"
          sx={{
            color: "#fff",
            '&.Mui-selected': {
              color: "#fff",
              backgroundColor: "#333",
            },
          }}
        >
          Vulnerability
        </ToggleButton>
      </ToggleButtonGroup>

      {view === 'output' && (
        <Typography variant="body2" component="pre" sx={{ whiteSpace: "pre-wrap", color: "#fff" }}>
          {output || "No output yet."}
        </Typography>
      )}
      {view === 'vulnerability' && (
        
        <Typography variant="body2" component="pre" sx={{ whiteSpace: "pre-wrap", color: "#fff" }}>
          {VulnerResult || "No vulnerabilities detected."}
          
     {
      fix &&(
          <Button color="primary" onClick={handleFix}>
               fix 
            </Button>
      ) 
     }
            

        </Typography>
        
      )}
    </Box>
  );
};

export default Output;
