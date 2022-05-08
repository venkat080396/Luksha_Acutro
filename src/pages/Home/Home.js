import React, { useEffect } from 'react'
import { Grid, Box } from '@mui/material'
import ImageCard from "../../components/layout/ImageCard/ImageCard"
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncBuildings, getAllBuildings } from '../../features/Home/homeSlice';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncBuildings());
    }, [dispatch]);

    const buildings = useSelector(getAllBuildings);
    return (
        <>
            {buildings && buildings.map((building) => (
                <ImageCard
                    data={building}
                // data={
                //     props.dashbordDate.data.length === 0
                //         ? {}
                //         : props.dashbordDate.data[props.dashbordDate.selectedBuilding]
                // }
                />
            ))}
            <Box mt={4}></Box>
            <Grid container spacing={2}>
                <Grid item md={7} lg={7} xl={7}>
                    <Grid container spacing={2}>
                        <Grid item md={12} sm={12} lg={12}>

                        </Grid>
                        <Grid item md={12} sm={12} lg={12}>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={5} lg={5} xl={5}>
                    <Grid container spacing={2}>
                        <Grid item sm={12} md={12} lg={12}>

                        </Grid>
                        <Grid item sm={12} md={12} lg={12}>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={12} lg={12}>
                    <Grid container spacing={2} component={Box} mt={4}>
                        <Grid item md={6} lg={6}>

                        </Grid>
                        <Grid item md={6} lg={6}></Grid>
                    </Grid>
                </Grid>
                <Grid item md={12} lg={12}>
                    <Grid container spacing={2} component={Box} mt={4}>
                        <Grid item md={5} lg={5}>

                        </Grid>
                        <Grid item md={7} lg={7}>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Home