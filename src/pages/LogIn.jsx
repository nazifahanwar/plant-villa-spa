import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import auth from '../assets/auth.jpg'
import { Link } from 'react-router';

const LogIn = () => {
    return (<div className="flex justify-between items-stretch m-24 rounded-2xl overflow-hidden h-[550px]">
      {/* Left Side — Form Section */}
      <div className="flex items-center justify-center w-1/2 bg-white">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-center mb-4">Welcome Back!</h2>
          <p className="text-accent text-center mb-6">
            Enter your email and password to access your account.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-[#344e41] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#344e41]"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-[#344e41] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#344e41]"
                required
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <a href="#" className="text-gray-700 hover:text-black">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-base-300 text-white font-medium py-2 rounded-md hover:bg-gray-800 transition"
            >
              Login
            </button>

            <button
              type="button"
              className="w-full border border-[#344e41] text-gray-700 font-medium py-2 rounded-md hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              <FcGoogle className="text-xl" />
              <p>Continue with Google</p>
            </button>
          </form>
          <div className='mt-2'>
            <p>Don't have an account?Please <Link className='underline' to='/register'>Register</Link></p>
          </div>
        </div>
      </div>

      {/* Right Side — Image Section */}
      <div className="w-1/2 h-full">
        <img
          src={auth}
          alt="Login illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

    //     <div className='container mx-auto flex justify-between items-center bg-gray-50 w-3/4 h-3/4 gap-3 border-amber-700 border-2'>
    //     <div className="flex items-center justify-center h-full w-1/2 border-3 border-red-900">
    //   <div className="bg-white shadow-lg rounded-2xl p-8 w-full ">
    //     <h2 className="text-2xl font-semibold text-center mb-6">Welcome Back</h2>
    //     <p className='text-accent'>Enter your email and password to access your account.</p>
    //     <form  className="space-y-4">
    //       <div>
    //         <label className="block text-gray-700 text-sm font-medium mb-1">
    //           Email
    //         </label>
    //         <input
    //           type="email"
    //           placeholder="Email"
    //         //   value={email}
    //         //   onChange={(e) => setEmail(e.target.value)}
    //           className="w-full border border-[#344e41] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#344e41]"
    //           required
    //         />
    //       </div>

    //       <div>
    //         <label className="block text-accent text-sm font-medium mb-1">
    //           Password
    //         </label>
    //         <input
    //           type="password"
    //           placeholder="Password"
    //         //   value={password}
    //         //   onChange={(e) => setPassword(e.target.value)}
    //           className="w-full border border-[#344e41] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#344e41]"
    //           required
    //         />
    //       </div>

    //       <div className="flex justify-between items-center text-sm">
    //         <a href="#" className="text-gray-700 hover:text-black">
    //           Forgot password?
    //         </a>
    //       </div>

    //       <button
    //         type="submit"
    //         className="w-full bg-base-300 text-white font-medium py-2 rounded-md hover:bg-gray-800 transition"
    //       >
    //         Login
    //       </button>
    //       <button
    //         type="submit"
    //         className="w-full bg-base-300 text-white font-medium py-2 rounded-md hover:bg-gray-800 transition"
    //       ><div className='flex items-center justify-center gap-2'><FcGoogle className='text-xl'/><p>Continue with Google</p></div>
    //       </button>
    //     </form>
    //   </div>
    // </div>
    // <div className='w-1/2'>
    //         <img src={auth} className='w-full h-full object-cover' />
    // </div>
    //     </div>
    
export default LogIn;