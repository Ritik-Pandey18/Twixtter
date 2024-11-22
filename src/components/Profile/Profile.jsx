import React, { useState } from 'react';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TweetCard from '../HomeSection/TweetCard';
import ProfileModal from './ProfileModal';
const Profile = () => {
    const [tabValue, setTabValue] = useState('1')

    const navigate = useNavigate();

    const handleBack = () => navigate(-1);

    const handleOpenProfileModel = () => {
        console.log("open profile model")
    }
    const handleFollowUser = () => {
        console.log(" Follow User")
    }
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue)
        if (newValue === 4) {
            console.log("likes tweet")
        }
        else if (newValue === 1) {
            console.log("users tweet")
        }
    }
    return (
        <div>
            <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>

                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h1 className=' py-5 text-5xl font-bold oapcity-90 ml-5'>Ritik Pandey</h1>

            </section>

            <section>
                <img className='w-[100%] h-[15rem] object-cover' src="https://cdn.pixabay.com/photo/2024/05/26/15/27/anime-8788959_1280.jpg" />
            </section>
            <section className='pl-5'>
                <div className='flex justify-between items-start mt-5 h-[5rem]'>
                    <Avatar
                        className='transform translate-y-34'
                        alt="react developer"
                        src="https://cdn.pixabay.com/photo/2017/08/01/08/07/sea-2563389_960_720.jpg"
                        sx={{ width: "5rem", height: "5rem", border: "4px solid yellow" }}
                    />

                    {true ? (<Button
                        onClick={handleOpenProfileModel}
                        variant='conatined' sx={{ borderRadius: "90px" }}>Edit Profile</Button>) :
                        (<Button
                            onClick={handleFollowUser}
                            variant='conatined' sx={{ borderRadius: "20px" }}>{true ? "follow" : "unfollow"}</Button>)}


                </div>
                <div>
                    <div className="flex items-center">
                        <h1 className="text-lg font-bold">Ritik Pandey</h1>
                        {true &&
                            <img
                                className="w-9 h-9 ml-4"
                                src="https://tse3.mm.bing.net/th?id=OIP.ZNuDR2bPovYzdzWJRxFv3gHaNK&pid=Api&P=0&h=180"
                                alt="Verified"
                            />}
                    </div>

                    <h1 className='text-gray-600'>@ritik_1911</h1>
                </div>
                <div className="mt-2 space-y-3">
                    <p>hello, i am going to become full stack developer</p>
                    <div className='py-1 flex space-x-5'>
                        <div className="flex items-center text-gray-600">
                            <BusinessCenterIcon />
                            <p className='ml-2'> complete web developer</p>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <LocationOnIcon />
                            <p className='ml-2'>India</p>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <CalendarMonthIcon />
                            <p className='ml-2'>Joined Since October 2024</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-5'>
                        <div className='flex items-center space-x-1 font-semibold'>
                            <span>190</span>
                            <span className='text-gray-600'> following</span>
                        </div>

                        <div className='flex items-center space-x-1 font-semibold'>
                            <span>570</span>
                            <span className='text-gray-600'> followers</span>
                        </div>

                    </div>
                </div>
            </section>
            <section className='py-5'>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                                <Tab label="tweets" value="1" />
                                <Tab label="replies" value="2" />
                                <Tab label="medias" value="3" />
                                <Tab label="likes" value="4" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            {[1, 1, 1, 1].map((item) => <TweetCard />)}
                        </TabPanel>
                        <TabPanel value="2">users replies </TabPanel>
                        <TabPanel value="3">media</TabPanel>
                        <TabPanel value="4">likes</TabPanel>
                    </TabContext>
                </Box>
            </section>

            <section>
                <ProfileModal />
            </section>
        </div>
    )
}

export default Profile
