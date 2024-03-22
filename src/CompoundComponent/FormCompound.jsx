import React, { createContext, useContext, useState } from 'react'
import { Button, Grid, TextField, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core';

const FormContext = createContext();

export function Form(props) {
  const [data, setData] = useState(props.formData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <FormContext.Provider 
      value={{ 
        data, 
        setData,
        loading,
        setLoading,
        error,
        setError
      }}
    >
      { loading && <Typography>Loading...</Typography> }
      <Grid container spacing={2}>
        {props.children}
      </Grid>
    </FormContext.Provider>
  );
}

function FormInput({ value }) {
  const { data, setData } = useContext(FormContext);

  const handleChange = (e) => {
    setData(data => ({ ...data, [value]: e.target.value}));
  }

  return (
    <Grid item xs={12} sm={6}>
      <TextField 
        value={data[value]} 
        onChange={handleChange}
        fullWidth
        label={value}
        variant="outlined"
      />
    </Grid>
  );
}

function FormRadioGroup({ title, value, options }) {
  const { data, setData } = useContext(FormContext);

  const handleChange = (e) => {
    setData(data => ({ ...data, [value]: e.target.value}));
  }

  return (
    <FormControl component="fieldset">
      <Typography>{title}</Typography>
      <RadioGroup aria-label="options" name="options1" value={data[value]} onChange={handleChange}>
        {options.map(o => (
          <FormControlLabel key={o} value={o} control={<Radio />} label={o} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

function FormSubmit({ buttonName, onSubmitCallback }) {
  const { data, setLoading } = useContext(FormContext);

  const handleSubmit = () => {
    setLoading(true); 
    setTimeout(() => {
      onSubmitCallback(data); 
      setLoading(false);
    }, 5000); 
  }

  return (
    <Grid item xs={12}>
      <Button 
        onClick={handleSubmit}
        variant='outlined'
      >
        {buttonName}
      </Button>
    </Grid>
  )
}

Form.Input = FormInput;
Form.RadioGroup = FormRadioGroup;
Form.Submit = FormSubmit;

