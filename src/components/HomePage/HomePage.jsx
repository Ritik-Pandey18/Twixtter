import { Grid } from '@mui/material';
import React from 'react';
import Navigation from '../Navigation/Navigation';
import HomeSection from '../HomeSection/HomeSection';
import RightPart from '../RightPart/RightPart';
import Profile from '../Profile/Profile';
import { Routes, Route } from 'react-router-dom';
import TweetDetails from '../TweetDetails/TweetDetails';
const HomePage = () => {
    return (
        <Grid container className=" justify-between">
            {/* Navigation Panel */}
            <Grid
                item
                xs={0}
                lg={2.5}
                className="hidden lg:block w-full relative bg-gray-100"
            >
                <Navigation />
            </Grid>

            {/* Home Section */}
            <Grid
                item
                xs={12}
                lg={8}
                className="w-full relative p-4 bg-white border-b lg:border-none"
            >
                <Routes>
                    <Route path="/" element={<HomeSection />} ></Route>
                    <Route path="/home" element={<HomeSection />} ></Route>
                    <Route path="/profile/:id" element={<Profile />} ></Route>
                    <Route path="/tweet/:id" element={<TweetDetails />} > </Route>
                </Routes>
             
            </Grid>

            {/* Right Part */}
            <Grid
                item
                xs={0}
                lg={1.5}
                className="hidden lg:block w-full relative bg-gray-50"
            >
                <RightPart />
            </Grid>
        </Grid>
    );
};

export default HomePage;
