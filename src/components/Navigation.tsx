import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Leaf } from 'lucide-react';

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#348788] shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white">Supply Chain Simulator</h1>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'bg-white text-[#348788]' 
                  : 'text-white hover:bg-[#2a6e6f]'
              }`}
            >
              <LayoutDashboard className="w-4 h-4 mr-2" />
              Dashboard
            </Link>
            <Link
              to="/sustainability"
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/sustainability') 
                  ? 'bg-white text-[#348788]' 
                  : 'text-white hover:bg-[#2a6e6f]'
              }`}
            >
              <Leaf className="w-4 h-4 mr-2" />
              Sustainability
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};