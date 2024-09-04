import { Box, styled } from '@mui/material';
import CloseFullScreenIcon from '@mui/icons-material/CloseFullscreen';

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;

`

const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #AAAEBC;
  justify-content: space-between;
  font-weight: 
`

const Editor = () => {
    return (
        <Box>
            <Header>
                <Heading>
                    <Box
                      component="span"
                      style={{background: 'red',
                              height: 20,
                              width: 20,
                              display: 'flex',
                              placeContent: 'center',
                              borderRadius: 5,
                              marginRight: 5,
                              paddingBottom: 2
                      }}
                    >/
                    </Box>
                    HTML
                </Heading>
                <CloseFullScreenIcon/>
            </Header>
            <Box>

            </Box>
        </Box>
    )
}

export default Editor;