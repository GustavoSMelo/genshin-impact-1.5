import React from 'react';
import { Global } from './style/global.style'
import { Container } from './style/style'
import Navbar from './components/navbar/'
import zhongli from './assets/img/zhongli.png'
import { FaDiscord, FaTwitter, FaYoutube, FaFacebook, FaInstagram, FaReddit } from 'react-icons/fa'
import Footer from './components/footer'

function App() {
  return (
    <>
        <Container>
            <Navbar />
            <figure className='titleGenshin'>
                <img src='https://webstatic-sea.mihoyo.com/upload/event/2021/04/26/ff34a03a8149398744c7862c8d3f2877_3782891923339317189.png' alt='title genshin' />
            </figure>
            <h1>Informações dos Personagens</h1>
            <section className='Zhongliarea'>
                <article>
                    <img src='https://webstatic-sea.mihoyo.com/upload/event/2021/04/26/5be8db38ddbe26339f71507705c864c2_3857935096974740941.png' alt='zhongli name' />
                    <p>Um convidado misterioso da Funerária Wangsheng. Sabe de muita coisa.</p>
                    <img src='https://webstatic-sea.mihoyo.com/upload/event/2021/04/26/4f7b3c64b637b7d5dc48c4b47434516a_1009022277416353972.png' alt='video zhongli' />
                    <h3>Ver mais</h3>
                </article>
                <figure>
                    <img src={zhongli} alt='Zhongli image' />
                </figure>
            </section>
            <h1>Informações da Versão</h1>
            <section className='banner-image'>
                <img src='https://webstatic-sea.mihoyo.com/upload/event/2021/04/26/a1c619a43025e7827a202882494acf0f_7512726991278663177.png' alt='banner1' />

                <img src='https://webstatic-sea.mihoyo.com/upload/event/2021/04/28/48de4129fcdbc10216758142abc23ef0_2145768536997053880.png' alt='banner1' />

                <img src='https://webstatic-sea.mihoyo.com/upload/event/2021/04/26/4649f0ae0effa7525b786da7efc97ce3_1862774103709292308.png' alt='banner1' />
            </section>
            <h1>Caracteristicas do Jogo</h1>
            <section className='gamechar'>

                <img src='https://webstatic-sea.mihoyo.com/upload/event/2021/04/27/8919d4dd2674efd64b5c718fcc1277e9_6607774230518844880.jpg' alt='img1' className='gamechar-img1' />

                <img src='https://webstatic-sea.mihoyo.com/upload/event/2021/02/02/a526d01ff93921341508fcbb1c8a4902_2486225860840602829.png' alt='img2' className='gamechar-img2' />

                <img src='https://webstatic-sea.mihoyo.com/upload/event/2021/04/27/3f5c9fb420b737b91f04d276f2cf313f_962357432687654924.jpg' alt='img3' className='gamechar-img3' />

            </section>
            <section className='social-media'>
                <FaDiscord className='icon' color='F0793D' fontSize={64}/>
                <FaTwitter className='icon' color='F0793D' fontSize={64}/>
                <FaInstagram className='icon' color='F0793D' fontSize={64}/>
                <FaYoutube className='icon' color='F0793D' fontSize={64}/>
                <FaReddit className='icon' color='F0793D' fontSize={64}/>
                <FaFacebook className='icon' color='F0793D' fontSize={64}/>
            </section>
        </Container>
        <Footer />
        <Global />
    </>

  );
}

export default App;
