import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import View from './Components/View';
import Add from './Components/Add';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }} sx={{ backgroundColor: 'black', padding: 1, borderRadius: 25 }} >
            Movie App
          </Typography>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit" sx={{ backgroundColor: 'black', padding: 1, borderRadius: 5 }}>View</Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Container>
        <Routes>
          <Route path="/" element={<View />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
