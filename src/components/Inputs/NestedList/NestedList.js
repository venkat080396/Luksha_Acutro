import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Collapse, Box, List } from '@mui/material';
import ListItemButton from './ListItemButton/ListItemButton';
import { getAllLeftDrawerItems } from '../../../pages/Dashboard/slice';

const NestedList = (props) => {
    const leftDrawerItems = useSelector(getAllLeftDrawerItems);
    const [listItemOpen, SetListItemOpen] = useState({});

    return (
        <List>
            {leftDrawerItems && leftDrawerItems.list.map((list, index) => {
                return (
                    <>
                        <ListItemButton
                            key={index}
                            text={list.name}
                            listItemOpen={listItemOpen}
                            SetListItemOpen={SetListItemOpen}
                            {...props} />
                        <Collapse in={listItemOpen[list.name]}>
                            <List disablePadding component={Box} style={{ paddingLeft: 40 }}>
                                {list.items && list.items.map((item) => {
                                    return (
                                        <ListItemButton
                                            key={item.id}
                                            text={item.name}
                                            {...props} />
                                    )
                                })
                                }
                            </List>
                        </Collapse>
                    </>
                )
            })}
        </List>
    )
}

export default NestedList