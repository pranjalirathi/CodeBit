import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

import { Box, styled } from '@mui/material';

const ViewCode = () => {

    const src = 
      `<html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
      `

    return (
        <Box>

        </Box>
    )
}

export default ViewCode;