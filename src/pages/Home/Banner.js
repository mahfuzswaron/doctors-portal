import React from 'react';
import img from '../../images/chair.png';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content justify-center flex-col  lg:flex-row-reverse">
                    <div className='w-2/3 flex'>
                    <img  src={img} class="rounded-lg w-4/5 mx-auto" alt='' />
                    </div>
                    <div className='w-1/2'>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Banner;