import * as React from 'react';
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography,styled } from '@mui/material';

const StyledContainer = styled(TableContainer)({
    border: '0.05em solid rgba(255,255,255,0.5)',
    background: 'rgba(255,255,255,0.1)',
    color: 'white',
    '& .MuiTableCell-root': {
        color: 'white'
    },
    '& .MuiTableHead-root': {
        background: 'rgba(255,255,255,0.1)'
    }
});

const Table = (props) => {
    const { rows, columns } = props;
    return (
        <StyledContainer component={Paper}>
            <MuiTable>
                <TableHead>
                    <TableRow>
                        {columns && columns.map((column) => (
                            <TableCell sx={{ width: `${column.width}px` }} key={column.field}>
                                <Typography variant='header3'>
                                    {column.headerName}
                                </Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows && rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {
                                columns && columns.map((column) => (
                                    <TableCell key='column.field' sx={{ whiteSpace: 'pre-wrap', verticalAlign: 'top' }}>
                                        <Typography variant='body1'>
                                            {row[column.field]}
                                        </Typography>
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </MuiTable>
        </StyledContainer>
    );
}

export { Table }