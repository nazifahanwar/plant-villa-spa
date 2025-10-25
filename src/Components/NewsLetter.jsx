import React from 'react';
import newsLetterImg from '../assets/plant-wall-shelf-with-blank-space.jpg'
import { toast } from 'sonner';
const handleSubscribe=(e)=>{
    e.preventDefault();
    e.target.reset();
    toast.success('Subscription done successfully!')
}
const NewsLetter = () => {
    return (
        <div className='bg-base-200'>
            <div className='container mx-auto flex justify-between items-center p-5 gap-5 max-sm:flex-col'>
                <div>
                             <h2
        className="text-3xl font-bold pt-5 text-center text-white">Sign Up To Our Newsletter
      </h2>
      <p className='text-accent py-2 text-center text-white'>
        Stay up to date on the latest news with our carefully curated newsletters.
      </p> 
                    <form onSubmit={handleSubscribe}><div className="join w-full">
  <button type='submit' className="btn join-item btn-primary">Subscribe</button>
  <input  className="input  w-full border border-[#344e41] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#344e41]" placeholder="Enter Your Email..." type='email' required/>
</div></form>
                </div>
             <div className='sm:w-1/2 '>
                <img src={newsLetterImg} className='w-full object-cover rounded-lg shadow-sm'/>
             </div>
            </div>
        </div>
    );
};

export default NewsLetter;