import {
  Box,
  Typography,
  Button
} from "@mui/material";
import img from "../img/editor.png";



const LandingPage = () => {
  return (
      <Box sx={{ bgcolor: "#000000", py: 10 }}>
        
  <Box 
    display="flex"           
    flexDirection={{ xs: "column", md: "row" }}   
    alignItems="center"      
    gap={4}                  
    flexWrap="wrap"          
  >
    
     <Box
      sx={{
         mr: { xs: 0, md: -30 },
         pl: { xs: 0, md: 10 },   
        width: { xs: "100%", md: "40%" },
      }}
    >
     <Typography variant="h2" fontWeight={600} gutterBottom color="white">
        Code Safely with{" "}
        <span style={{ color: "#7c3aed" }}>Built-in Security</span>
      </Typography>
      <Typography
        variant="subtitle1"
        color="grey"
        sx={{ mb: 4 }}
      >
        Professional browser-based code editor with real-time
        vulnerability detection.
      </Typography>
      <Button variant="contained" sx={{ mr: 2  , backgroundColor:'#7c3aed'}} href="/signin">
        Start Coding Now
      </Button>
      <Button variant="outlined" sx={{ backgroundColor:'#7c3aed' , color: "white"}}>Watch Demo</Button>
    </Box>
    <Box
      component="img"
      src={img}
      alt="Editor Preview"
      sx={{
         width: { xs: "100%", md: "60%" },
        objectFit: "contain",
        borderRadius: 2,
        boxShadow: 3,
        clipPath: "polygon(100% 0%, 100% 100%, 0% 0%)",
      }}
    />

    
  </Box>

      </Box>
    
  );
};

export default LandingPage;
