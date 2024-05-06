import React, { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HeaderBegin from '../components/HeaderBegin';
import Login from '../components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogin } from '../store/loginSlice';
import { RootState } from '../store/store';
import '../styles/fonts.css';

const BeginPage: React.FC = () => {
    const isLoginOpen = useSelector((state: RootState) => state.login.isOpen);
    const dispatch = useDispatch();
    return (

        <div className='w-full mx-auto my-2 overflow-hidden'>
            {/* <HeaderBegin onLoginClick={toggleLogin} />
            <Login open={isLoginOpen} handleOpen={toggleLogin} /> */}
            <HeaderBegin onLoginClick={() => dispatch(toggleLogin())} />
            <Login open={isLoginOpen} handleOpen={() => dispatch(toggleLogin())} />
            
            <div className=' h-screen overflow-hidden font-custom'>
                <div className='flex flex-col justify-center pt-12 mt-12'>
                    <div className='flex justify-center font-bold text-6xl'>Xem vật phẩm tiếp theo</div>
                    <div className='flex justify-center font-semibold text-5xl text-green-800'>Thịnh hành trong trò chơi</div>
                    <div className='flex justify-center  space-x-2 py-12'>
                        <span className='w-2 h-2 bg-gray-500 rounded-full'></span>
                        <span className='w-2 h-2 bg-green-800 rounded-full'></span>
                        <span className='w-2 h-2 bg-gray-500 rounded-full'></span>
                        <span className='w-2 h-2 bg-gray-500 rounded-full'></span>
                    </div>

                </div>
                <div className='grid grid-cols-7 gap-4'>
                    <div className='flex flex-col space-y-4 transform -translate-y-24'>
                        <img className='rounded-lg h-96' src='https://picsum.photos/400/800?random=12' alt='img_item'></img>
                        <img className='rounded-lg h-96' src='https://picsum.photos/400/800?random=13' alt='img_item'></img>


                    </div>
                    <div className='flex flex-col space-y-4 transform -translate-y'>
                        <img className='rounded-lg h-96' src='https://picsum.photos/400/800?random=15' alt='img_item'></img>
                        <img className='rounded-lg h-96' src='https://picsum.photos/400/800?random=16' alt='img_item'></img>

                    </div>
                    <div className='flex flex-col space-y-4 transform translate-y-24'>
                        <img className='rounded-lg h-96' src='https://picsum.photos/400/800?random=25' alt='img_item'></img>
                        <img className='rounded-lg h-96' src='https://picsum.photos/400/800?random=26' alt='img_item'></img>

                    </div>
                    <div className='flex flex-col space-y-4 transform translate-y-48'>
                        <img className='rounded-lg h-96' src='https://picsum.photos/400/800?random=35' alt='img_item'></img>
                        <img className='rounded-lg h-96' src='https://picsum.photos/400/800?random=36' alt='img_item'></img>

                    </div>
                    <div className='flex flex-col space-y-4 transform translate-y-24'>
                        <img className='rounded-lg h-96' src='https://picsum.photos/400/800?random=42' alt='img_item'></img>
                        <img className='rounded-lg h-96' src='https://picsum.photos/400/800?random=43' alt='img_item'></img>

                    </div>
                    <div className='flex flex-col space-y-4 transform -translate-y'>
                        <img className='rounded-lg h-96' src='https://picsum.photos/400/800?random=55' alt='img_item'></img>
                        <img className='rounded-lg h-96' src='https://picsum.photos/400/800?random=56' alt='img_item'></img>

                    </div>
                    <div className='flex flex-col space-y-4 transform -translate-y-24'>
                        <img className='rounded-lg h-96' src='https://picsum.photos/400/800?random=65' alt='img_item'></img>
                        <img className='rounded-lg h-96' src='https://picsum.photos/400/800?random=66' alt='img_item'></img>

                    </div>

                </div>
                <div className='flex justify-center absolute inset-x-0 bottom-2'>
                    <div className='bg-green-800 h-12 w-12 rounded-full flex justify-center items-center shadow-sm animate-bounce' >
                        <svg fill='none' viewBox='0 0 24 24 ' stroke='white'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' d="M19 9l-7 7-7-7" ></path>
                        </svg>
                    </div>
                </div>
            </div>


        </div>
    )

}
export default BeginPage;