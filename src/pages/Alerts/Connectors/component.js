import { Button, Grid, Typography, useTheme } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Datagrid } from '../../../components/DataDisplay/Datagrid';
import { CONNECTORS, ALERT_RULES } from '../constants';
import { Menu } from '../../../components/Navigation/Menu';
import { Dialog } from '../../../components/Feedback/Dialog';
import { TypesList } from './TypesList';
import { Create } from './Create';
import SmsIcon from '@mui/icons-material/Sms';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { StyledGrid1,StyledGrid2} from './style';
import { saveConnector, fetchConnectors, getConnectors } from '../slice';

const Connectors = ({ isSelect = false, selectedRows, onSelectChange }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const connectors = useSelector(getConnectors);
    const [openNewConnector, setOpenNewConnector] = useState(false);
    const [openCreateConnector, setOpenCreateConnector] = useState(false);
    const [item, setItem] = useState(null);
    const [type, setType] = useState(null);
    const { enqueueSnackbar } = useSnackbar();

    const StyledGrid = isSelect ? StyledGrid1 : StyledGrid2;

    const handleSelect = (type) => {
        setType(type.title);
        setOpenNewConnector(false);
        setOpenCreateConnector(true);
    }

    const menuItems = [
        { recId: 1, name: ALERT_RULES.EDIT },
        { recId: 2, name: ALERT_RULES.DELETE }
    ]

    const columns = [
        {
            field: 'Name',
            headerName: CONNECTORS.FIELDS.NAME,
            width: isSelect ? '300' : '700',
            renderCell: (cellValues) => {
                const icon = cellValues.row.ConnectorType === CONNECTORS.EMAIL
                    ? <MailOutlineIcon sx={{ height: '30px', width: '30px' }} />
                    : <SmsIcon sx={{ height: '30px', width: '30px' }} />;
                return (
                    <Grid container
                        alignItems='center'
                        spacing={1}>
                        <Grid item>{icon}</Grid>
                        <Grid item>{cellValues.value}</Grid>
                    </Grid>
                );
            },
        },
        {
            field: 'ConnectorType',
            headerName: CONNECTORS.FIELDS.TYPE,
            width: isSelect ? '300' : '700'
        },
        !isSelect && (
            {
                field: 'Update',
                headerName: '',
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
        switch (type) {
            case ALERT_RULES.EDIT:
                setType(item.ConnectorType);
                setItem(item);
                setOpenCreateConnector(true);
                break;

            case ALERT_RULES.DELETE:
                dispatch(saveConnector({ connectorRecId: item.RecId, isDelete: '1' }));
                dispatch(fetchConnectors());
                enqueueSnackbar(CONNECTORS.LIST_DELETED, { variant: 'success' })
                break;

            default:
                break;
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
                alignItems='center'
                justifyItems='center'>
                {!isSelect && (
                    <Grid item container
                        alignItems='center'
                        justifyContent='space-between'>
                        <Grid item>
                            <Typography variant='header2'>
                                {CONNECTORS.HEADER}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' onClick={handleNewConnector}>
                                <Typography variant='header3'>
                                    {CONNECTORS.NEW_CONNECTOR}
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                )}
                {connectors && (
                    <Grid item sx={{ width: '100%', height: theme.spacing(46.25) }}>
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

export { Connectors };
