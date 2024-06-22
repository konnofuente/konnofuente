import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import { APP_ROUTE_PATH } from './app_route_path';

const HomeFeature = lazy(() => import('../features/home/HomeFeature'));
const AboutFeature = lazy(() => import('../features/about_me/AboutFeature'));


export const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { index: true, element: <HomeFeature /> },
      { path: APP_ROUTE_PATH.home, element: <HomeFeature /> },
      { path: APP_ROUTE_PATH.about, element: <AboutFeature /> },
    ],
  },
];
