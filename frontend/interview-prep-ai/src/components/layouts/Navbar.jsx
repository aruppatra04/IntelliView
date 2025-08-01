import React from 'react';
import ProfileInfoCard from '../Cards/ProfileInfoCard';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='h-16 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-2.5 px-4 md:px-6 sticky top-0 z-30'>
      <div className='container mx-auto flex items-center justify-between gap-5'>
        <Link to="/dashboard" className='flex items-center gap-2'>
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-8 w-8 object-contain"
          />
          <img 
            src="/name.png" 
            alt="Name" 
            className="h-5 md:h-6 object-contain"
          />
        </Link>

        <ProfileInfoCard />
      </div>

    </div>
  )
}

export default Navbar
