import { Button, FormControlLabel, Select, Switch } from '@mui/material'

import AddIcon from '@mui/icons-material/Add';
import React from 'react'

export default function LocationTab() {
  return (
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

 </div>
  )
}

