import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// ** Import
const TokenlistTable = () => {
    return (
        <TableContainer component={Paper} sx={{ background: "transparent" }} className="">
            <Table aria-label="simple table" className=''>
                <TableHead className='bg-blue-500'>
                    <TableRow>
                        <TableCell className='text-purple text-30 w-50'>Name</TableCell>
                        <TableCell className='text-purple text-30'>Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                    sx={{border: "none"}}
                        // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell className='text-purpletext-white border-top-1 text-30' component="th" scope="row">
                            SOL
                        </TableCell>
                        <TableCell className='text-purpletext-white border-top-1 text-30'>1,000,000.0000</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TokenlistTable;
