import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
import { FaRepeat } from 'react-icons/fa6';
import { MdHeadsetMic } from 'react-icons/md';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';

const Facilities = () => {
    return (
<div className='bg-white'>
    <div className='container mx-auto py-5'>
        <div className='p-3 grid md:grid-cols-4 items-center justify-between gap-5'>
            <div className='flex items-center gap-2'>
                        <TbTruckDelivery className='text-7xl text-accent'/>
        <div>
            <h2 className='text-xl font-semibold'>Free Delivery</h2>
        <p className='text-accent'>For all orders above $20</p>
        </div>
        </div>
        <div className='flex items-center gap-2'>
                        <RiSecurePaymentFill className='text-7xl text-accent'/>
        <div>
            <h2 className='text-xl font-semibold'>Secure Payments</h2>
        <p className='text-accent'>Confidence on all your devices</p>
        </div>
        </div>
        <div className='flex items-center gap-2'>
                        <MdHeadsetMic className='text-7xl text-accent'/>
        <div>
            <h2 className='text-xl font-semibold'>Top-notch Support</h2>
        <p className='text-accent'>plantvillacustomercare.com</p>
        </div>
        </div>
        <div className='flex items-center gap-2'>
                        <FaRepeat className='text-7xl text-accent'/>
        <div>
            <h2 className='text-xl font-semibold'>Top-notch Support</h2>
        <p className='text-accent'>plantvillacustomercare.com</p>
        </div>
        </div>
        </div>
        </div>
</div>
    );
};

export default Facilities;