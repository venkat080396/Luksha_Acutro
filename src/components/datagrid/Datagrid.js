import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/system';

const StyledDataGrid = styled(DataGrid)({
    border: "0.05em solid rgba(255,255,255,0.5)",
    background: "rgba(255,255,255,0.1)",
    color: "white",
    '& .MuiTablePagination-root': {
        color: "white"
    },
    '& .MuiDataGrid-columnHeader': {
        border: "0.05em solid rgba(255,255,255,0.5)",
        background: "rgba(255,255,255,0.1)",
        flex:1
    },
    '& .MuiDataGrid-cell': {
        border: "0.05em solid rgba(255,255,255,0.5)",
    },
    '& .MuiDataGrid-iconSeparator': {
        display: 'none',
    },
    '& .MuiDataGrid-footerContainer': {
        color: "white"
    }
});

const Datagrid = (props) => {
    const { rows, columns, pageSize, rowsPerPageOptions } = props;
    return (
        <StyledDataGrid
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            rowsPerPageOptions={rowsPerPageOptions}
            getRowId={(row) => row.RecId}
            disableSelectionOnClick
            disableColumnMenu
        />
    )
}

export default Datagrid