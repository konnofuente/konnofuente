// src/features/home/hooks/useHome.ts

import { useState, useEffect } from 'react';
import { HomeModel } from '../models/HomeModel';
import { fetchHomeData } from '../services/HomeService';


export const useHome = () => {
    const [homeData, setHomeData] = useState<HomeModel | null>(null);

    useEffect(() => {
        fetchHomeData().then(data => setHomeData(data));
    }, []);

    return { homeData };
};
