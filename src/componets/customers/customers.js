import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Navbar from '../Navbar';
import { styled } from '@mui/material/styles';

import AddIcon from '@mui/icons-material/Add';
import { Button, Checkbox, Container, CssBaseline, Drawer, FormControl, FormControlLabel, FormLabel, Grid, MenuItem, Radio, RadioGroup, Select, Switch, TextField, Toolbar, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { GridOff } from '@mui/icons-material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import CustomersTab from './customersTab';
import LocationTab from './LocationTab';
import BillingTab from './BillingTab';
import { Tabs } from '@mui/material';
const useStyles = styled(({ theme }) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    marginRight: "auto"
  },
  drawer: {
    width: 300
  },
  content: {
    padding: theme.spacing(3)
  },

  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.gery[300]
  },
  drawer: {
    width: 600
  },
  navbar: {
    zIndex: 1111111
  }

}))

export default function Customer() {
  const [value, setValue] = React.useState('1');

  const contactMethod = {
    type1: "",
    type2: "",
    email: ""
  }

  const Contact =
    [{
      firstname: "",
      lastname: "",
      position: ""
    },
    {
      contactMethod
    }

    ]

  const [addcontacts, setAddcontacts] = React.useState([Contact])
  const [addcontactmethod, setAddcontactmethod] = React.useState([contactMethod])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let addmoreContactmethod = () => {
    setAddcontactmethod([...addcontactmethod, {
      type1: "",
      type2: "",
      email: ""
    }])
  }
  let removeContactmethod = (i) => {
    let newaddcontactmethod = [...addcontactmethod];
    newaddcontactmethod.splice(i, 1);
    setAddcontactmethod(newaddcontactmethod)
  }

  let removeAddcontacts = (i) => {
    let newcontacts = [...addcontacts];
    newcontacts.splice(i, 1);
    setAddcontacts(newcontacts)
  }

  let addNewMoreContacts = () => {
    setAddcontacts([...addcontacts, [{ firstname: "", lastname: "", position: "" }, { contactMethod }]])
  }
  const [values, setValues] = React.useState('1')
  const handleChanges = (event, newValue) => {
      setValues(newValue);
    };
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <CssBaseline />
      <Navbar    position="fixed" />
      <Toolbar />
      <Drawer
        onClose={() => setOpen(false)}
        sx={{ paddingTop:"200px" }}
       anchor="right"
        open={open}
      >
        
         <Typography style={{fontSize:"13px"}}><PersonIcon style={{fontSize:"12px"}} fontSize="small"/> New Customer
          </Typography> 
      
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Customer" value="1" />
            <Tab label="Location" value="2" />
            <Tab label="Billing" value="3" />
            <Tab label="Payment" value="4" />
            <Tab label="Services" value="5" />
          </TabList>
            </Box>
            <TabPanel value="1">     <CustomersTab/>          </TabPanel>

            <TabPanel value="2"><LocationTab/> </TabPanel>

            <TabPanel value="3"><BillingTab/>   </TabPanel>

            <TabPanel value="4">Payment</TabPanel>
            <TabPanel value="5">Services</TabPanel>

          </TabContext>
        </Box>


      </Drawer>
      <div  style={{ paddingTop: "20px" ,paddingLeft:"530px" ,border:'20px'}}>

      <Button variant="outlined" onClick={() => { setOpen(true) }}>
        <AddIcon fontSize='small' />
        New Customer
      </Button>
      </div>
    </>

  );
}
