import React from 'react'
import { images } from '../../constants'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt='g letter'/>
      </div>

      <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>Samerkviladzeo is modern georgian restaurant based on georgian traditional recepies passd trough centuries. our main dishes are core of old imeretian culture. Main goal of every samerkviladzeo restaruant is to fill our costumers with love, hospitality and delicios food of our roots. we have lots of branches around the world, but most popular ones are located in Zestafoni, Georgia; Nyc, US; Tokyo, Japan and Uganda, Africa. </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife"/>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>Our story was never apart from coocking just like our culture. our first restaurant was founded on march 13nth, 1871 and since then was an important part of Merkviladze family dinasty. Its founder was father of the great public hero Afrasion Merkviladze who was bravely fighting against russian ocupants. at his free time afrasion was activly working on improving his fathers restaurant and managed to move it outside of Zestafoni by keeping its undeniable glory </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>


      </div>
    </div>
  )
}

export default AboutUs