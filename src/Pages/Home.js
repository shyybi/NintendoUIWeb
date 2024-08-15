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
    <div className='w-screen min-h-screen sm:max-h-full sm:min-h-screen md:max-h-full md:min-h-screen lg:max-h-full lg:min-h-screen lg:w-screen flex flex-col justify-between' id='lefond'>
      <header className='flex justify-between px-4 pt-5 md:px-10 mt-5 lg:mt-0'>
        <img src={pfp} alt='Profile' className='w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-solid border-white hover:border-blue-400' />
        <div className='flex flex-row justify-around items-center space-x-4 md:space-x-9'>
          <p className='text-black font-bold text-2xl md:text-4xl'>14:23</p>
          <img src={wifi} alt='Wifi' className='w-8 h-8 md:w-16 md:h-16' />
          <img src={batterie} alt='Batterie' className='w-8 h-8 md:w-16 md:h-16' />
        </div>
      </header>

      <div className='flex-grow'>
        <div className='flex items-end h-16 md:h-24 lg:h-32 mt-16 lg:mt-0 '>
          <p className='text-xl ml-2 md:text-2xl md:ml-5 lg:text-2xl lg:ml-10'>Somes of my projects :</p>
        </div>
{/* ------------------------------------------------------------------------------------------------------------------------- */ }

        <div className='flex flex-wrap items-center justify-center mt-28 md:mt-24 lg:mt-8'>
          {/*Projet 1*/}
          <Link to='https://github.com/gateaulune/smash-in-paris'>
            <div className='h-36 w-36 md:h-48 md:w-48 lg:h-72 lg:w-72 lg:mr-4 md:mr-5 sm:mr-2 mr-2 border-black hover:border-blue-400 lg:block md:block ' id='box'>
            </div>
          </Link>

          <div className='h-36 w-36 md:h-48 md:w-48 lg:h-72 lg:w-72 lg:mr-4 md:mr-5 sm:mr-2 mr-2 border-black hover:border-blue-400 hidden md:block' id='box'>
          </div>

          <div className='h-36 w-36 md:h-48 md:w-48 lg:h-72 lg:w-72 lg:mr-4 md:mr-5 sm:mr-2 mr-2 border-black hover:border-blue-400 hidden md:block' id='box'>
          </div>

          <div className='h-36 w-36 md:h-48 md:w-48 lg:h-72 lg:w-72 lg:mr-4 md:mr-5 sm:mr-2 mr-2 border-black hover:border-blue-400  hidden lg:block  md:hidden ' id='box'>
          </div>

          <div className='h-36 w-36 md:h-48 md:w-48 lg:h-72 lg:w-72 lg:mr-4 md:mr-5 sm:mr-2 mr-2 border-black hover:border-blue-400 hidden lg:block md:hidden ' id='box'>
          </div>

          {/* Start Of Circle */}
          <div className='h-30 w-30 md:h-40 md:w-40 lg:h-60 lg:w-60 border-black rounded-full' id='ball'>
            <div className='flex flex-col' id='space-box'>
              <div className='flex flex-row'>
                <div className='h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 border-black' id='box-in'></div>
                <div className='h-6 w-6 ml-1 md:h-8 md:w-8 md:ml-2 lg:h-12 lg:w-12 lg:ml-2 border-black' id='box-in'></div>
              </div>
              <div className='flex flex-row mt-1 md:mt-2'>
                <div className='h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 border-black' id='box-in'></div>
                <div className='h-6 w-6 ml-1 md:h-8 md:w-8 md:ml-2 lg:h-12 lg:w-12 lg:ml-2 border-black' id='box-in'></div>
              </div>
            </div>
          </div>
          {/* End Of Circle */}
        </div>
      </div>

{/* ------------------------------------------------------------------------------------------------------------------------- */ }

      <div className='mt-10 md:mt-14'>
        <div className='flex flex-wrap justify-center space-x-3 lg:space-x-4 md:space-x-8  '>
          <div className='rounded-full border-4 border-solid border-white hover:border-blue-400 ' id='test'>
            <img src={git} alt='Github' className='w-10 h-10  md:w-20 md:h-20 filter invert' />
          </div>
          <div className='rounded-full border-4 border-solid border-white hover:border-blue-400' id='test'>
            <img src={twitter} alt='Twitter' className='w-10 h-10 md:w-20 md:h-20 filter invert' />
          </div>
          <div className='rounded-full border-4 border-solid border-white hover:border-blue-400 bg-white' id='test'>
            <img src={discord} alt='Discord' className='w-10 h-10 md:w-20 md:h-20 filter invert' />
          </div>
          <div className='rounded-full border-4 border-solid border-white hover:border-blue-400 bg-white' id='test'>
            <img src={youtube} alt='Youtube' className='w-10 h-10 md:w-20 md:h-20 filter invert    border-black rounded-full' />
          </div>

          <div className='rounded-full border-4 border-solid border-white hover:border-blue-400 bg-white'>
            <img src={parametres} alt='Parametres' className='w-10 h-10 md:w-20 md:h-20 filter invert' id='button'/>
          </div>
          <div className='rounded-full border-4 border-solid border-white hover:border-blue-400 bg-white'>
            <img src={power} alt='Power' className='w-10 h-10 md:w-20 md:h-20  ' id='button'/>
          </div>
        </div>
      </div>

      <div className='mt-10 md:mt-14 w-full flex justify-center'>
        <hr className='w-11/12 border-t-2 border-black' />
      </div>

      <footer className='flex flex-row h-24 md:h-32 items-center justify-center md:justify-end md:mr-14 lg:justify-end lg:mr-32'>
        <img src={mouse} alt='Mouse' className='w-8 h-8 md:w-12 md:h-12' />
        <p className='text-lg md:text-2xl'>OK</p>
      </footer>
    </div>
  );
}

export default Home;