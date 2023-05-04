import { Button, Stack, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import axios from'axios';


const Add = () => {
    const { register,handleSubmit}= useForm();
  const getVal=(val)=>{
        console.log(val);
        alert('FORM SUBMITTED');
         axios.post('https://reqres.in/api/users',val).then((response)=>{
            console.log(response);
         })
        }
  return (
    <div>
     
      <Stack
      component="form"
      sx={{
        marginTop:'40px',
        marginLeft:'45%',
      
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
      name='empname'
      {...register('empname')}
        hiddenLabel
        id="filled-hidden-label-small"
      
        defaultValue=" employeename "
        variant="filled"
        size="small"
      />
      <TextField
      name='emp-location'
      {...register('emp-location')}
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="emp location"
        variant="filled"
      />
       <TextField
       name='emp-desigination'
       {...register('emp-desigination')}
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="emp desigination"
        variant="filled"
      />
      <Button onClick={handleSubmit(getVal)} variant='contained'>submit</Button>
    </Stack>
    </div>
  )
}

export default Add
