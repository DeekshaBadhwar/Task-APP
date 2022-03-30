import { Box, Button, Container, FormLabel, Grid, MenuItem, Select, TextField } from '@mui/material'
import React, { Component, useState } from 'react'
import './index.css'

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
export default function CustomersTab() {
    
    const CONTACT_MODEL=
        [{  firstname:'',
        lastname:'',
        position:'',
        methods:[{type1:'',type2:'',email:''}]
    }]
    


        const [contact,setContacts]=useState([...CONTACT_MODEL])

        const addMoreContact = () => {
            setContacts([...contact, ...CONTACT_MODEL])
        }

        const addMoreContactMethod = (index) => {
            setContacts(contact?.map((contact, contactIndex) => {
                if(contactIndex === index) {
            return {...contact, methods: [...contact.methods,[ {type1:'',type2:'',email:''}]]}
                }
                return contact;
            }))
        }
    

  return (
    <Container>
        <div className="box">
        <FormLabel id="demo-radio-buttons-group-label">Customer Name</FormLabel>
        <TextField placeholder='customer name' fullWidth></TextField>
      </div>
      <br/>
      <b>Billing Address</b>
      <br/>
      <div className="box">
      
     <div className='street'>
         <FormLabel id="demo-radio-buttons-group-label">Street Address</FormLabel>
        <TextField placeholder='street address' fullWidth>
            </TextField></div> 
        <div>
            <FormLabel id="demo-radio-buttons-group-label">Unit Number</FormLabel>
        <TextField placeholder='24' fullWidth></TextField>
        </div>
      </div>
      <br/>
    <div className='box'>
        <div className='street'>
        <FormLabel id="demo-radio-buttons-group-label">City</FormLabel>
        <TextField placeholder='city' fullWidth></TextField> 
        </div>
        <div className='state'>
        <FormLabel id="demo-radio-buttons-group-label" >State</FormLabel>
        <TextField placeholder='-' fullWidth></TextField>
        </div>
        <div className='zipcode'> 
        <FormLabel id="demo-radio-buttons-group-label">Zip Code</FormLabel>
        <TextField placeholder='zip code' fullWidth></TextField>
        </div>
    </div>
    <br/>
    <div className='box'>
        <div className='zipcode'>
        <FormLabel id="demo-radio-buttons-group-label" >Latitude</FormLabel>
        <TextField placeholder='-39.86255' fullWidth="10%"></TextField>
         </div>
         <div className='zipcode'>
         <FormLabel id="demo-radio-buttons-group-label">Longitude</FormLabel>
        <TextField placeholder='27.35914' fullWidth></TextField>
         </div>
         <div className='zipcode'>
         <FormLabel id="demo-radio-buttons-group-label">Check On Map</FormLabel>
        <TextField  fullWidth></TextField>
         </div>
    </div>
    <br/>
    <div className='box'>
        <FormLabel>Account Representative</FormLabel>
        <Select fullWidth>
        <MenuItem value="commercialcustomer">Commericial Customer</MenuItem>
                    <MenuItem >Twenty</MenuItem>
                    <MenuItem >Thirty</MenuItem>
          </Select>
</div>
<br/>
<div className='box'>
        <FormLabel>Business Unit</FormLabel>
        <Select fullWidth>
        <MenuItem value="commercialcustomer">Commericial Customer</MenuItem>
                    <MenuItem >Twenty</MenuItem>
                    <MenuItem >Thirty</MenuItem>
          </Select>
</div>
<br/>
<div className='box'>
        <FormLabel>Tags</FormLabel>
        <Select fullWidth>
        <MenuItem value="commercialcustomer">Commericial Customer</MenuItem>
                    <MenuItem >Twenty</MenuItem>
                    <MenuItem >Thirty</MenuItem>
          </Select>
</div>
<br/>
{contact?.map((element,index)=>(
    <div key={index}>
<div className='contact'>
   <b>Contact</b>
    <div > 
        <FormLabel id="demo-radio-buttons-group-label">Name Of Contact</FormLabel>
        <TextField name="firstname" placeholder='first name' fullWidth></TextField>
        </div>
        <div>
       <TextField name='lastname' placeholder='last name' fullWidth></TextField>
        </div> 
        <div>
        <FormLabel  id="demo-radio-buttons-group-label">Position</FormLabel>
        <TextField name='position' placeholder='Position' fullWidth></TextField>
        </div>        
</div>
<br/>
{ element?.methods?.map((element,index)=>(
    <div key={index}>
    <FormLabel>Contact Methods</FormLabel>   
<div className='box'>
   
            <div className='state'>
        <Select name="type1" fullWidth>
        <MenuItem value="phone"><LocalPhoneIcon fontSize='small'/></MenuItem>
        <MenuItem value="emailid" ><EmailIcon fontSize='small'/></MenuItem>
        </Select>
    </div>

    <div className='state'>
        <Select name='type2' fullWidth>
        <MenuItem value="phone"><LocalPhoneIcon fontSize='small'/></MenuItem>
        <MenuItem value="emailid" ><EmailIcon fontSize='small'/></MenuItem>
        </Select>
    </div>
    <div className='city'>
        <TextField name='email' placeholder='username@gmail.com' fullWidth></TextField> 
        </div>
</div>

</div>
))}
<div className='box'>
    <Button onClick={()=>{addMoreContactMethod(index)}}>+ Add Contact Methods</Button>

</div>

</div>
))}

<br/>

<br/>

<div className='box'>
<Button variant="outlined"  onClick={addMoreContact} fullWidth>Add Contact</Button>

</div>
    </Container>
  )
}
