import React from 'react';
import Item from './Item';
import 'styles/components/header.sass'

const Header = () => {
    return (
        <header className='header'>
            <ul>
                <Item link={"/"}>Início</Item>
                <Item link={"/sobremim"}>Sobre mim</Item>
            </ul>
        </header>
    )

} 

export default Header;
