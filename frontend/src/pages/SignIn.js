import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BrowserRouter, Route, Routes, Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ApiService from '../api/ApiService';
import {useState} from 'react';

const theme = createTheme();

export default function SignIn() {

  const navigate = useNavigate();

  const [id,setId]=useState("");
  const [password,setPassword]=useState("");
  let user={
    id:"",
    password:""
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/');
    {/*ApiService.fetchUserByID(id)
    .then(response=>{
      user=response.data
    })
    if(id!=user.id||password!=user.password){
      return alert('please confirm your id and password!');
    }
    else{
      navigate('/');
    }*/}
  };
  
  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="id"
              label="아이디"
              name="id"
              autoComplete="id"
              autoFocus
              value={id} onChange={({ target: { value } }) => setId(value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password} onChange={({ target: { value } }) => setPassword(value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="아이디 저장"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/SignUp" variant="body2">
                  아이디 / 비밀번호 찾기
                </Link>
              </Grid>
              <Grid item>
                <Link to="/SignUp" variant="body2">
                  {"회원가입"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}