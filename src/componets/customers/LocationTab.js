import { Button, FormControlLabel, Select, Switch } from '@mui/material'

import AddIcon from '@mui/icons-material/Add';
import React from 'react'

export default function LocationTab() {
  return (
    <div className='box'>
      <div className='contact'>
      <div>
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
    
      </div>
   
    <div>
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
    </div>
   <div>
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
     </div></div>
     

    <br />
    <br />
    <Button variant="outlined" fullWidth ><AddIcon fontSize='small' /> Add Location Contact</Button>
    <br />
    <br />
    Tags
    <br />
    <Select placeholder='select tags' fullWidth></Select>

 </div>
  )
}

