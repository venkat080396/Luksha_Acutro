import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import Select from '../../../components/Inputs/Select/Select';
import { ESCALATION_SETTINGS } from '../constants';

import {
    fetchAsyncDevices,
    fetchAsyncSites,
    fetchAsyncBuildings,
    fetchAsyncFloors,
    fetchAsyncDistributionList,
    getDistributionList,
    getAllDevices,
    getAllSites,
    getAllBuildings,
    getAllFloors,
    getSelectedSites,
    getSelectedBuilding,
    getSelectedFloor,
    getSelectedDevice,
    setSelectedSite,
    setSelectedBuilding,
    setSelectedFloor,
    setSelectedDevice
} from '../slice';


const EscalationSettings = () => {
    const dispatch = useDispatch();

    const [LevelFirst, setLevelFirst] = React.useState({});
    const [LevelSecound, setLevelSecound] = React.useState({});
    const [LevelThird, setLevelThird] = React.useState({});

    const buildings = useSelector(getAllBuildings);
    const floors = useSelector(getAllFloors);
    const site = useSelector(getAllSites);
    const device = useSelector(getAllDevices);
    const selectedSite = useSelector(getSelectedSites);
    const selectedBuilding = useSelector(getSelectedBuilding);
    const selectedFloor = useSelector(getSelectedFloor);
    const selectedDevice = useSelector(getSelectedDevice);
    const distributionList = useSelector(getDistributionList);

    React.useEffect(() => {
        dispatch(fetchAsyncSites());
        dispatch(fetchAsyncDistributionList());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const hendleChangeValue = (item, setFunction) => {
        setFunction(item);
    }

    const hendleChangeSite = (item) => {
        dispatch(setSelectedSite(item));
        dispatch(setSelectedBuilding({}));
        dispatch(setSelectedFloor({}));
        dispatch(setSelectedDevice({}));
        dispatch(fetchAsyncBuildings(`${item.RecId}`));
    };

    const hendleChangeBuilding = (item) => {
        dispatch(setSelectedBuilding(item));
        dispatch(setSelectedFloor({}));
        dispatch(setSelectedDevice({}));
        dispatch(fetchAsyncFloors(item));
    };

    const hendleChangeFloor = (item) => {
        dispatch(setSelectedFloor(item));
        dispatch(setSelectedDevice({}));
        dispatch(fetchAsyncDevices({ ...item, SiteRecId: selectedSite.RecId }));
    };

    const hendleChangeDevice = (item) => {
        dispatch(setSelectedDevice(item));
    };

    const handleSave = () => {
        const sumbitObject = {}
        sumbitObject.site = selectedSite;
        sumbitObject.building = selectedBuilding;
        sumbitObject.floor = selectedFloor;
        sumbitObject.device = selectedDevice;
        sumbitObject.level1 = LevelFirst;
        sumbitObject.level2 = LevelSecound;
        sumbitObject.level3 = LevelThird;
        dispatch(setSelectedSite({}));
        dispatch(setSelectedBuilding({}));
        dispatch(setSelectedFloor({}));
        dispatch(setSelectedDevice({}));
        setLevelFirst({})
        setLevelSecound({})
        setLevelThird({})
    };

    return (
        <Box padding={4}>
            <Grid container spacing={4} alignItems='flex-start'>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid container alignItems='center' spacing={2}>
                        <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                            <Typography>
                                {ESCALATION_SETTINGS.SITE}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={10} lg={10} xl={10}>
                            <Select
                                value={selectedSite}
                                onSelectChange={(item) => hendleChangeSite(item)}
                                props={{ size: 'small' }}
                                items={site}
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                            <Typography>
                                {ESCALATION_SETTINGS.BUILDING}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={10} lg={10} xl={10}>
                            <Select
                                value={selectedBuilding}
                                onSelectChange={(item) => hendleChangeBuilding(item)}
                                props={{ size: 'small' }}
                                items={buildings}
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                            <Typography>
                                {ESCALATION_SETTINGS.FLOOR}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={10} lg={10} xl={10}>
                            <Select
                                value={selectedFloor}
                                onSelectChange={(item) => hendleChangeFloor(item)}
                                props={{ size: 'small' }}
                                items={floors}
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                            <Typography>
                                {ESCALATION_SETTINGS.DEVICES}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={10} lg={10} xl={10}>
                            <Select
                                value={selectedDevice}
                                onSelectChange={(item) => hendleChangeDevice(item)}
                                props={{ size: 'small' }}
                                items={device}
                                fullWidth={true}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid container alignItems='center' spacing={2}>
                        <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                            <Typography>
                                {ESCALATION_SETTINGS.LEVEL1}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={10} lg={10} xl={10}>
                            <Select
                                value={LevelFirst}
                                onSelectChange={(item) =>
                                    hendleChangeValue(item, setLevelFirst)
                                }
                                props={{ size: 'small' }}
                                items={distributionList}
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                            <Typography>
                                {ESCALATION_SETTINGS.LEVEL2}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={10} lg={10} xl={10}>
                            <Select
                                value={LevelSecound}
                                onSelectChange={(item) =>
                                    hendleChangeValue(item, setLevelSecound)
                                }
                                props={{ size: 'small' }}
                                items={distributionList}
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} md={2} lg={2} xl={2}>
                            <Typography>
                                {ESCALATION_SETTINGS.LEVEL3}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6} md={10} lg={10} xl={10}>
                            <Select
                                value={LevelThird}
                                onSelectChange={(item) =>
                                    hendleChangeValue(item, setLevelThird)
                                }
                                props={{ size: 'small' }}
                                items={distributionList}
                                fullWidth={true}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Grid container alignItems='center' flexDirection='row-reverse'>
                                <Grid item>
                                    <Button variant='contained' onClick={handleSave}>
                                        <Typography>
                                            {ESCALATION_SETTINGS.SAVE}
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export { EscalationSettings };