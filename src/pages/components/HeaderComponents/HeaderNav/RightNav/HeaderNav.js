import React from 'react';
import Navigation from '../../../multifunctional/Navigation/NavSceleton';
import ListItem from '../../../multifunctional/Navigation/MainNavListItem';

const HeaderNav = () => {
    return (
        <Navigation classList="main-navigation">
            <ListItem linkUrl="/contact">Contact</ListItem>
            <ListItem linkUrl="/about">About</ListItem>
            <ListItem exact={true} linkUrl="/">Work</ListItem>
        </Navigation>
    )
}

export default HeaderNav;
