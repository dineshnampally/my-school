import React, { useState } from 'react';
import logo from '../assets/pixelcut-export.svg';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const AdminSignin = () => {
  const [username, setUsernName] = useState('');
  const [password, setPassword] = useState('');
  const [isMatched, setIsMatched] = useState(true);
  const [clue1, setClue1] = useState('');
  const [clue2, setClue2] = useState('');
  const [clues, setClues] = useState(false);

  const user_name = import.meta.env.VITE_ADMIN_USERNAME;
  const admin_password = import.meta.env.VITE_ADMIN_PASSWORD;
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === user_name && password === admin_password) {
      setIsMatched(true);
      sessionStorage.setItem('isAuthenticated', "true");
      navigate("/admin");
    } else {
      setIsMatched(false);
    }
  }

  const handleFindPass = (e) => {
    e.preventDefault();
    if (clue1.toLowerCase() === 'punish' && clue2.toLowerCase() === 'praise') {
      setClues(true);
      setTimeout(() => {
        setClues(false);
        setClue1('')
        setClue2('')
      }, 1000);
    } else {
      setClues(false);
    }
  }

  return (
    <>
      <div className='max-h-screen flex rounded-lg shadow-md bg-[#ffff] max-w-[95%] mx-auto items-center justify-center p-6 mt-3'>
        <div className="max-w-md w-full bg-white rounded-lg p-6 space-y-4 border border-gray-300">
          <div className="text-center">
            <img
              src={logo}
              className="w-32 mx-auto"
              alt="Logo"
            />
          </div>
          <h1 className="text-2xl xl:text-3xl font-bold text-center text-black font-sans">Admin Login</h1>
          {!isMatched && <p className='font-roboto text-red-600 text-sm text-center font-semibold'>The Credentials Do not Match. Please try again.</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-green-300 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              type="text"
              placeholder="User Name"
              onChange={e => setUsernName(e.target.value)}
            />
            <input
              className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-green-300 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              type="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-all flex items-center justify-center focus:outline-none"
            >
              Login
            </button>
          </form>
          <div className='mt-6 flex flex-wrap justify-center gap-3'>
  <h3 className='font-extralight text-center'>For Sign-in Credentials <em>solve this puzzle</em></h3>
  <form onSubmit={handleFindPass} className="space-y-2 text-center w-full sm:w-auto">
    <div className="flex justify-center items-center space-x-2 w-full sm:w-auto">
      <input
        type="text"
        className="px-2 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-auto"
        onChange={e => setClue1(e.target.value)}
        placeholder="First Clue"
        value={clue1}
      />
      <span>in</span>
      <h6 className='inline'>Private</h6>
    </div>
    <div className="flex justify-center items-center space-x-2 w-full sm:w-auto">
      <input
        type="text"
        className="px-2 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-auto"
        onChange={e => setClue2(e.target.value)}
        placeholder="Second Clue"
        value={clue2}
      />
      <span>in</span>
      <h6 className='inline'>Public</h6>
    </div>
    <button
      type="submit"
      className="mt-4 px-4 py-2 text-black rounded-lg hover:border transition-all"
    >
      Find
    </button>
  </form>
  {clues && (
    <div className="mt-4 text-center text-green-600">
      <p>Username: admin</p>
      <p>Password: rdf@ms</p>
    </div>
  )}
</div>

        </div>
      </div>
    </>
  );
}

export default AdminSignin;
