import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import DateAdapter from "@mui/lab/AdapterDateFns";
import Button from "@mui/material/Button";
import "./NewP.css";
const heading = {
  fontSize: "20px",
  color: "blue",
};

export default function Add() {
  return (
    <Stack
      component="form"
      sx={{
        width: "40ch",
        display: "flex",

        margin: "15px auto",
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <h2 className={"primary"}>Add Patient</h2>
      <h3>Patient Name:</h3>

      <TextField
        className="textfield"
        hiddenLabel
        id="filled-hidden-label-small"
        placeholder='Patient Name'
        variant="filled"
        size="small"
      />

      <h3 style={heading}>Gender:</h3>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <h3 style={heading}>Age:</h3>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        placeholder='Age'
        variant="filled"
        size="small"
      />
      <h3 style={heading}>Mobile:</h3>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        placeholder='+91'
        variant="filled"
        size="small"
      />
      <h3 style={heading}>Refered By:</h3>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        placeholder='Dr.'
        variant="filled"
        size="small"
      />

      <h3 style={heading}>Date:</h3>

      <TextField
        id="date"
        label=""
        type="date"
        defaultValue=""
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Button variant="outlined">Next</Button>
    </Stack>
  );
}
