// src/features/home/services/HomeService.ts

import { HomeModel } from '../models/HomeModel';

export const fetchHomeData = async (): Promise<HomeModel> => {
    // Replace with actual data fetching logic
    return {
        heroTitle: 'Welcome to My Portfolio',
        heroSubtitle: 'Discover my work and projects.',
        featuredProjects: ['Project 1', 'Project 2', 'Project 3']
    };
};
