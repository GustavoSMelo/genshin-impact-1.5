import React from 'react';
import { Container } from './style';

const Footer : React.FC = () => {
    return (
        <Container>
            <section>
                <img src='https://uploadstatic-sea.mihoyo.com/hk4e/upload/officialsites/202004/mihoyo_1586770772_9709.png' />
                <img src='https://uploadstatic-sea.mihoyo.com/hk4e/upload/officialsites/202004/GIEN_1587984203_6764.png' />
            </section>
            <article>
                <small>
                    | Politica de priva cidade
                    | Termo de privacidade
                    | Sobre nós
                    | Contate-nos
                </small>
                <p>Copyright © 2020 miHoYo All Rights Reserved</p>
                <small>"PlayStation Family Mark," "PS5 logo" and "PS4 logo" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.</small>
            </article>
        </Container>
    );
}

export default Footer
