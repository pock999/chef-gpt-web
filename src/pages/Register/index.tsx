import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link as MuiLink,
  Grid,
  Box,
  Typography,
  Container,
  Paper
} from '@mui/material';

import { AuthRegisterReqVO } from '../../api';
import { AuthService } from '../../services';

import {
  Snackbar,
  RegexUtil
} from '../../shared';

export function Register() {

  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [ formValid, setFormValid ] = useState<{
    name: string;
    email: string;
    password: string;
  }>({
    name: '',
    email: '',
    password: '',
  });

  const handleValidation = (e: any, target: 'name' | 'email' | 'password') => {
    const { value } = e.target;
    const passwordReg = RegexUtil.passwordReg;
    const emailReg = RegexUtil.emailReg;

    let errorText = '';
    
    if(target === 'name') {
      if(value.length === 0) {
        errorText = '姓名不得為空';
      } else if(value.trim() !== value) {
        errorText = '姓名不得以空白開頭與結尾';
      } else if(value.length > 128) {
        errorText = '姓名長度最多為 128 字元';
      }
    } else if(target === 'email') {
      if(!emailReg.test(value)) {
        errorText = 'Email 格式錯誤';
      }
    } else {
      if(!passwordReg.test(value)) {
        errorText = '密碼強度不足';
      }
    }

    setFormValid({
      ...formValid,
      [target]: errorText,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if(!!formValid.email || !!formValid.password || !!formValid.name) {
      Snackbar.error('表單欄位格式錯誤');
      return;
    }
    setSubmitLoading(true);
    try {
      const data = new AuthRegisterReqVO();
      data.email = (evt.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
      data.name = (evt.currentTarget.elements.namedItem('name') as HTMLInputElement).value;
      data.password = (evt.currentTarget.elements.namedItem('password') as HTMLInputElement).value;

      await AuthService.register(data);
      navigate('/auth/login');
    } catch (e) {

    }
    setSubmitLoading(false);
  };

  return (
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
        <Paper
          variant="elevation"
          sx={{
            p: 3,
            pt: 8,
            pb: 4,
            m: 0.5,
          }}
          elevation={4}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.primary' }}>
            <AccountCircleIcon />
          </Avatar> */}
          <Typography component="h1" variant="h4" sx={{ textAlign: 'center' }}>
            Chef-GPT
          </Typography>
          <Typography component="h2" variant="h5">
            註冊
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="姓名"
              name="name"
              autoComplete="name"
              size="small"
              autoFocus
              onChange={(e) => handleValidation(e, 'name')}
              error={formValid.name !== ""}
              helperText={formValid.name !== "" ? formValid.name : ''}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="帳號"
              name="email"
              autoComplete="email"
              size="small"
              autoFocus
              onChange={(e) => handleValidation(e, 'email')}
              error={formValid.email !== ""}
              helperText={formValid.email !== "" ? formValid.email : ''}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="密碼"
              type="password"
              id="password"
              size="small"
              autoComplete="current-password"
              onChange={(e) => handleValidation(e, 'password')}
              error={formValid.password !== ""}
              helperText={formValid.password !== "" ? formValid.password : ''}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            
            <Grid container>
              <Grid item xs>
                <Link to="/auth/login">
                  <MuiLink variant="body2">
                    前往登入
                  </MuiLink>
                </Link>
              </Grid>
              <Grid item sx={{ mt: 4 }}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={submitLoading}
                  >
                    註冊
                </Button>
              </Grid>
            </Grid>
            
          </Box>
        </Paper>
      </Box>
    </Container>
  )
}