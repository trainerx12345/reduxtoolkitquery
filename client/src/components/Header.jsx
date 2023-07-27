import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../assets/img/headlogo3.svg';
import SimpleModals from './modals/SimpleModals';

const Header = () => {
  const showModal = () => {
    return (
      <SimpleModals
        modal={{ tite: 'Sample', message: 'Heelo', isShow: 'true' }}
      />
    );
  };
  return (
    <header className="py-6 mb-12 header-b">
      <div className=" container flex flex-col items-center justify-between mx-auto sm:flex-row sm:px-2 gap-3">
        <Link to="/">
          <Logo className="max-w-lg" />
        </Link>
        <button onClick={() => showModal}>Modal</button>
        <div className="flex items-center gap-6 ">
          <Link
            className="w-[5rem] text-center bg-gradient-to-tr from-green-600 to-green-400 px-4 py-3  bg-clip-border text-white shadow-lg shadow-green-500/40 rounded-lg transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85]"
            to="/Bulletin">
            Bulletin
          </Link>
          <Link
            className="w-[5rem] text-center bg-gradient-to-tr from-green-600 to-green-400 px-4 py-3  bg-clip-border text-white shadow-lg shadow-green-500/40 rounded-lg transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85]"
            to="/Forms">
            Forms
          </Link>
          <Link
            className="w-[5rem] text-center bg-gradient-to-tr from-green-600 to-green-400 px-4 py-3  bg-clip-border text-white shadow-lg shadow-green-500/40 rounded-lg transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85]"
            data-dialog-target="sign-in-dialog"
            type="button"
            to="/loginPage">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
