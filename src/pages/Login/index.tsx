import React from 'react';

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Paper,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function Login() {

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const data = new FormData(evt.currentTarget);
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
              autoFocus
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
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  還沒有帳號？
                </Link>
              </Grid>
              <Grid item sx={{ mt: 4 }}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
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