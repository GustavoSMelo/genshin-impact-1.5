import styled from 'styled-components'

export const Container = styled.footer`

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    background-color: #000;
    padding: 100px;

    section {
        display: flex;
    }

    section > img {
        margin-left: 30px;
    }

    p {
        color: #fff;
        font-size: 16pt;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    small {
        color: #707070;
        font-size: 14pt;
    }

`
