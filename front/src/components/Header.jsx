import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1D1F23' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box onClick={() => goHome()} sx={{ cursor: 'pointer' }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              color="#FF785A"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              🏛️ Michi
            </Typography>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            color="#FF785A"
          >
            🏛️ Michi
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FF785A',
                ':hover': {
                  bgcolor: '#FF88DC', // theme.palette.primary.main
                  color: 'black',
                },
              }}
              size="large"
            >
              Connect Wallet
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
