import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BrowserRouter, Route, Routes, Link, NavLink, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ApiService from '../api/ApiService';
import {useState} from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const theme = createTheme();

export default function SignUp() {

  const navigate=useNavigate();

  const [id,setId]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if(password!=confirmPassword){
      return alert('confirm password is different!');
    }
    else{
    let user={
      id: id,
      password: password,
      username: username,
      email: email,
      phone: phone
    }

    ApiService.addUser(user);
    if(window.confirm('do you want to sign up?')==true){
      navigate('/');
    }
    else{
      navigate('/SignUp');
    }
  }
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
            회원가입
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Stack spacing={2}>
            <Item>
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="id"
                        label="아이디"
                        name="id"
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
                        value={password} onChange={({ target: { value } }) => setPassword(value)}           
                        />
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password2"
                        label="비밀번호확인"
                        type="password"
                        id="password2"     
                        value={confirmPassword} onChange={({ target: { value } }) => setConfirmPassword(value)}      
                        />
                        </Item>
                        <Item>
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="ㅅㅓㅇㅁㅕㅇ"
                        name="username"
                        autoFocus
                        value={username} onChange={({ target: { value } }) => setUsername(value)}
                        />
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="email"
                        label="이메일"
                        id="email"
                        value={email} onChange={({ target: { value } }) => setEmail(value)}
                        />
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="phone"
                        label="휴대전화"
                        id="phone"
                        value={phone} onChange={({ target: { value } }) => setPhone(value)}
                        />
                        </Item>
            </Stack>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              회원가입
            </Button>
            <Grid container>
              <Grid item>
                아이디를 가지고 계신가요? 
                <Link to="/SignIn" variant="body2">
                  {"로그인"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}