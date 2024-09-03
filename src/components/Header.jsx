import {AppBar, Toolbar, styled } from '@mui/material';
import dolphin from '../assets/dolphin.jpg'

const Container = styled(AppBar)`
  background: #060606;
  height: 9vh;
`


const Header = () => {
    return (
        <Container position='static'>
            <Toolbar>
                <img src={dolphin} alt="llogo" style={{ width: 40}} />
            </Toolbar>
        </Container>
    )
}

export default Header;