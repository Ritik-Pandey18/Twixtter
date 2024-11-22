
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import React from 'react'
import Button from '@mui/material/Button'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const RightPart = () => {
    const handleChangeTheme = () => {
        console.log("handle change Theme")
    }
    return (
        <div className='py-5 sticky top'>

            <div className='relative flex items-center'>
                <input type="text" className='py-3 rounded-full text-gray w-full pl-12' />
                <div className='absolute top-0 left-0 pl-3 pt-3'>
                    <SearchIcon className='text-gray-500' />
                </div>
                <Brightness4Icon className='ml-3 cursor-pointer' onclick={handleChangeTheme} />
            </div>
            <section className='my-5'>
                <h1 className='text-xl font-bold'>Get Verified</h1>
                <h1 className='font-bold my-2'>subscribe to unlock new features</h1>
                <Button variant="contained" color="primary" sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px", }}>
                    Get Verified</Button>
            </section>
            <section className='mt-7 space-y-5'>
                <h1 className='font-bold text-xl py-1'>what's happening</h1>
                <div>
                    <p className='text-sm'>
                        Fifa men's world cup-live
                    </p>

                    <p className='font-bold'>#
                        Maharashtra Elections: BJP and Allies Push for Victory Amidst Retirement Threats</p>
                    <p className='font-bold'>
                        #1 day ago · Politics · 99K posts</p>
                    <p className='font-light'>
                        #Federer's Heartfelt Farewell to Nadal as Tennis Legend Retires</p>
                    <p className='font-areal'>#
                        1 day ago · Tennis · 83K posts</p>
                    <p className='font-bold'>
                        #Delhi's Air Pollution Crisis: Smog Chokes City</p>

                </div>
                {[1, 1, 1].map((item) => <div className="flex justify-between w-full">
                    <div>
                        <p>entertaintment</p>
                        <p>entertaintment</p>
                        <p>entertaintment</p>
                    </div>
                    <MoreHorizIcon />
                </div>)}
            </section >
        </div >
    )
}

export default RightPart
