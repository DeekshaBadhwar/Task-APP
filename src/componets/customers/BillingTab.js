import * as React from 'react';

import { Button, Checkbox, Container, CssBaseline, Drawer, FormControl, FormControlLabel, FormLabel, Grid, MenuItem, Radio, RadioGroup, Select, Switch, TextField, Toolbar } from '@mui/material';
export default function BillingTab() {
  return (
    <div> <FormControl>
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





  </FormControl></div>
  )
}
