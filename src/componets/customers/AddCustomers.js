import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Navbar from '../Navbar';
import { styled } from '@mui/material/styles';
import { Button, Checkbox, Container, CssBaseline, Drawer, FormControl, FormControlLabel, FormLabel, Grid, MenuItem, Radio, RadioGroup, Select, Switch, TextField, Toolbar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { GridOff } from '@mui/icons-material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
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

  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <CssBaseline />
      <Navbar className={classes.navbar} position="fixed" />
      <Toolbar />
      <Drawer
        onClose={() => setOpen(false)}
       anchor=""
        open={open}
      >
        
          <PersonIcon fontSize='small' />
          New Customer
      
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
              <Container>
                <Grid>
                  <FormLabel id="demo-radio-buttons-group-label">Customer Name</FormLabel>
                  <br />
                  <TextField placeholder='customer name' style={{ width: "650px" }}>
                  </TextField>
                  <br />
                  <br />
                  <b>Billing Address</b>
                  <br />
                  <br />
                  <Grid container spacing={4}>
                    <Grid item xs={6}>
                      Street Address
                      <TextField
                        id="re_ps"

                        // value={this.state.re_pe_value}
                        // onChange={this.re_ps_handleChange('value')}
                        margin="normal"
                        style={{ paddingRight: "20px", width: "500px" }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      Unit Number
                      <TextField
                        id="re_mooe"
                        // value={this.state.re_mooe_value}
                        // onChange={this.re_mooe_handleChange('value')}
                        margin="normal"
                        style={{ paddingRight: "20px", width: "140px" }}
                      />
                    </Grid>
                  </Grid>
                  <br/>

                  <Grid container >
                    <Grid item xs={4}>
                      City
                      <TextField
                        id="re_ps"
                        placeholder="City"
                        margin="normal"
                        style={{ paddingRight: "10px", width: "370px" }}
                      />
                    </Grid>
                    <Grid item xs={1} style={{ paddingLeft: "80px", paddingTop: "px" }}>
                      State
                      <TextField
                        id="re_mooe"
                        placeholder="-"
                        // value={this.state.re_mooe_value}
                        // onChange={this.re_mooe_handleChange('value')}
                        margin="normal"

                        style={{ width: "80px", paddingRight: "10px" }}
                      />
                    </Grid>
                    <Grid item xs={3} style={{ paddingLeft: "102px" }}>
                      Zip Code
                      <TextField
                        id="re_mooe"
                        // value={this.state.re_mooe_value}
                        // onChange={this.re_mooe_handleChange('value')}
                        margin="normal"

                        style={{ width: "140px", paddingRight: "10px" }}
                      />
                    </Grid>
                  </Grid>
                  <br/>
                  <Grid container>
                    <Grid item xs={2}>
                      Latitude
                      <TextField
                        placeholder="-39.86652"
                        // value={this.state.re_mooe_value}
                        // onChange={this.re_mooe_handleChange('value')}
                        margin="normal"
                        type="number"
                        style={{ width: "210px", paddingRight: "10px" }}
                      />
                    </Grid>
                    
                     <Grid item xs={2.5} style={{ paddingLeft: "80px" }}>
                     <FormLabel> longitude</FormLabel>
                      <TextField
                        placeholder="27.35914"
                        // value={this.state.re_mooe_value}
                        // onChange={this.re_mooe_handleChange('value')}
                        margin="normal"
                        type="number"
                        style={{ width: "190px", paddingRight: "10px" }}
                      />
                    </Grid>
                    <Grid item xs={4} style={{ paddingLeft: "102px" }}>
                      Check on map
                      <TextField
                        id="re_mooe"
                        label=""
                        // value={this.state.re_mooe_value}
                        // onChange={this.re_mooe_handleChange('value')}
                        margin="normal"
                        type="number"
                        style={{ width: "190px", paddingRight: "10px" }}
                      />
                    </Grid>
                  </Grid>
                  <br />


                  <FormLabel> Account Representative</FormLabel>
                  <br />
                  <Select
                    labelId="demo-simple-select-label"
                    style={{ width: "655px" }}
                    id="demo-simple-select"
                  // value={age}
                  // onChange={handleChange}
                  >
                    <MenuItem value="commercialcustomer">Commericial Customer</MenuItem>
                    <MenuItem >Twenty</MenuItem>
                    <MenuItem >Thirty</MenuItem>
                  </Select>
                  <br />
                  <br/>

                  <FormLabel> Tags</FormLabel>
                  <br />
                  <Select
                    labelId="demo-simple-select-label"
                    style={{ width: "655px" }}
                    id="demo-simple-select"
                  // value={age}
                  // onChange={handleChange}
                  >
                    <MenuItem value="commercialcustomer">Commericial Customer</MenuItem>
                    <MenuItem >Twenty</MenuItem>
                    <MenuItem >Thirty</MenuItem>
                  </Select>
                  <br />
                  <br/>
                  <FormLabel> Business unit</FormLabel>
                  <br />
                  <Select
                    labelId="demo-simple-select-label"
                    style={{ width: "655px" }}
                    id="demo-simple-select"
                  // value={age}
                  // onChange={handleChange}
                  >
                    <MenuItem value="commercialcustomer">Commericial Customer</MenuItem>
                    <MenuItem >Twenty</MenuItem>
                    <MenuItem >Thirty</MenuItem>
                  </Select>
                  <br/>  <br/>


{addcontacts.map((element, index)=>(
  <div >
    <FormLabel> Name Of Contact</FormLabel>
    <br/>
                      <TextField placeholder='Firstname' name="firstname" style={{ width: "650px" }}
                      //  value={element.firstname || ""} 
                       >
                      </TextField>

                      <br />  <br/>
                      <TextField name="lastname" 
                      // value={element.lastname || ""}
                       style={{ width: "650px" }} placeholder='last name' >
                      </TextField>
                      <br/>  <br/>
                     <FormLabel>Position</FormLabel>
                      <br/>
                      <TextField name="position"
                      //  value={element.position || ""}  
                       style={{ width: "650px" }}placeholder='Position' >
                      </TextField>
                      <br />
                      <br/>
                      Contact Methods
                      <br/>
                      
                      {addcontactmethod.map((element, index) => (
                        <div>
                          <Grid container >
                    <Grid item xs={0.5}>
                    
                  <br />
                  <Select
                    labelId="demo-simple-select-label"
                    name="type2"
                    style={{ width: "100px",paddingRight:"10px" }}
                    id="demo-simple-select"
                  // value={age}
                  // onChange={handleChange}
                  >
                    <MenuItem value="phone"><LocalPhoneIcon fontSize='small'/></MenuItem>
                    <MenuItem value="emailid" ><EmailIcon fontSize='small'/></MenuItem>
                    <MenuItem >Thirty</MenuItem>
                  </Select>
                     
                    </Grid>
                    <Grid item xs={1.5} style={{ paddingLeft: "80px", paddingTop: "px" }}>                                
                              <br />
                              <Select
                                labelId="demo-simple-select-label"
                                name="type1"
                                style={{ width: "100px",paddingRight:"10px"  }}
                                id="demo-simple-select"
                              // value={age}
                              // onChange={handleChange}
                              >
                                <MenuItem value="commercialcustomer">Commericial Customer</MenuItem>
                                <MenuItem ></MenuItem>
                                <MenuItem >Thirty</MenuItem>
                              </Select>
                    </Grid>
                    <br/>
                    <Grid item xs={4} style={{ paddingLeft: "90px" }}>   
                                      
                      <TextField
                        id="re_mooe"
                        name="email"
                        // value={this.state.re_mooe_value}
                        // onChange={this.re_mooe_handleChange('value')}
                        placeholder='username@gmail.com'
                        margin="normal"
                        style={{ width: "400px", paddingRight: "10px" ,paddingTop:"7px"}}
                      />
                    </Grid>
                  </Grid>
                  {
                              index ?
                                <Button variant="outlined" onClick={() => { removeContactmethod(index) }}>

                                  Remove
                                </Button> : null
                            }
                          </div>

                      ))}
                      <br/>



<Button variant="outlined" className="button add" type="button" onClick={() => addmoreContactmethod()}> <AddIcon fontSize='small' />Add Conatct Method</Button>
                     
                      {
                        index ?
                       <>
                       <br/>
                          <Button variant="outlined" onClick={() => { removeAddcontacts(index) }}>

                            Remove
                          </Button> </>: null
                      }
                      <br/> <br/> <br/>
 <Button variant="outlined" style={{ width: "655px" }} onClick={() => addNewMoreContacts()} >Add Contact</Button>

    </div>
    
))}

                </Grid>
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
              <br />
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

              <br />
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
              <br />
              <br />
              <Button variant="outlined" style={{ width: "655px" }}><AddIcon fontSize='small' /> Add Location Contact</Button>
              <br />
              <br />
              Tags
              <br />
              <Select placeholder='select tags' style={{ width: "655px" }}></Select>

            </TabPanel>

            <TabPanel value="3">
              <FormControl>
                Profile
                <Select
                  labelId="demo-simple-select-label"
                  style={{ width: "655px" }}
                  id="demo-simple-select"
                // value={age}
                // onChange={handleChange}
                >
                  <MenuItem value="commercialcustomer">Commericial Customer</MenuItem>
                  <MenuItem >Twenty</MenuItem>
                  <MenuItem >Thirty</MenuItem>
                </Select>
                <br />
                Cycle
                <Select
                  labelId="demo-simple-select-label"
                  style={{ width: "655px" }}
                  id="demo-simple-select"
                // value={age}
                // onChange={handleChange}
                >
                  <MenuItem value="month">Month</MenuItem>
                  <MenuItem >Twenty</MenuItem>
                  <MenuItem >Thirty</MenuItem>
                </Select>
                <br />
                <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="advance" control={<Radio />} label="Advance" />
                  <FormControlLabel value="arrears" control={<Radio />} label="Arrears" />
                </RadioGroup>
                <br />

                <FormLabel id="demo-radio-buttons-group-label">Timing</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="anniversary" control={<Radio />} label="Anniversary" />
                  <FormControlLabel value="dayOfMonth" control={<Radio />} label="Day of Month" />
                  <FormControlLabel value="daysBeforeMonth" control={<Radio />} label="Days before Month" />
                  <FormControlLabel value="dayOfPreviousMonth" control={<Radio />} label="Day of Previous Month" />

                </RadioGroup>
                <br />
                <Grid container>
                  <Grid item xs={5}>
                    <FormLabel id="demo-radio-buttons-group-label">Credit Limit</FormLabel>
                    <TextField
                      id="re_mooe"
                      placeholder="$"
                      // value={this.state.re_mooe_value}
                      // onChange={this.re_mooe_handleChange('value')}
                      style={{ width: "300px" }}
                    />

                  </Grid>
                  <Grid item xs={4} style={{ paddingBottom: "70px", paddingTop: "2px" }}>
                    <FormLabel id="demo-radio-buttons-group-label">Payment terms</FormLabel>

                    <Select
                      labelId="demo-simple-select-label"
                      style={{ width: "300px" }}
                      id="demo-simple-select"
                    // value={age}
                    // onChange={handleChange}
                    >
                      <MenuItem value="month">Month</MenuItem>
                      <MenuItem >Twenty</MenuItem>
                      <MenuItem >Thirty</MenuItem>
                    </Select>
                    <br />
                  </Grid>
                </Grid>
                <FormLabel id="demo-radio-buttons-group-label">Cycle</FormLabel>
                <Select
                  labelId="demo-simple-select-label"
                  style={{ width: "655px" }}
                  id="demo-simple-select"
                // value={age}
                // onChange={handleChange}
                >
                  <MenuItem value="month">Month</MenuItem>
                  <MenuItem >Twenty</MenuItem>
                  <MenuItem >Thirty</MenuItem>
                </Select>
                <br />
                <b>Collection letter</b>
                <br />
                <Grid container>
                  <Grid item xs={6}>
                    <FormLabel id="demo-radio-buttons-group-label">Letter</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      style={{ width: "400px" }}
                      id="demo-simple-select"
                    // value={age}
                    // onChange={handleChange}
                    >
                      <MenuItem value="letter">Letter</MenuItem>
                      <MenuItem >Twenty</MenuItem>
                      <MenuItem >Thirty</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={3} style={{ paddingBottom: "80px" }}>
                    <FormLabel id="demo-radio-buttons-group-label">Day after Late Fees</FormLabel>
                    <TextField
                      type="number"
                      style={{ width: "240px" }}
                    >
                    </TextField>
                  </Grid>
                </Grid>
                <FormLabel id="demo-radio-buttons-group-label">Delivery Method</FormLabel>
                <Grid container>
                  <Grid item xs={2}>
                    <Checkbox />PDF
                  </Grid>
                  <Grid item xs={2}>
                    <Checkbox />Portal
                  </Grid>
                  <Grid item xs={2}>
                    <Checkbox />Paper
                  </Grid>
                  <Grid item xs={2}>
                    <Checkbox />Postcard
                  </Grid>
                </Grid>
                <br />
                <FormLabel id="demo-radio-buttons-group-label">Proration Prefrence</FormLabel>
                <Select
                  labelId="demo-simple-select-label"
                  style={{ width: "655px" }}
                  id="demo-simple-select"
                // value={age}
                // onChange={handleChange}
                >
                  <MenuItem value="dayBasedProration">Day-Based Proration</MenuItem>
                  <MenuItem >Twenty</MenuItem>
                  <MenuItem >Thirty</MenuItem>
                </Select>

                <br />
                <FormControlLabel
                  control={
                    <Switch
                      // checked={success}
                      // onChange={handleChange}
                      color="primary"
                      value="roll-up-account"
                    />
                  }
                  label="Roll-Up Account"
                />
                <FormControlLabel
                  control={
                    <Switch
                      // checked={success}
                      // onChange={handleChange}
                      color="primary"
                      value="Customer-purchase-order"
                    />
                  }
                  label="Customer Purchase Order"
                />
                <FormControlLabel
                  control={
                    <Switch
                      // checked={success}
                      // onChange={handleChange}
                      color="primary"
                      value="tax-exempt"
                    />
                  }
                  label="Tax Exempt"
                />
                <br />





              </FormControl>
            </TabPanel>
            <TabPanel value="4">Payment</TabPanel>
            <TabPanel value="5">Services</TabPanel>

          </TabContext>
        </Box>


      </Drawer>
      <Button variant="outlined" onClick={() => { setOpen(true) }}>
        <AddIcon fontSize='small' />
        New Customer
      </Button>

     
    </>

  );
}
<Toolbar>
                    <IconButton component="div" sx={{ flexGrow: 2 }} size="small" >
                        <MenuIcon size="small"
                            color="inherit"
                            aria-label="speed"
                        >
                        </MenuIcon>Dashboard
                    </IconButton>
                    <Toolbar />
                    <Link to="/customer">  <Typography component="div"  sx={{ flexGrow: 2 }} textColor="inherit" size="small" >
                        <GroupsIcon
                            color="inherit"
                            fontSize='small'
                            aria-label="peoplealt"
                        />
                        Customers
                    </Typography></Link> 
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