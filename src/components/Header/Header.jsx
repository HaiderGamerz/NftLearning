import React from "react";
import { styled, alpha } from '@mui/material/styles';
import { Box, Toolbar, AppBar,Typography,InputBase,List,ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
const HeaderBox = styled(Box)(() => ({
  width:"100vw",
  display:'flex',
  flexDirection:'row',
  alignContent:'space-between',
  justifyContent:'space-between',
  alignItems:'center'

}));
const HeaderLeftBox = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignContent:'center',
  justifyContent: 'center',
  alignItems:'center',

}));

const HeaderRightBox = styled(Box)(() => ({
  
}));
const HeaderRightBoxList = styled(List)(() => ({
    display:"flex",
    color:"#978CC3",
    fontFamily:"Montserrat",

    

}));
const HeaderRightBoxListItem = styled(ListItem)(() => ({
  color:"#978CC3",
  fontFamily:"Montserrat",
 
    "&:hover": {
      color: "white",
    }
  

}));
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#262633",
  
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    
    // fontFamily: "Montserrat",
    color: "#fff",
   
  },
}));

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
                >
                 

                </Box>
                <Typography
                    variant="h6"
                    component="p"
                    mx={3}
                    fontSize="16px"
                    lineHeight="25px"
                    fontWeight={600}
                    color="white"
                    fontFamily= {'Montserrat'}
                  
                  >
                    NFTNerds
                  </Typography>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search..."
                      inputProps={{"aria-label":"search"}}
                    />
                  </Search>
              </HeaderLeftBox>
              <HeaderRightBox>
                
              <Box>
              <HeaderRightBoxList>
                                                                           

                  <HeaderRightBoxListItem>FireHose</HeaderRightBoxListItem>
                  <HeaderRightBoxListItem>Trending</HeaderRightBoxListItem>
                  <HeaderRightBoxListItem>Assets</HeaderRightBoxListItem>
                  <HeaderRightBoxListItem>FAQ</HeaderRightBoxListItem>
                  <Button sx={{
                    fontSize:"10px",
                  }}
size="large" 
color="secondary" variant="outlined">CONNECT</Button>
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
