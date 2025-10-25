import React, { use, useState } from 'react';
import auth from '../assets/auth.jpg';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../authContext/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'sonner';

const Register = () => {
  const { createUser, setUser, updateUser, signInWithGoogle } = use(AuthContext);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const passPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passPattern.test(password)) {
      setError('Password must be at least 6 characters long, with both uppercase and lowercase letters.');
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        setUser(result.user);
        navigate("/");
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  const handleToggleShowPass = (event) => {
    event.preventDefault();
    setShowPass(!showPass);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-stretch sm:m-24 rounded-2xl overflow-hidden sm:h-[550px] max-sm:p-3">
      <div className="flex items-center justify-center sm:w-1/2 bg-white p-6 max-sm:rounded-md">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-center mb-2 text-[#344e41]">
            Register Now!
          </h2>
          <p className="text-gray-600 text-center mb-4">
            Get started with an account on <span className="font-semibold text-[#344e41]">Plant Villa</span>.
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full border border-[#344e41] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#344e41]"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full border border-[#344e41] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#344e41]"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Photo URL
              </label>
              <input
                name="photo"
                type="url"
                placeholder="Profile Image URL"
                className="w-full border border-[#344e41] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#344e41]"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700 text-sm font-medium">
                Password
              </label>
              <input
                name="password"
                type={showPass ? 'text' : 'password'}
                placeholder="Create Password"
                className="w-full border border-[#344e41] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#344e41]"
                required
              />
              <button
                type="button"
                className="absolute top-8 right-3"
                onClick={handleToggleShowPass}
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
              {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#344e41] text-white font-medium py-2 rounded-md hover:bg-[#24382f] transition"
            >
              Register
            </button>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full border border-[#344e41] text-gray-700 font-medium py-2 rounded-md hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              <FcGoogle className="text-xl" />
              <p>Continue with Google</p>
            </button>
          </form>

          <div className="mt-3 text-center text-sm">
            <p>
              Already have an account?{' '}
              <Link className="underline text-[#344e41]" to="/login">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden sm:block w-1/2 h-full">
        <img
          src={auth}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
