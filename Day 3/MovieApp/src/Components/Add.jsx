import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Add = () => {
  const [form, setForm] = useState({
    mimage: '',
    mname: '',
    director: '',
    category: '',
    ryear: ''
  });

  function valueCap(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        justifyContent: 'center', // Center align horizontally
        alignItems: 'center', // Center align vertically
        minHeight: '100vh', // Ensures the form is vertically centered on the page
      }}
      noValidate
      autoComplete="off"
    >
      <Stack
        spacing={2}
        direction="column"
        sx={{
          backgroundColor: 'white',
          padding: 2,
          borderRadius: 5,
          width: '300px', // Adjust width as needed
        }}
      >
        <TextField required id="name-input" label="Movie Name" variant="standard" name="mname" onChange={valueCap} />
        <TextField required id="director-input" label="Director" variant="standard" name="director" onChange={valueCap} />
        <TextField required id="category-input" label="Category" variant="standard" name="category" onChange={valueCap} />
        <TextField required id="ryear-input" label="Release Year" variant="standard" name="ryear" onChange={valueCap} />
        <Button variant="contained" color='success'>Add</Button>
      </Stack>
    </Box>
  );
}

export default Add;
