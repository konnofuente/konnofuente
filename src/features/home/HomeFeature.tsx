// src/features/home/HomeFeature.ts

import React from 'react';
import HomePage from './components/HomePage';
import { useHome } from './hooks/useHome';

const HomeFeature: React.FC = () => {
    const { homeData } = useHome();

    // return homeData ? <HomePage /> : <div>Loading...</div>;
    return <HomePage /> ;
};

export default HomeFeature;
