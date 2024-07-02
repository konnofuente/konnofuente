import React from 'react';
import Hero from './Hero';
import ImageSlider from './ImageSlider';
function AboutPage() {
  return (
    <div className='gradient-background min-h-screen overflow-hidden'>
    <Hero></Hero>
    <ImageSlider></ImageSlider>
    </div>
  );
}

export default AboutPage;
