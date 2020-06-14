import React from 'react';

//Defininco propriedades
interface HeaderProps {
    title: string;
    //title?: string; Se colocar o interrogação ele fica opcional.
}

// sem definição de propriedades seria somente uma função simples.
// Com definição de propriedades
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}
export default Header;