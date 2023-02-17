import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
const BookList = (props) => {
  const [country, setCountry] = useState("");
  const [toCountry, setToCountry] = useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);    
  };
  const handleChangeto = (event) => {
    setToCountry(event.target.value);    
  };
const submitSingleDegree = (event) => {
    event.preventDefault();
    alert("Submit API not working Please Wait...")
  }

//   const handleChange = (event) => {
//     event.preventDefault();
//     const value = event.target.value;
//     const name = event.target.name;
//     setCountry((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

  return props.bookDetails.map((val, idx) => {
    let name = `name-${idx}`,
      author = `author-${idx}`,
      dateOfPublish = `dateOfPublish-${idx}`,
      from = `type-${idx}`,
      to = `type-${idx}`,
      price = `price-${idx}`;
    return (
      <div className="form-row" key={val.index}>
        <FormControl fullWidth>
          <TextField
            required
            label="Degree"
            id={name}
            sx={{ m: 1, borderRadius: "15px" }}
            placeholder="Degree Name"
            size="small"
            className="border-cus"
            type="text"
            data-id={idx}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "98.6%" }} size="small" fullWidth>
          <InputLabel id="demo-select-small">From Year</InputLabel>
          <Select
            name="from"
            labelId="demo-select-small"
            id={from}
            value={country}
            label="Functional area"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>From Year</em>
            </MenuItem>
            <MenuItem value="1990">1990</MenuItem>
            <MenuItem value="1991">1991</MenuItem>
            <MenuItem value="1992">1992</MenuItem>
            <MenuItem value="1993">1993</MenuItem>
            <MenuItem value="1994">1994</MenuItem>
            <MenuItem value="1995">1995</MenuItem>
            <MenuItem value="1996">1996</MenuItem>
            <MenuItem value="1997">1997</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: "98.6%" }} size="small" fullWidth>
          <InputLabel id="demo-select-small">To Year</InputLabel>
          <Select
            name="to"
            labelId="demo-select-small"
            id={to}
            value={toCountry}
            label="Functional area"
            onChange={handleChangeto}
          >
            <MenuItem value="">
              <em>To Year</em>
            </MenuItem>
            <MenuItem value="1990">1998</MenuItem>
            <MenuItem value="1991">1999</MenuItem>
            <MenuItem value="1992">2000</MenuItem>
            <MenuItem value="1993">2001</MenuItem>
            <MenuItem value="1994">2002</MenuItem>
            <MenuItem value="1995">2003</MenuItem>
            <MenuItem value="1996">2004</MenuItem>
            <MenuItem value="1997">2005</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            required
            label="Institution"
            id={author}
            sx={{ m: 1, borderRadius: "15px" }}
            placeholder="Institution"
            size="small"
            className="border-cus"
            type="text"
            data-id={idx}
            name="author"
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            required
            label="Specialization"
            id={author}
            sx={{ m: 1, borderRadius: "15px" }}
            placeholder="Specialization"
            size="small"
            className="border-cus"
            type="text"
            data-id={idx}
            name="dateOfPublish"
          />
        </FormControl>   
        
             
        <div className="col p-4">
<div style={{display: "flex", justifyContent: "space-between",  padding: "0 7px"}}>
          <Button variant="contained" onClick={submitSingleDegree}>Submit Degree</Button>
          {idx === 0 ? (            
            <Button variant="contained" onClick={() => props.add()}>
              Add another Degree
            </Button>
          ) : (
            <Button variant="contained" onClick={() => props.delete(val)}>
              Delete Degree
            </Button>
          )}
          </div>
        </div>
      </div>
    );
  });
};
export default BookList;
