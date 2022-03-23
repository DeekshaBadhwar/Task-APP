import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Navbar from '../Navbar';
import { styled } from '@mui/material/styles';
import { AppBar, Button, Container, CssBaseline, Drawer, Grid, Paper, Select, SwipeableDrawer, TextField, Toolbar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { ArrowDropDown } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
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

  root:{
      width:"100vw",
      height:"100vh",
      backgroundColor:theme.palette.gery[300]
  },
  drawer:{
width:600
  },
  navbar:{
    zIndex:1111111
  }

}))
export default function Customer() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes=useStyles()
  const [open,setOpen]=React.useState(false)

  return (
    <>
    <CssBaseline/>
    <Navbar className={classes.navbar} position="fixed"/>
    <Toolbar/>
     {/* <SwipeableDrawer open={open} varient="permanent "onClose={()=>setOpen(false)}>                    
    <Toolbar/>     
      <Navbar className={classes.appBar}/>
          </SwipeableDrawer> */}
     <Drawer                      
                        onClose={() => setOpen(false)}
                        open={open}
                    >
                      <Button>
        <PersonIcon fontSize='small'/> 
            New Customer
      </Button>
     
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
        <TabPanel value="1">
          <Container >
              <form>
               Customer Name
                <TextField  placeholder='customer name' style={{paddingTop:"20px",paddingLeft:"4px",paddingRight:"2000px" ,width: "2600px"}}>
                </TextField>
                <br/>
                <br/>
                <b>Billing Address</b>
                <br/>
                <br/>
                
                <div>
               <Grid container >
    <Grid item xs={3}>
    Street address
    <TextField
            id="re_ps"
            label="Street address"
             margin="normal"
            style={{paddingRight: "10px", width: "350px"}}
        />
    </Grid>
    <Grid item xs={3} style={{paddingLeft: "102px"}}>
          Unit Address  
          <TextField
            id="re_mooe"
            label="24"
            // value={this.state.re_mooe_value}
            // onChange={this.re_mooe_handleChange('value')}
            margin="normal"
            type="number"           
            style={{width: "220px",paddingRight: "10px"}}
        />
    </Grid>
 </Grid>  
 <br/>
 <Grid container >
    <Grid item xs={3}>
    City
    <TextField
            id="re_ps"
            label="City"
             margin="normal"
            style={{paddingRight: "10px", width: "340px"}}
        />
    </Grid>
    <Grid item xs={1} style={{paddingLeft: "80px",paddingTop:"px"}}>
          State
          <TextField
            id="re_mooe"
            label="-"
            // value={this.state.re_mooe_value}
            // onChange={this.re_mooe_handleChange('value')}
            margin="normal"
            type="number"           
            style={{width: "80px",paddingRight: "10px"}}
        />
    </Grid>
    <Grid item xs={2} style={{paddingLeft: "102px"}}>
         Zip Code
          <TextField
            id="re_mooe"
            label="Zip Code"
            // value={this.state.re_mooe_value}
            // onChange={this.re_mooe_handleChange('value')}
            margin="normal"
            type="number"           
            style={{width: "120px",paddingRight: "10px"}}
        />
    </Grid>
 </Grid>  
 <br/>
 <Grid container >
 <Grid item xs={1} >
          Latitude  
          <TextField
            id="re_mooe"
            label="-39.86652"
            // value={this.state.re_mooe_value}
            // onChange={this.re_mooe_handleChange('value')}
            margin="normal"
            type="number"           
            style={{width: "180px",paddingRight: "10px"}}
        />
    </Grid>
    <Grid item xs={2} style={{paddingLeft: "102px"}}>
         longitude 
          <TextField
            id="re_mooe"
            label="27.35914"
            // value={this.state.re_mooe_value}
            // onChange={this.re_mooe_handleChange('value')}
            margin="normal"
            type="number"           
            style={{width: "175px",paddingRight: "10px"}}
        />
    </Grid>
    <Grid item xs={3} style={{paddingLeft: "100px"}}>
          Check on map
          <TextField
            id="re_mooe"
            label=""
            // value={this.state.re_mooe_value}
            // onChange={this.re_mooe_handleChange('value')}
            margin="normal"
            type="number"           
            style={{width: "180px",paddingRight: "10px"}}
        />
    </Grid>
    </Grid>  
    <br/>
    <Grid container>
      <Grid item xs={3}> 
                   Account Representative
                <Select placeholder='customer name' style={{paddingRight: "570px",paddingLeft:"1px"}}>
                </Select>
                </Grid>
                </Grid>
                <br/>

                <Grid container>
      <Grid item xs={3}>
                   Tags
                <Select placeholder='customer name' style={{paddingRight: "570px",paddingLeft:"1px"}}>
                </Select>
                </Grid>
                </Grid>
                <br/>

                <Grid container>
      <Grid item xs={3}>
      Business unit
                <Select placeholder='customer name' style={{paddingRight: "570px",paddingLeft:"1px"}}>
                </Select>
                </Grid>
                </Grid>
               
           <h4>Contact</h4> 
           <br/>
            Name Of Contact
            <TextField  placeholder='Firstname' style={{paddingTop:"20px",paddingLeft:"4px",paddingRight:"2000px" ,width: "2600px"}}>
                </TextField> 
               
                <br/>
                <TextField  placeholder='last name' style={{paddingTop:"20px",paddingLeft:"4px",paddingRight:"2000px" ,width: "2600px"}}>
                </TextField>
                <br/>
                <br/>
                Position
                <TextField  placeholder='' style={{paddingTop:"20px",paddingLeft:"4px",paddingRight:"2000px" ,width: "2600px"}}>
                </TextField>  
                <br/>
                <br/>

                Contact Methods
                <Grid container >
 <Grid item xs={1} >
             <Select
            id="re_mooe"
            label="-39.86652"
            // value={this.state.re_mooe_value}
            // onChange={this.re_mooe_handleChange('value')}
            margin="normal"
            type="number"           
            style={{width: "90px",paddingRight: "10px"}}
        />
    </Grid>
    <Grid item xs={1} >
             <Select
            id="re_mooe"
            label="-39.86652"
            // value={this.state.re_mooe_value}
            // onChange={this.re_mooe_handleChange('value')}
            margin="normal"
            type="number"           
            style={{width: "80px",paddingRight: "10px"}}
        />
    </Grid>
    <Grid item xs={1} style={{paddingLeft:"10px",paddingRight:"5px",paddingBottom:"2000px"}} >
             <TextField
            id="re_mooe"
            placeholder="username@gmail.com"
            // value={this.state.re_mooe_value}
            // onChange={this.re_mooe_handleChange('value')}
            margin="normal"
            type="number"           
            style={{width: "390px",paddingRight: "10px"}}
        />
    </Grid>
       </Grid>  
 


 
               </div>
                
              </form>

            

          </Container>


        </TabPanel>
        <TabPanel value="2">Location</TabPanel>
        <TabPanel value="3">Billing</TabPanel>
        <TabPanel value="4">Payment</TabPanel>
        <TabPanel value="5">Services</TabPanel>
        
      </TabContext>
    </Box>


                         </Drawer>
                     <Button variant="outlined" onClick={()=>{setOpen(true)}}>
                            <AddIcon fontSize='small' />
                            New Customer
                        </Button>
                 

    </>

  );
}
