import { Box } from "@mui/material";
import React from "react";
import { ImageBox, TextBox } from "../../components/index";

import {
  HeroSectionBox,
  HeroSectionLeftBox,
  HeroSectionRightBox,
} from "./homeStyle";
const Home = () => {
  return (
    <>
      <Box>
        <Box>
          <HeroSectionBox>
            <HeroSectionLeftBox>
              <TextBox />
            </HeroSectionLeftBox>
            <HeroSectionRightBox>
              <ImageBox />
            </HeroSectionRightBox>
          </HeroSectionBox>
        </Box>
     
      </Box>
    </>
  );
};

export default Home;
