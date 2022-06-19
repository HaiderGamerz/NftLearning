import React from "react";
import { Box } from "@mui/material";
const ImageBox = () => {
  return (
    <>
      <Box
        component="img"
        sx={{
        width:"220px"
        }}
        alt="The house from the offer."
        src="https://d354yzmfb4qqsa.cloudfront.net/static/buy4.png"
      />
    </>
  );
};

export default ImageBox;
