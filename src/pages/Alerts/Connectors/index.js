import { Button, Grid, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/system';
import Datagrid from "../../../components/datagrid/Datagrid";
import { CONNECTORS } from "../constants";
import Menu from '../../../components/layout/Menu/Menu';
import Dialog from "../../../components/dialog/Dialog";
import TypesList from './TypesList/TypesList';
import Create from './Create/Create';
import SmsIcon from '@mui/icons-material/Sms';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

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



const StyledGrid = styled(Grid)(({ theme }) => ({
    background: "linear-gradient(130.77deg, rgba(255, 255, 255, 0.16) 2.61%, rgba(255, 255, 255, 0.05) 94.4%)",
    borderRadius: theme.spacing(1.875),
    padding: theme.spacing(2)
}));

const Index = () => {
    const theme = useTheme();
    const [openNewConnector, setOpenNewConnector] = useState(false);
    const [openCreateConnector, setOpenCreateConnector] = useState(false);
    const [item, setItem] = useState(null);
    const [type, setType] = useState(null);

    const handleSelect = (type) => {
        setType(type.title);
        setOpenNewConnector(false);
        setOpenCreateConnector(true);
    }

    const rows = [
        { RecId: 1, name: "Test Email list", type: "Email list" },
        { RecId: 2, name: "Demo SMS list", type: "SMS list" },
        { RecId: 3, name: "Test Group SMS list", type: "SMS list" },
        { RecId: 4, name: "Demo Email list", type: "Email list" },
        { RecId: 5, name: "Test Email list", type: "Email list" },
        { RecId: 6, name: "Test SMS list", type: "SMS list" },
    ];

    const menuItems = [
        { recId: 1, name: "Edit" },
        { recId: 2, name: "Delete" }
    ]

    const columns = [
        {
            field: "name",
            headerName: "Name",
            width: "600",
            renderCell: (cellValues) => {
                const icon = cellValues.row.type === CONNECTORS.EMAIL_LIST
                    ? <MailOutlineIcon sx={{ height: "30px", width: "30px" }} />
                    : <SmsIcon sx={{ height: "30px", width: "30px" }} />;
                return (
                    <Grid container
                        alignItems="center"
                        spacing={1}>
                        <Grid item>{icon}</Grid>
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
            renderCell: (cellValues) => {
                return <Menu onClick={(type) => handleMenuClick(type, cellValues.row)} items={menuItems} />
            }
        },
    ];

    const handleMenuClick = (type, item) => {
        if (type === "Edit") {
            setType(item.type);
            setItem(item);
            setOpenCreateConnector(true)
        }
    }

    const handleNewConnector = () => {
        setOpenNewConnector(true);
        setItem(null);
    }

    return (
        <>
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
                        <Button variant="contained" onClick={handleNewConnector}>
                            <Typography variant="header3">
                                {CONNECTORS.NEW_CONNECTOR}
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Grid item sx={{ width: "100%", height: theme.spacing(46.25) }}>
                    <Datagrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                </Grid>
            </StyledGrid>
            <Dialog
                open={openNewConnector}
                content={<TypesList onSelect={handleSelect} onCancel={() => setOpenNewConnector(false)} />}
                handleClose={() => setOpenNewConnector(false)}
                height={theme.spacing(62.5)}
                width={theme.spacing(75)}
            />
            <Dialog
                open={openCreateConnector}
                content={<Create item={item} type={type} onCancel={() => setOpenCreateConnector(false)} />}
                handleClose={() => setOpenCreateConnector(false)}
                height={theme.spacing(41)}
                width={theme.spacing(65)}
            />
        </>
    )
}

export default Index;