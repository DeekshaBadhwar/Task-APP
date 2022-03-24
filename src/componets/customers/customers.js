import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Navbar from '../Navbar';
import { styled } from '@mui/material/styles';
import {  Button, Container, CssBaseline, Drawer, FormControlLabel, Grid, Select, Switch, TextField, Toolbar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
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

  const contactMethod={
    type1:"",
    type2:"",
    email:""
  }

  const Contact=
   [ {firstname:"",
    lastname:"",
    position:""},
    {
    contactMethod}
  
  ]

  const[addcontacts,setAddcontacts]=React.useState([Contact])
  const [addcontactmethod,setAddcontactmethod]=React.useState([contactMethod])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let addmoreContactmethod = () => {
    setAddcontactmethod([...addcontactmethod, {  type1:"",
    type2:"",
    email:""}])
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
  setAddcontacts([...addcontacts, [{firstname:"",lastname:"",  position:""}, {contactMethod}]])
}



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
          <Container  >
              <form>
               Customer Name
                <TextField  placeholder='customer name' style={{paddingTop:"20px",paddingLeft:"4px",paddingRight:"2000px" ,width: "2600px"}}>
                </TextField>
                <br/>
                <br/>
                <b>Billing Address</b>
                <br/>
                <br/>
                
                
               <Grid container >
    <Grid item xs={3}>
    Street address
    <TextField
            id="re_ps"
            placeholder="Street address"
             margin="normal"
            style={{paddingRight: "10px", width: "350px"}}
        />
    </Grid>
    <Grid item xs={3} style={{paddingLeft: "102px"}}>
          Unit Address  
          <TextField
            id="re_mooe"
            placeholder="24"
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
            placeholder="City"
             margin="normal"
            style={{paddingRight: "10px", width: "340px"}}
        />
    </Grid>
    <Grid item xs={1} style={{paddingLeft: "80px",paddingTop:"px"}}>
          State
          <TextField
            id="re_mooe"
            placeholder="-"
            // value={this.state.re_mooe_value}
            // onChange={this.re_mooe_handleChange('value')}
            margin="normal"
                      
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
                   
            style={{width: "120px",paddingRight: "10px"}}
        />
    </Grid>
 </Grid>  
 <br/>
 <Grid container >
 <Grid item xs={1} >
          Latitude  
          <TextField
           
            placeholder="-39.86652"
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
            
            placeholder="27.35914"
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

          {addcontacts.map((element,index)=>(
  <div key={index}>
  Name Of Contact
  <TextField  placeholder='Firstname' name="firstname"value={element.firstname || ""} style={{paddingTop:"20px",paddingLeft:"4px",paddingRight:"2000px" ,width: "2600px"}}>
      </TextField> 
     
      <br/>
      <TextField name="lastname"value={element.lastname || ""} placeholder='last name' style={{paddingTop:"20px",paddingLeft:"4px",paddingRight:"2000px" ,width: "2600px"}}>
      </TextField>
      <br/>
      <br/>
      Position
      <TextField name="position"value={element.position || ""} placeholder='Position' style={{paddingTop:"20px",paddingLeft:"4px",paddingRight:"2000px" ,width: "2600px"}}>
      </TextField>  
      <br/>
      <br/>

      Contact Methods
{addcontactmethod.map((element,index)=>(
<Grid container key={index} >
<Grid item xs={1} >
<Select
//  id="re_mooe"
name="type1" value={element.type1 || ""}

// value={this.state.re_mooe_value}
// onChange={this.re_mooe_handleChange('value')}
margin="normal"
          
style={{width: "90px",paddingRight: "10px"}}
/>
</Grid>
<Grid item xs={1} >
<Select
//  id="re_mooe"

name="type2" value={element.type2 || ""}
// value={this.state.re_mooe_value}
// onChange={this.re_mooe_handleChange('value')}
margin="normal"
          
style={{width: "80px",paddingRight: "10px"}}
/>
</Grid>
<Grid item xs={5} style={{paddingLeft:"10px",paddingRight:"5px",paddingBottom:"20px"}} >
<TextField
id="re_mooe"
placeholder="username@gmail.com"
name="email" value={element.email || ""}
// value={this.state.re_mooe_value}
// onChange={this.re_mooe_handleChange('value')}
margin="normal"
         
style={{width: "390px",paddingRight: "10px"}}
/>
</Grid>

<Grid item xs={4} style={{paddingLeft: "2px",paddingTop:"30px"}} >
{
index ? 
<Button variant="outlined"  onClick={()=>{removeContactmethod(index)}}>

-
</Button> : null
}       

</Grid>
</Grid>   ))}
<Grid item xs={5}>
<Button variant="outlined" className="button add" type="button" onClick={() => addmoreContactmethod()}> <AddIcon fontSize='small' />Add Conatct Method</Button>
</Grid>
{
index ? 
<Button variant="outlined"  onClick={()=>{removeAddcontacts(index)}}>

-
</Button> : null
}
</div>


          ))} 
         
<br/>
<br/>

<Grid style={{paddingLeft: "10px"}}>
<Button variant="outlined"style={{width:"655px"}} onClick={()=>addNewMoreContacts()} >Add Contact</Button></Grid>
               
                
              </form>

            

          </Container>


        </TabPanel>
        <TabPanel value="2">
        <FormControlLabel
        control={
          <Switch
            // checked={success}
            // onChange={handleChange}
            color="primary"
            value="dynamic-class-name"
          />
        }
        label="Same as Billing Address"
      />
      <br/>
      <FormControlLabel
        control={
          <Switch
            // checked={success}
            // onChange={handleChange}
            color="primary"
            value="dynamic-class-name"
          />
        }
        label="Location Purchases Order"
      />

      <br/>
      <FormControlLabel
        control={
          <Switch
            // checked={success}
            // onChange={handleChange}
            color="primary"
            value="dynamic-class-name"
          />
        }
        label="Signature Required"
      />
      <br/>
      <br/>
       <Button variant="outlined"style={{width:"655px"}}><AddIcon fontSize='small'/> Add Location Contact</Button>
       <br/>
       <br/>
       Tags
       <br/>
       <Select placeholder='select tags' style={{width:"655px"}}></Select>
        
        </TabPanel>
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
