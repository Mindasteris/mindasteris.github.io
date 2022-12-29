import React from 'react'
import gaminghubHome from '../img/projects/gaminghub-home.png'
import gaminghubServices from '../img/projects/gaminghub-services.png'
import gaminghubCotact from '../img/projects/gaminghub-contact.png'
import laravelltsiteHome from '../img/projects/laravel-ltsite-home.png'
import laravelltsiteLogin from '../img/projects/laravel-ltsite-login.png'
import laravelltsiteRegister from '../img/projects/laravel-ltsite-register.png'
import laravelxboxHome from '../img/projects/laravel-xbox-home.png'
import laravelxboxCotact from '../img/projects/laravel-xbox-contact.png'
import laravelxboxLogin from '../img/projects/laravel-xbox-login.png'
import laravelxboxRegister from '../img/projects/laravel-xbox-register.png'
import laravelpsHome from '../img/projects/laravel-ps-home.png'
import laravelpsAbout from '../img/projects/laravel-ps-about.png'
import laravelpsContact from '../img/projects/laravel-ps-contact.png'
import laravelcrashHome from '../img/projects/laravel-crash-home.png'
import laravelcrashEvo from '../img/projects/laravel-crash-evo.png'
import laravelcrashContact from '../img/projects/laravel-crash-contact.png'
import laravelspyroHome from '../img/projects/spyro-home.png'
import laravelspyroGallery from '../img/projects/spyro-gallery.png'
import laravelspyroOrigins from '../img/projects/spyro-origins.png'

const Projects = () => {
  return (
    <div className='container mx-auto text-center my-20'>
        <h1>Projects</h1>
        
        <div>
          <div className='projects space-y-10 flex flex-col justify-center items-center'>
          <h2>Gaming Hub Laravel</h2>
            <div className='space-y-8 p-4'>
              <img src={gaminghubHome} alt="gaminghub-home" />
              <img src={gaminghubServices} alt="gaminghub-services" />
              <img src={gaminghubCotact} alt="gaminghub-contact" />
            </div>
            <h2>Site about Gaming Laravel</h2>
           <div className='space-y-8 p-4'>
              <img src={laravelltsiteHome} alt="laravelltsite-home" />
              <img src={laravelltsiteLogin} alt="laravelltsite-home" />
              <img src={laravelltsiteRegister} alt="laravelltsite-home" />
           </div>
           <h2>Site about Xbox Laravel</h2>
            <div className='space-y-8 p-4'>
              <img src={laravelxboxHome} alt="laravelltsite-home" />
              <img src={laravelxboxCotact} alt="laravelltsite-home" />
              <img src={laravelxboxLogin} alt="laravelltsite-home" />
              <img src={laravelxboxRegister} alt="laravelltsite-home" />
            </div>
            <h2>Site about Playstation Laravel</h2>
            <div className='space-y-8 p-4'>
              <img src={laravelpsHome} alt="laravelltsite-home" />
              <img src={laravelpsAbout} alt="laravelltsite-home" />
              <img src={laravelpsContact} alt="laravelltsite-home" />
            </div>
            <h2>Site about Crash Bandicoot Laravel</h2>
            <div className='space-y-8 p-4'>
              <img src={laravelcrashHome} alt="laravelltsite-home" />
              <img src={laravelcrashEvo} alt="laravelltsite-home" />
              <img src={laravelcrashContact} alt="laravelltsite-home" />
            </div>
            <h2>Site about Spyro The Dragon</h2>
            <div className='space-y-8 p-4'>
              <img src={laravelspyroHome} alt="laravelltsite-home" />
              <img src={laravelspyroGallery} alt="laravelltsite-home" />
              <img src={laravelspyroOrigins} alt="laravelltsite-home" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects