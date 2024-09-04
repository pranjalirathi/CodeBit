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
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
      `

    useEffect(() => {
        const timeout = setTimeout(() => { 
            setSource(src)
        }, 1000)

        return () => clearTimeout(timeout);
    }, [html, css, js])

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