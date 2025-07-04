import React, { useState } from 'react';
import { pipeline } from '@xenova/transformers';
import { Box, Typography, Button } from '@mui/material';

let classifier; 

async function getResult(code){
    const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      return data;
}

function VulnerDetect({ editorRef }) {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = async () => {
    const code = editorRef.current.getValue();
    setIsLoading(true);
    const output = await getResult(code);
    setResult(output);
    setIsLoading(false);
  };

  return (
    <Box>
      <Button
        variant="outlined"
        color="success"
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? 'Checking...' : 'Check Code Vulnerability'}
      </Button>

      {result && (
        <Typography mt={2} fontSize="14px">
          {JSON.stringify(result, null, 2)}
        </Typography>
      )}
    </Box>
  );
}

export default VulnerDetect;
