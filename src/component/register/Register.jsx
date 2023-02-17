import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import "./style.css";
import { Button } from '@mui/material';
import { Container } from '@mui/system';

const Register = () => {
    const [country, setCountry] =useState('');
    const [showPassword, setShowPassword] =useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };


    

    const handleChange = (event) => {
      setCountry(event.target.value);
    };

  return (
    <div>
    <section className="register-outer">
        <Container>  
    <Box >            
      <div className='Personal-information'>
        <div className='Personal-information-heading'>Personal Information</div>
      <FormControl fullWidth >
        <TextField 
          required
          label="Full Name"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
          size="small"
          className='border-cus'
          type="text"
        />
      </FormControl> 
      <FormControl fullWidth >
        <TextField 
        required
          label="Email"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
          size="small"
          className='border-cus'
          type="email"
        />
      </FormControl>   
      <FormControl fullWidth >
        <TextField 
        required
          label="Phone no"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
          size="small"
          className='border-cus'
          type="tel"
        />
      </FormControl> 
      <FormControl fullWidth >
        <TextField 
        required
          label="Designation"
          id="outlined-start-adornment"
          sx={{ m: 1 }}
          size="small"
          className='border-cus'
          type="text"
        />
       </FormControl> 
       <FormControl fullWidth >
        <TextField 
        required
          label="Organisation"
          id="outlined-start-adornment"
          sx={{ m: 1, borderRadius: '15px' }}
          size="small"
          className='border-cus'
          type="text"
        />
       </FormControl> 
    <FormControl fullWidth>
      <FormLabel id="demo-row-radio-buttons-group-label">Type*</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        requerd
      >
        <FormControlLabel value="Agency" control={<Radio />} label="Agency" />
        <FormControlLabel value="Direct Employer" control={<Radio />} label="Direct Employer" />                
      </RadioGroup>
    </FormControl>    
        
    <FormControl sx={{ m: 1, width: '98.6%' }} size="small" fullWidth>
      <InputLabel id="demo-select-small">Country</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={country}
        label="Country"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="india">India</MenuItem>
        <MenuItem value="Afghanistan">Afghanistan</MenuItem>
        <MenuItem value="Albania">Albania</MenuItem>
        <MenuItem value="American_samoa">American Samoa</MenuItem>
      </Select>
    </FormControl>
    <FormControl sx={{ m: 1, width: '98.6%' }} size="small" fullWidth>
      <InputLabel id="demo-select-small">State</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={country}
        label="Country"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="andaman">Andaman and Nicobar Islands</MenuItem>
        <MenuItem value="Andhra_Pradesh">Andhra Pradesh</MenuItem>
        <MenuItem value="Arunachal_Pradesh">Arunachal Pradesh</MenuItem>
        <MenuItem value="Assam">Assam</MenuItem>
      </Select>
    </FormControl>
<FormControl fullWidth >
        <TextField 
        required
          label="Address"
          id="outlined-start-adornment"
          sx={{ m: 1, borderRadius: '15px' }}
          size="small"
          className='border-cus'
          type="text"
        />
       </FormControl>


      </div>
      <div className='Personal-information'>    
      <div className='Personal-information-heading'>Additional Information(Optional)</div>
      <FormControl fullWidth >
        <TextField 
        required
          label="Company Name"
          id="outlined-start-adornment"
          sx={{ m: 1, borderRadius: '15px' }}
          size="small"
          className='border-cus'
          type="text"
        />
       </FormControl>
       <FormControl fullWidth >
        <TextField 
        required
          label="GST Number"
          id="outlined-start-adornment"
          sx={{ m: 1, borderRadius: '15px' }}
          size="small"
          className='border-cus'
          type="text"
        />
       </FormControl>
       <FormControl fullWidth >
        <TextField 
        required
          label="About Organisation"
          id="outlined-start-adornment"
          sx={{ m: 1, borderRadius: '15px' }}
          size="small"
          className='border-cus'
          type="text"
        />
       </FormControl>
       <FormControl fullWidth >
        <TextField 
        required
          label="No. of Beds (If Any)"
          id="outlined-start-adornment"
          sx={{ m: 1, borderRadius: '15px' }}
          size="small"
          className='border-cus'
          type="text"
        />
       </FormControl>
       <FormControl fullWidth >
        <TextField 
        required
          label="Website"
          id="outlined-start-adornment"
          sx={{ m: 1, borderRadius: '15px' }}
          size="small"
          className='border-cus'
          type="text"
        />
       </FormControl>
       <FormControl fullWidth >
        <TextField 
        required
          label="Facebook Url"
          id="outlined-start-adornment"
          sx={{ m: 1, borderRadius: '15px' }}
          size="small"
          className='border-cus'
          type="text"
        />
       </FormControl>
       <FormControl fullWidth >
        <TextField 
        required
          label="Linkedin Url"
          id="outlined-start-adornment"
          sx={{ m: 1, borderRadius: '15px' }}
          size="small"
          className='border-cus'
          type="text"
        />
       </FormControl>
       
      </div>
      <Button variant="outlined" className='register-submit' size="large">Submit</Button>
    </Box>
    </Container>
  </section>
    </div>
  )
}

export default Register;