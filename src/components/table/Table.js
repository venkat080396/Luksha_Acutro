import * as React from 'react';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';

const StyledContainer = styled(TableContainer)({
    border: "0.05em solid rgba(255,255,255,0.5)",
    background: "rgba(255,255,255,0.1)",
    color: "white",
    '& .MuiTableCell-root': {
        color: "white"
    },
    '& .MuiTableHead-root': {
        background: "rgba(255,255,255,0.1)"
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
                            <TableCell sx={{ width: `${column.width}px` }} key={column.field}>{column.headerName}</TableCell>
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
                                    <TableCell key="column.field" sx={{ whiteSpace: "pre-wrap", verticalAlign: "top" }}>{row[column.field]}</TableCell>
                                ))
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </MuiTable>
        </StyledContainer>
    );
}

export default Table