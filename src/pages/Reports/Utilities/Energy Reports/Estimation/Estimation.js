import { Grid, styled } from '@mui/material'
import React from 'react'
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';

const GridItemHeader = styled('Grid')({
    color: '#999999',
    fontSize: 13
});

const GreenGridItemContent = styled('Grid')({
    color: '#50ff40'
});

const RedGridItemContent = styled('Grid')({
    color: '#ff0000'
});

const RedGridItemSubContent = styled('Grid')({
    color: '#9b0000',
    fontSize: 10
});

const GreenGridItemSubContent = styled('Grid')({
    color: '#76BA1B',
    fontSize: 10
});

const Estimation = (props) => {
    const { title, weekdaysContent, weekendContent, type } = props
    return (
        <Grid container
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}>
            <Grid item>
                {title}
            </Grid>
            <Grid item>
                <Grid container
                    direction="row"
                    alignItems="center"
                    justifyContent="space-evenly"
                    sx={{ width: "25vw" }}>
                    <Grid item>
                        <Grid container
                            direction="column"
                            alignItems="center">
                            <GridItemHeader item>
                                Weekdays
                            </GridItemHeader>
                            <RedGridItemContent item>
                                <Grid container
                                    direction="row"
                                    alignItems="flex-start">
                                    <Grid item>{title && title === "Estimated Cost" && (<CurrencyPoundIcon fontSize="10px" />)}</Grid>
                                    <Grid item>{weekdaysContent}</Grid>
                                </Grid>
                            </RedGridItemContent>
                            {title && title === "Estimated Usage" && (
                                <RedGridItemSubContent item>
                                    {type && type === "Water" ? "Ltrs" : "KWh"}
                                </RedGridItemSubContent>)
                            }
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container
                            direction="column"
                            alignItems="center">
                            <GridItemHeader item>
                                Weekend
                            </GridItemHeader>
                            <GreenGridItemContent item>
                                <Grid container
                                    direction="row"
                                    alignItems="flex-start">
                                    <Grid item>{title && title === "Estimated Cost" && (<CurrencyPoundIcon fontSize="10px" />)}</Grid>
                                    <Grid item>{weekendContent}</Grid>
                                </Grid>
                            </GreenGridItemContent>
                            {title && title === "Estimated Usage" && (
                                <GreenGridItemSubContent item>
                                    {type && type === "Water" ? "Ltrs" : "KWh"}
                                </GreenGridItemSubContent>)
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Estimation