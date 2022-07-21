import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/system';
import Datagrid from "../../../components/datagrid/Datagrid";
import { CONNECTORS } from "../constants";
import Menu from '../../../components/layout/Menu/Menu';

const rows = [
    { RecId: 1, Name: "Grassmere1", type: "Microsoft Team" },
    { RecId: 2, Name: "Secound2", type: "SMS List" },
    { RecId: 3, Name: "Grassmere3", type: "Microsoft Team" },
    { RecId: 4, Name: "Secound4", type: "SMS List" },
    { RecId: 5, Name: "Grassmere5", type: "Microsoft Team" },
    { RecId: 6, Name: "Secound6", type: "SMS List" },
];

const menuItems = [
    { recId: 1, name: "Edit" },
    { recId: 2, name: "Delete" }
]

// const MenuComponent = () => {
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const [openDialog, setOpenDialog] = React.useState(false);
//     const open = Boolean(anchorEl);

//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//         setOpenDialog(false);
//         setAnchorEl(null);
//     };
//     const handleEdit = (event) => {
//         setOpenDialog(true);
//         setAnchorEl(event.currentTarget);
//     };
//     const handleDelete = (event) => {
//         setOpenDialog(true);
//         setAnchorEl(event.currentTarget);
//     };

//     return (
//         <>
//             <Box>
//                 <IconButton onClick={handleClick}>
//                     <MoreVertIcon style={{ color: "#fff" }} />
//                 </IconButton>
//             </Box>
//             <Menu
//                 id="demo-positioned-menu"
//                 aria-labelledby="demo-positioned-button"
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleClose}
//                 anchorOrigin={{
//                     vertical: "top",
//                     horizontal: "left",
//                 }}
//                 transformOrigin={{
//                     vertical: "top",
//                     horizontal: "left",
//                 }}
//             >
//                 <MenuItem onClick={handleEdit}>Edit</MenuItem>
//                 <MenuItem onClick={handleClose}>Delete</MenuItem>
//             </Menu>
//             <Dialog
//                 open={openDialog}
//                 handleClose={() => setOpenDialog(false)}
//                 title={"Update Connector"}
//                 content={
//                     <>
//                         <Box width={600}>
//                             <Grid container spacing={2}>
//                                 <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
//                                     <TextField name="Name" fullWidth />
//                                 </Grid>
//                                 <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
//                                     <TextField name="Web Address" fullWidth />
//                                 </Grid>
//                                 <Grid item sx={12} sm={12} md={12} lg={12} xl={12}>
//                                     <Grid container alignItems='center' flexDirection='row-reverse' spacing={2}>
//                                         <Grid item>
//                                             <Button variant='contained' onClick={() => setOpenDialog(false)}>Save</Button>
//                                         </Grid>
//                                         <Grid item>
//                                             <Button variant="contained" color="error" onClick={() => setOpenDialog(false)}>Cancel</Button>
//                                         </Grid>
//                                     </Grid>
//                                 </Grid>
//                             </Grid>
//                         </Box>
//                     </>
//                 }
//             />
//         </>
//     );
// };

const columns = [
    {
        field: "Name",
        headerName: "Name",
        width: "600",
        renderCell: (cellValues) => {
            return (
                <Grid container>
                    <Grid item>{cellValues.value}</Grid>
                </Grid>
            );
        },
    },
    {
        field: "type",
        headerName: "Type",
        width: "600"
    },
    {
        field: "Update",
        headerName: "",
        sortable: false,
        width: 100,
        renderCell: (_) => {
            return <Menu items={menuItems} />
        }
    },
];

const StyledGrid = styled(Grid)(({ theme }) => ({
    background: "linear-gradient(130.77deg, rgba(255, 255, 255, 0.16) 2.61%, rgba(255, 255, 255, 0.05) 94.4%)",
    borderRadius: theme.spacing(1.875),
    padding: theme.spacing(2)
}));

const index = () => {
    return (
        <StyledGrid container
            alignItems="center"
            justifyItems="center">
            <Grid item container
                alignItems="center"
                justifyContent="space-between">
                <Grid item>
                    <Typography variant="header2">
                        {CONNECTORS.HEADER}
                    </Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained">
                        <Typography variant="header3">
                            {CONNECTORS.NEW_CONNECTOR}
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
            <Grid item sx={{ width: "100%", height: "370px" }}>
                <Datagrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </Grid>
        </StyledGrid>
    )
}

export default index