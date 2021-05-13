import styled from 'styled-components'

export const Container = styled.main`

    background-image: url('https://webstatic-sea.mihoyo.com/upload/event/2021/04/26/5240df822111d47b26ec18c1b9697798_5206142220277644593.jpg');
    display: flex;
    flex-direction: column;
    width: 100vw;


    .titleGenshin {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 15%;
    }

    h1 {
        margin: 140px;
        color: #fff;
        font-size: 52pt;
        text-align: center;
    }

    h3 {
        font-size: 32pt;
        color: #fff;
    }

    .Zhongliarea {
        display: flex;
        flex-direction: row;
        margin-left: 100px;
        margin-right: 100px;
        max-width: 100%;
        align-items: center;
    }

    .Zhongliarea > article > p {
        font-size: 16pt;
        color: #fff;
        width: 360px;
        margin: 30px;
    }


    .Zhongliarea > figure > img {
        width: 130%;
    }

    .banner-image {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .banner-image > img {
        margin: 30px;
    }

    .gamechar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .gamechar-img1, .gamechar-img3 {
        width: 300px;
        height: 200;
        margin: 30px;
    }

    .social-media {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 13%;
        margin-bottom: 3%;
    }

    .social-media > .icon {
        margin: 30px;
    }


`
