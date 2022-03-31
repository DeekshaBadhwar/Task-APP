import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Speed';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ReceiptIcon from '@mui/icons-material/Receipt';
import InputBase from '@mui/material/InputBase';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddIcon from '@mui/icons-material/Add';
import { styled, alpha } from '@mui/material/styles';
import GroupsIcon from '@mui/icons-material/Groups';
import SearchIcon from '@mui/icons-material/Search';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import './customers/index.css'
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import { Tab, Tabs, Typography } from '@mui/material';
import './customers/index.css'



const useStyles = styled(({ theme }) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    }
}))
export default function Navbar() {



    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
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
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));
    const [value, setValue] = React.useState()
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
<React.Fragment>
     
            <AppBar position="fixed" sx={{background:'black'}} style={{height:"70px"}}  >
              <Toolbar>
              <Tabs textColor='inherit' style={{fontSize:"10px",width:"2000px"}} value={value} onChange={handleChange}>                
                  <Tab  icon={<MenuIcon fontSize='small'  style={{fontSize:"15px"}}/>}  style={{fontSize:"13px"}}  fontSize='small' iconPosition="start"  label="Dashboard"/>
                  <Tab  icon={<GroupsIcon fontSize='small' style={{fontSize:"15px"}} />} iconPosition="start"  style={{fontSize:"13px"}} label="Customer"   component={Link} to="/customer"/>
                  <Tab  label="Route" fontSize='small'style={{fontSize:"13px"}} />
                  <Tab  icon={<ReceiptIcon fontSize='small'style={{fontSize:"15px"}} />} iconPosition="start" style={{fontSize:"13px"}}  label="Billing" />
                  <Tab  icon={<CheckBoxIcon fontSize='small' style={{fontSize:"15px"}}/>} iconPosition="start"  style={{fontSize:"13px"}} label="Follow Up" />
                  <Tab  icon={<ContentPasteIcon fontSize='small'style={{fontSize:"15px"}} />}  fontSize='small' style={{fontSize:"13px"}}  iconPosition="start"  label="Reports" />
                  <Tab  icon={<PriceChangeIcon fontSize='small'style={{fontSize:"15px"}} />} iconPosition="start" style={{fontSize:"13px"}}  label="Pricing" />
                  <Tab  icon={<Inventory2Icon fontSize='small' style={{fontSize:"15px"}}/>} iconPosition="start" style={{fontSize:"13px"}}  label="Inventory" />                            
              </Tabs>
              <Search style={{fontSize:"13px"}}  >
                        <SearchIconWrapper>
                            <SearchIcon style={{fontSize:"10px"}} />
                        </SearchIconWrapper>
                        <StyledInputBase style={{fontSize:"10px"}} 
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
              <Button  variant='centered'    sx={{marginLeft:'auto'}}>  <SettingsIcon fontSize='small' style={{fontSize:"15px"}}
/>   </Button>
                    <Button variant='centered'   sx={{marginLeft:'auto'}}>  <NotificationsNoneIcon fontSize='small' style={{fontSize:"15px"}}/>    </Button>
                    <Button variant='centered'   sx={{marginLeft:'auto'}}>    <HelpOutlineIcon fontSize='small' style={{fontSize:"15px"}} />    </Button>
            
              </Toolbar>
            </AppBar>
            </React.Fragment>
        
    );
}
