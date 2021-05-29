import React from 'react';
import Navigation from '../../../multifunctional/Navigation/NavSceleton';
import ListItem from '../../../multifunctional/Navigation/NavListItem';

const HeaderNav = () => {
    return (
        <Navigation classList="main-navigation">
            <ListItem linkUrl="#page-top">Contact</ListItem>
            <ListItem linkUrl="#page-top">About</ListItem>
            <ListItem linkUrl="#page-top">Work</ListItem>
            <ListItem linkUrl="#hero">Home</ListItem>
        </Navigation>
    )
}

export default HeaderNav;
