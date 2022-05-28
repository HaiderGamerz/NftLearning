import React from "react";
import {
  Box,
  Toolbar,
  AppBar,
  Typography,
  Button
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import {
  HeaderBox,
  HeaderLeftBox,
  HeaderRightBox,
  HeaderRightBoxList,
  HeaderRightBoxListItem,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./headerStyle";

import {MenuData} from '../../StaticData/index'
const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#1A1A25",
          }}
        >
          <Toolbar>
            <HeaderBox>
              <HeaderLeftBox>
                <Box
                  component="img"
                  sx={{
                    height: 50,
                  }}
                  alt="LOGO"
                  src="/assests/images/logo.svg"
                ></Box>
                <Typography
                  variant="h6"
                  component="p"
                  mx={3}
                  fontSize="16px"
                  lineHeight="25px"
                  fontWeight={600}
                  color="white"
                  fontFamily={"Montserrat"}
                >
                  NFTNerds
                </Typography>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search..."
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </HeaderLeftBox>
              <HeaderRightBox>
                <Box>
                  <HeaderRightBoxList>
                    {/* 
                    MenuData is an  array 
                    values inside array is called element
                    element can be numbers,string , object , boolean etc 

                    here element is object 
                    element inside MenuData == 

                    1) map is an array method just like length etc
                    2) its a callbacj function
                    3)Callback function jo apne andar aik aur function leta han 
                    4)yeh element aur index leta han 
                    5)element is object
                    */}
                    {
                      MenuData.map((element,index)=> <HeaderRightBoxListItem
                      key={index}
                      >
                        {element.title}
                      </HeaderRightBoxListItem>)
                    }
               



              
                    <Button
                      sx={{
                        fontSize: "10px",
                      }}
                      size="large"
                      color="secondary"
                      variant="outlined"
                    >
                      CONNECT
                    </Button>
                  </HeaderRightBoxList>
                </Box>
              </HeaderRightBox>
            </HeaderBox>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
