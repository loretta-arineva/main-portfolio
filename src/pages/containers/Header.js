import React from 'react';
import Logo from '../components/multifunctional/Logo';
import ThemeColorSwitch from '../components/HeaderComponents/TopNav/ThemeColorSwitch';
import GameSwitch from '../components/HeaderComponents/TopNav/GameSwitch';

const Header = () => {
    return (
        // Website top header
        <header>
            <Logo />
            <ThemeColorSwitch />
            <GameSwitch />
        </header>
    )
}

export default Header;
