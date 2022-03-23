
import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Drawer from '@mui/material/Drawer'

import React from 'react'

export default function AddCustomers(props) {
  
  return (
    <div>
        <Drawer
    anchor="right"
    onClose={()=>setOpen(false)}
    open={open}
    >                                              
      <Button variant="outlined"  onClick={()=>setOpen(true)}>
     <AddIcon fontSize='small' />
    New Customer
 </Button>
</Drawer></div>
  )
}
