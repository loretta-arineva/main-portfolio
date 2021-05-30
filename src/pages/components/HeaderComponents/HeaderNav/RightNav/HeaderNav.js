import React from 'react';
import Navigation from '../../../multifunctional/Navigation/NavSceleton';
import ListItem from '../../../multifunctional/Navigation/NavListItem';

const HeaderNav = () => {
    return (
        <Navigation classList="main-navigation">
            <ListItem linkUrl="/contact">Contact</ListItem>
            <ListItem linkUrl="/about">About</ListItem>
            <ListItem linkUrl="/">Work</ListItem>
            <ListItem linkUrl="/">Home</ListItem>
        </Navigation>
    )
}

export default HeaderNav;
