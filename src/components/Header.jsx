import { AppBar, Toolbar, Typography, styled, Box } from '@mui/material';
import logoCode from '../assets/code.png';

const Container = styled(AppBar)`
  background: #060606;
  height: 9vh;
`;

const LogoBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px; /* space between logo and title */
`;

const Title = styled(Typography)`
  color: #ffffff;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 1px;
`;

const Header = () => {
  return (
    <Container position='static'>
      <Toolbar>
        <LogoBox>
          <img src={logoCode} alt="logo" style={{ width: 40 }} />
          <Title variant="h6">CODEBIT</Title>
        </LogoBox>
      </Toolbar>
    </Container>
  );
};

export default Header;