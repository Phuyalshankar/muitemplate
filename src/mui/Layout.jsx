import { Container, Paper, Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ p: 2 }}>
          {children}
        </Paper>
      </Box>
    </Container>
  );
};

export default Layout;