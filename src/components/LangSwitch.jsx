import React from "react";
import { Box , Button, Menu,MenuItem , MenuList , Typography  } from "@mui/material";
import { useState, useRef } from "react";
import { LANG_versions } from "./constants";

const LangSwitch = ({ language,onSelect })=>{

   const languages = Object.entries(LANG_versions);
   const buttonRef = useRef(null);
   const [open, setOpen] = useState(false);
   const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
   return(
    <Box ml={2} mb={4}>
        <Typography  mb={2} fontSize="lg">
            Select language:
        </Typography >
        <Button
        ref={buttonRef}
        onClick={handleOpen}
        variant="contained"
        color="primary"
        sx={{ width: "200px" }}
      >
        <Typography  mb={2} fontSize="lg">
            {language}
        </Typography >
        </Button>
        <Menu anchorEl={buttonRef.current}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}>
        <MenuList>
            {languages.map(([language, version]) => (
                <MenuItem key={language} onClick={() => onSelect(language)}>
                {language} 
                <Typography  as="span" color="gray.600" fontSize="sm">
                    {version}
                </Typography >
                </MenuItem>
            ))}
        </MenuList>
        

        </Menu>
        </Box>
   );



}
export default LangSwitch;