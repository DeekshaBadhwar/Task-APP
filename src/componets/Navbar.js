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

import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';



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

    const classes = useStyles()
    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" >
                <Toolbar>
                    <IconButton component="div" sx={{ flexGrow: 2 }} size="small" >
                        <MenuIcon size="small"
                            color="inherit"
                            aria-label="speed"
                        >
                        </MenuIcon>Dashboard
                    </IconButton>
                    <Toolbar />
                    {/* <Drawer
                        anchor="right"
                        onClose={() => setOpen(false)}
                        open={open}
                    >
                      <Link to="/customer"> <Button variant="outlined">
                            <AddIcon fontSize='small' />
                            New Customer
                        </Button></Link>  */}
                    {/* </Drawer> */}
                    <Link to="/customer">  <IconButton component="div"  sx={{ flexGrow: 2 }} size="small" >
                        <GroupsIcon
                            color="inherit"
                            fontSize='small'
                            aria-label="peoplealt"
                        />
                        Customers
                    </IconButton></Link> 
                    <IconButton component="div" sx={{ flexGrow: 2 }} size="small" >
                        Route
                    </IconButton>
                    <IconButton component="div" sx={{ flexGrow: 2 }} size="small" >

                        <ReceiptIcon fontSize='small' />  Billing
                    </IconButton>
                    <IconButton component="div" sx={{ flexGrow: 2 }} size="small" >
                        <CheckBoxIcon fontSize='small' />Follow Up
                    </IconButton>
                    <IconButton component="div" sx={{ flexGrow: 2 }} size="small" >

                        <ContentPasteIcon fontSize='small' /> Reports
                    </IconButton>
                    <IconButton component="div" sx={{ flexGrow: 2 }} size="small" >

                        <PriceChangeIcon />
                        Pricing
                    </IconButton>
                    <IconButton component="div" sx={{ flexGrow: 2 }} size="small" >
                        <Inventory2Icon fontSize='small' />  Inventory
                    </IconButton>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>

                    <IconButton >
                        <SettingsIcon fontSize='small' />
                    </IconButton>
                    <IconButton >
                        <NotificationsNoneIcon fontSize='small' />
                    </IconButton>
                    <IconButton >
                        <HelpOutlineIcon fontSize='small' />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
