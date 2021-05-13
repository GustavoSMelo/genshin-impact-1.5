import React from 'react'
import { Container } from './style'

const Navbar : React.FC = () => {

    return (
        <Container>
            <figure>
                <img src='https://webstatic-sea.mihoyo.com/upload/event/2021/04/26/8f24c8d7943fc7458e697f17222049b7_6575460200176944626.png' alt='genshin-logo'/>
            </figure>

            <nav>
                <button type='button'>Site oficial</button>
                <button type='button'>Baixar</button>
            </nav>
        </Container>
    );

}

export default Navbar;
