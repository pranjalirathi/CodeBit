import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/DataProvider';

import { Box, styled } from '@mui/material';

const Container = styled(Box)`
    height: 41vh;
`

const ViewCode = () => {

    const [source, setSource] = useState('');

    const { html, css, js} = useContext(DataContext);

    const src = 
      `<html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
      `

    useEffect(() => {
        const timeout = setTimeout(() => { 
            setSource(src)
        }, 1000)

        return () => clearTimeout(timeout);
    }, [src])

    return (
        <Container>
            <iframe 
                srcDoc = {source}
                title = "Output"
                sandbox='allow-scripts'
                width = "100%"
                height = "100%"
            />
        </Container>
    )
}

export default ViewCode;

// checking the repo