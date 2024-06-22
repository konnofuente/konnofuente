
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import HomeFeature from '../features/home/HomeFeature';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<HomeFeature />} />
                    <Route path="home" element={<HomeFeature />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
