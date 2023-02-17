import React from 'react'
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Container } from '@mui/system';
import "./style.css";

const AdvanceSearch = () => {

    const [specialization, setSpecialization] = React.useState('');
    const handleChange = (event) => {
        setSpecialization(event.target.value);
    };

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));




    return (
        <>
        <section>
        <Container>
            
            <Grid container spacing={2} className="advance-outer">
                <Grid item xs={12} sm={6} md={4} lg={3} className="custompd">
                    <Search className='left-search'>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            className='left-search-inner'
                            placeholder="Search Keyword"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3} className="custompd">
                    <FormControl style={{ minWidth: "100%" }} className="select-custom">
                        <InputLabel id="demo-simple-select-label">Specialization</InputLabel>
                        <Select
                            // labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={specialization}
                            label="Specialization"
                            placeholder="Specialization"
                            onChange={handleChange}
                        >
                            
                            <MenuItem >Specialization</MenuItem>
                            <MenuItem value="Medicine">Medicine</MenuItem>
                            <MenuItem value="MBBS">MBBS Doctor</MenuItem>
                            <MenuItem value="BSC">B.Sc (Nursing)</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} className="custompd">
                    <Search style={{ maxWidth: "100px" }}>
                        <SearchIconWrapper>
                            <LocationOnIcon size='large' />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Location"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} textAlign="right" className="custompd">
                    <Button variant="contained" className='advance-search'>Search Jobs</Button>
                </Grid>

            </Grid>
            </Container>
        </section>

        </>
    )
}

export default AdvanceSearch;