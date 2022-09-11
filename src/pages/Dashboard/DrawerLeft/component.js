import React from 'react'
import { Header } from '../../../components/Navigation/Drawer/Header'
import NestedList from '../../../components/Inputs/NestedList/NestedList';
import { StyledDrawer } from './style';

const DrawerLeft = (props) => {
    const { open, leftOpen, leftClose } = props

    return (
        <StyledDrawer
            variant='permanent'
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: 'transparent',
                    color: 'white'
                },
            }}
            onMouseEnter={leftOpen}
            onMouseLeave={leftClose}
        >
            <Header {...props} />
            <NestedList {...props} />
        </StyledDrawer>
    )
}

export { DrawerLeft }