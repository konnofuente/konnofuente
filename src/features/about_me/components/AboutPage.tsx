import React from 'react';
import Hero from './Hero';
import ImageSlider from './ImageSlider';
import Title from '../../../shared/components/Title';
import SectionDaily from './SectionDaily';
function AboutPage() {
  return (
    <div className='gradient-background min-h-screen overflow-hidden'>
    <Hero></Hero>
    <ImageSlider></ImageSlider>
    <Title  size={'large'}> Let Me Take You Through My Day</Title>
    <SectionDaily></SectionDaily>
    </div>
  );
}

export default AboutPage;
