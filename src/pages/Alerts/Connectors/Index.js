import { Button, Grid, Typography, useTheme } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { styled } from '@mui/system';
import Datagrid from "../../../components/datagrid/Datagrid";
import { CONNECTORS } from "../constants";
import Menu from '../../../components/layout/Menu/Menu';
import Dialog from "../../../components/dialog/Dialog";
import TypesList from './TypesList/TypesList';
import Create from './Create/Create';
import SmsIcon from '@mui/icons-material/Sms';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from 'notistack';
import { saveConnector, fetchConnectors, getConnectors } from "../../../features/Alerts/AlertsSlice";

const Index = ({ isSelect = false, selectedRows, onSelectChange }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const connectors = useSelector(getConnectors);
    const [openNewConnector, setOpenNewConnector] = useState(false);
    const [openCreateConnector, setOpenCreateConnector] = useState(false);
    const [item, setItem] = useState(null);
    const [type, setType] = useState(null);
    const { enqueueSnackbar } = useSnackbar();

    const StyledGrid = isSelect ? (styled(Grid)(({ theme }) => ({
        padding: theme.spacing(2)
    }))) : (styled(Grid)(({ theme }) => ({
        background: "rgba(255,255,255,0.05)",
        borderRadius: theme.spacing(1.875),
        border: '0.05em solid rgba(255,255,255,0.3)',
        padding: theme.spacing(2)
    })));

    const handleSelect = (type) => {
        setType(type.title);
        setOpenNewConnector(false);
        setOpenCreateConnector(true);
    }

    const menuItems = [
        { recId: 1, name: "Edit" },
        { recId: 2, name: "Delete" }
    ]

    const columns = [
        {
            field: "Name",
            headerName: "Name",
            width: isSelect ? "300" : "700",
            renderCell: (cellValues) => {
                const icon = cellValues.row.ConnectorType === CONNECTORS.EMAIL
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
            field: "ConnectorType",
            headerName: "Type",
            width: isSelect ? "300" : "700"
        },
        !isSelect && (
            {
                field: "Update",
                headerName: "",
                sortable: false,
                width: 100,
                renderCell: (cellValues) => {
                    return <Menu onClick={(type) => handleMenuClick(type, cellValues.row)} items={menuItems} />
                }
            })
    ];

    const handleSelectionChange = (rowIds) => {
        const rows = connectors.filter(row => rowIds.includes(row.RecId))
        onSelectChange(rows)
    }

    const handleMenuClick = (type, item) => {
        if (type === "Edit") {
            setType(item.ConnectorType);
            setItem(item);
            setOpenCreateConnector(true);
        }
        else {
            dispatch(saveConnector({ connectorRecId: item.RecId, isDelete: "1" }));
            dispatch(fetchConnectors());
            enqueueSnackbar(CONNECTORS.LIST_DELETED, { variant: 'success' })
        }
    }

    const handleNewConnector = () => {
        setOpenNewConnector(true);
        setItem(null);
    }

    const handleSaveConnector = (connectorRecId, type, name, recipients) => {
        dispatch(saveConnector({ connectorRecId: connectorRecId, type: type, connectorName: name, recipients: recipients }));
        dispatch(fetchConnectors());
    }

    useEffect(() => {
        dispatch(fetchConnectors());
    }, [dispatch])

    return (
        <>
            <StyledGrid container
                alignItems="center"
                justifyItems="center">
                {!isSelect && (
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
                )}
                {connectors && (
                    <Grid item sx={{ width: "100%", height: theme.spacing(46.25) }}>
                        <Datagrid
                            rows={connectors}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            isCheckboxGrid={isSelect}
                            selectionModel={selectedRows}
                            onSelectionChange={handleSelectionChange}
                        />
                    </Grid>
                )}
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
                content={<Create item={item} type={type} onSave={handleSaveConnector} onCancel={() => setOpenCreateConnector(false)} />}
                handleClose={() => setOpenCreateConnector(false)}
                height={theme.spacing(41)}
                width={theme.spacing(65)}
            />
        </>
    )
}

export default Index;
