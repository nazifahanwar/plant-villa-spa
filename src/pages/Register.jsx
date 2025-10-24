import React from 'react';
import auth from '../assets/auth.jpg'
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="flex justify-between items-stretch m-24 rounded-2xl overflow-hidden h-[550px]">
      {/* Left Side — Form Section */}
      <div className="flex items-center justify-center w-1/2 bg-white">
        <div className=" w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-center mb-2 text-[#344e41]">
            Register Now!
          </h2>
          <p className="text-gray-600 text-center mb-4">
            Get started with an account on <span className="font-semibold text-[#344e41]">Plant Villa</span>.
          </p>

          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-[#344e41] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#344e41]"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-[#344e41] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#344e41]"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Photo URL
              </label>
              <input
                type="url"
                placeholder="Profile Image URL"
                className="w-full border border-[#344e41] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#344e41]"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Create Password"
                className="w-full border border-[#344e41] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#344e41]"
                required
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-[#344e41] text-white font-medium py-2 rounded-md hover:bg-[#24382f] transition"
            >
              Register
            </button>
          <button
        type="button"
        className="w-full border border-[#344e41] text-gray-700 font-medium py-2 rounded-md hover:bg-gray-100 transition flex items-center justify-center gap-2">
    <FcGoogle className="text-xl" />
     <p>Continue with Google</p>
        </button>
          </form>
          <div className='mt-2'>
            <p>Already have an account?Please <Link className='underline' to='/login'>Log in</Link></p>
          </div>
        </div>
      </div>

      {/* Right Side — Image Section */}
      <div className="w-1/2 h-full">
        <img
          src={auth}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
    