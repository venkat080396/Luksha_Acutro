import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/system';

const StyledDataGrid = styled(DataGrid)({
    '& .MuiTablePagination-root': {
        overflow: "hidden"
    },
    '& .MuiDataGrid-iconSeparator': {
        display: 'none',
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
            getRowId={(row) => row?.RecId}
            disableSelectionOnClick
            disableColumnFilter
            disableColumnSelector
        />
    )
}

export default Datagrid