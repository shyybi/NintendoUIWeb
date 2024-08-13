// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import pfp from '../assets/pfphxh.jpg';
import wifi from '../assets/wifi.png';
import batterie from '../assets/batterie-pleine.png';
import git from '../assets/github.png';
import twitter from '../assets/twitter.png';
import discord from '../assets/discorde.png';
import youtube from '../assets/youtube.png';
import parametres from '../assets/parametres.png';
import power from '../assets/puissance.png';
import mouse from '../assets/click-gauche.png';

function Home() {

  console.log("Salut, le site est pas fini, je le continuerais plus tard, je l'ai fais en une nuit, et comme j'ai pas beaucoup de temps en ce moment, je vais mettre un peu de temps... ")
  return (
    <div className='w-auto h-screen flex flex-col justify-between' id='lefond'>
      <header className='flex justify-between px-10 pt-5'>
        <img src={pfp} alt='Profile' className='w-24 h-24 rounded-full border-4 border-solid border-white hover:border-blue-400' />
        <div className='flex flex-row justify-around items-center space-x-9'>
          <a className='text-black font-bold text-4xl'>14:23</a>
          <img src={wifi} alt='Wifi' className='w-16 h-16' />
          <img src={batterie} alt='Batterie' className='w-16 h-16' />
        </div>
      </header>

      <div className='h-1/2 '>
        <div className='flex items-end sm:h-24 md:h-32 lg:h-40'>
          <p className='text-lg ml-4 sm:text-lg sm:ml md:text-lg md:ml-5 lg:text-2xl lg:text-bold lg:ml-10'>Somes of my projects :</p>
        </div>

        <div className='flex flex-row items-center h-3/4 justify-center space-x-5 ml'>
          {/*Projet 1*/}
          <Link to='https://github.com/gateaulune/smash-in-paris'>
            <div className='h-72 w-72 border-black hover:border-blue-400' id='box'>

            </div>
          </Link>
          <div className='h-72 w-72 border-black hover:border-blue-400' id='box'>

          </div>
          <div className='h-72 w-72 border-black hover:border-blue-400' id='box'>

          </div>
          <div className='h-72 w-72 border-black hover:border-blue-400' id='box'>

          </div>
          <div className='h-72 w-72 border-black hover:border-blue-400' id='box'>

          </div>
          <div className='h-60 w-60  border-black rounded-full' id='ball'>
            <div className='flex h-auto w-auto flex-col' id='space-box'>
              <div className='flex flex-row'>
                <div className='h-12 w-12 border-black' id='box-in'></div>
                <div className='h-12 w-12 ml-2 border-black' id='box-in'></div>
              </div>
              <div className='flex flex-row mt-2'>
                <div className='h-12 w-12 border-black' id='box-in'></div>
                <div className='h-12 w-12 border-black ml-2' id='box-in'></div>
              </div>
            </div>
          </div>
          {/*Projet 2*/}
          {/*Projet 3*/}
          {/*Plus link to git*/}
        </div>
      </div>
      {/*En gros; ici c'est le truc avec les reseaux sociaux, gl meuf, c'est chiant*/}
      <div className='mt-24'>
        <div className='flex flex-row justify-center space-x-8'>
          <div className='rounded-full border-4 border-solid border-white hover:border-blue-400'id='test'>
            <img src={git} alt='Github' className='w-20 h-20  filter invert ' />
          </div>
          <div className='rounded-full border-4 border-solid border-white hover:border-blue-400'id='test'>
            <img src={twitter} alt='Twitter' className='w-20 h-20 filter invert' />
          </div>
          <div className='rounded-full border-4 border-solid border-white hover:border-blue-400' id='test'>
            <img src={discord} alt='Discord' className='w-20 h-20 filter invert' />
          </div>
          <div className='rounded-full border-4 border-solid border-white hover:border-blue-400' id='test'>
            <img src={youtube} alt='Youtube' className='w-20 h-20 filter invert' />
          </div>
          <div className='rounded-full border-4 border-solid border-white hover:border-blue-400' >
            <img src={parametres} alt='Parametres' className='w-20 h-20 filter invert' />
          </div>
          <div className='rounded-full border-4 border-solid border-white hover:border-blue-400'> 
            <img src={power} alt='Power' className='w-20 h-20 filter invert' />
          </div>
        </div>
      </div>
      <div className='mt-24 w-full flex justify-center'>
        <hr className='w-11/12 border-t-2 border-black' />
      </div>
      <footer className='flex flex-row items-center justify-around h-full'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className='flex flex-row items-center'>
          <img src={mouse} alt='Mouse' className='w-12 h-12' />
          <p className='text-2xl'>OK</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;