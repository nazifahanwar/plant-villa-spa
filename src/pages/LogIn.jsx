import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import auth from '../assets/auth.jpg'
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../authContext/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LogIn = () => {
  const { signIn,signInWithGoogle,setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPass,setShowPass] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
        });
  };
const handleToggleShowPass = (event) => {
        event.preventDefault();
        setShowPass(!showPass);}
const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                console.log(error)
            })
        }
    return (<div className="flex justify-between items-stretch m-24 rounded-2xl overflow-hidden h-[550px]">
      <div className="flex items-center justify-center w-1/2 bg-white">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-center mb-4">Welcome Back!</h2>
          <p className="text-accent text-center mb-6">
            Enter your email and password to access your account.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email
              </label>
              <input name='email'
                type="email"
                placeholder="Email"
                className="w-full border border-[#344e41] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#344e41]"
                required
              />
            </div>

            <div className='relative'>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Password
              </label>
              <input type={showPass ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                className="w-full border border-[#344e41] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#344e41]"
                required
              /><button type='button' className='absolute top-8 right-5' onClick={handleToggleShowPass}>{showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</button>
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

            <button onClick={handleGoogleSignIn}
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
    
export default LogIn;