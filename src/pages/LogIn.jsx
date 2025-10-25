import React, { use, useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import auth from '../assets/auth.jpg'
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../authContext/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'sonner';

const LogIn = () => {
  const { signIn, signInWithGoogle, setUser, resetPassword } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(() => {
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleToggleShowPass = (event) => {
    event.preventDefault();
    setShowPass(!showPass);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        setUser(result.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(error => {
        console.log(error)
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    resetPassword(email)
      .then(() => {
        toast.info('Please check your gmail');
        window.open("https://mail.google.com", "_blank");
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-stretch sm:m-24 rounded-2xl overflow-hidden sm:h-[550px] max-sm:p-3">
      <div className="flex items-center justify-center sm:w-1/2 bg-white p-6 max-sm:rounded-md">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-center mb-2">Welcome Back!</h2>
          <p className="text-accent text-center mb-6">
            Enter your email and password to access your account.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                ref={emailRef}
                placeholder="Email"
                className="w-full border border-[#344e41] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#344e41]"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Password
              </label>
              <input
                type={showPass ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                className="w-full border border-[#344e41] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#344e41]"
                required
              />
              <button
                type="button"
                className="absolute top-9 right-2"
                onClick={handleToggleShowPass}
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="flex justify-between items-center text-sm">
              <div onClick={handleForgetPassword}>
                <a className="text-gray-700 hover:text-black cursor-pointer">Forgot password?</a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#344e41] text-white font-medium py-2 rounded-md hover:bg-[#2d3d34] transition"
            >
              Login
            </button>

            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="w-full border border-[#344e41] text-gray-700 font-medium py-2 rounded-md hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              <FcGoogle className="text-xl" />
              <p>Continue with Google</p>
            </button>
          </form>

          <div className="mt-3 text-center text-sm">
            <p>
              Don’t have an account?{' '}
              <Link className="underline text-[#344e41]" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden sm:block w-1/2 h-full">
        <img src={auth} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default LogIn;
