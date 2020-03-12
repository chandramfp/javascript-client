import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import theme from './theme';

import { ChildrenDemo } from './pages/index';


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography>
          <ChildrenDemo />
        </Typography>
      </ThemeProvider>
    </>
  );
}

export default App;
