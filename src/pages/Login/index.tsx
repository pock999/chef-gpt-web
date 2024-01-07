import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
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
  Paper,
} from '@mui/material';
import { AuthLoginReqVO } from '../../api';
import { AuthService } from '../../services';
import { Link } from "react-router-dom";
import {
  Snackbar,
  RegexUtil,
} from '../../shared';


export function Login() {

  const navigate = useNavigate();

  const [submitLoading, setSubmitLoading] = useState<boolean>(false);

  const [ formValid, setFormValid ] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });

  const handleValidation = (e: any, target: 'email' | 'password') => {
    const { value } = e.target;
    const passwordReg = RegexUtil.passwordReg;
    const emailReg = RegexUtil.emailReg;

    let errorText = '';
    
    if(target === 'email') {
      if(!emailReg.test(value)) {
        errorText = 'Email 格式錯誤';
      }
    } else {
      if(!passwordReg.test(value)) {
        errorText = '密碼格式錯誤';
      }
    }

    setFormValid({
      ...formValid,
      [target]: errorText,
    });
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if(!!formValid.email || !!formValid.password) {
      Snackbar.error('帳號密碼格式錯誤');
      return;
    }
    setSubmitLoading(true);
    
    
    try {
      const data = new AuthLoginReqVO();
      data.email = (evt.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
      data.password = (evt.currentTarget.elements.namedItem('password') as HTMLInputElement).value;
  
      await AuthService.login(data);
      navigate('/app/chat');
    } catch(e) {
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
            登入
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="帳號"
              name="email"
              autoComplete="email"
              size="small"
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
                <Link to="/auth/register">
                  <MuiLink variant="body2">
                    還沒有帳號？
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
                    登入
                </Button>
              </Grid>
            </Grid>
            
          </Box>
        </Paper>
      </Box>
    </Container>
  )
}