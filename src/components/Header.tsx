import React from 'react';
import { Moon, Sun, ShoppingCart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';


const Header= () => {
const {toggleTheme,theme } = useTheme()



 
  return (
    <header className={`
      ${theme === "dark" ? 'bg-gray-800 text-white' : 'bg-white text-black'}
      shadow-md transition-colors duration-300 ease-in-out mt-4 border-b border-b-gray-200
    `}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
         
          <span className="text-xl font-bold ">WINGMAN ECOMMERCE</span>
        </div>

    


        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className={`
              p-2 rounded-full hover:bg-gray-200
              ${theme === "dark"  ? 'hover:bg-gray-700' : ''}
            `}
            aria-label="Toggle Theme"
          >
            {theme === "dark"  ? (
              <Sun className="text-yellow-500" size={24} />
            ) : (
              <Moon className="text-gray-800" size={24} />
            )}
          </button>

          <button 
            className={`
              p-2 rounded-full hover:bg-gray-200 relative
              ${theme === "dark"  ? 'hover:bg-gray-700' : ''}
            `}
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={24} />
            <span 
              className="absolute -top-2 -right-2 bg-[#66B29B] text-white 
              rounded-full w-5 h-5 flex items-center justify-center text-xs"
            >
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;